import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  projectType: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(5000),
  // Honeypot — bots fill this. Must be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

const LOG_PREFIX = "contact-endpoint:";

async function enqueueEmail(
  appOrigin: string,
  serviceKey: string,
  body: Record<string, unknown>,
): Promise<void> {
  const res = await fetch(`${appOrigin}/lovable/email/transactional/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${serviceKey}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "<unreadable>");
    throw new Error(`send route ${res.status}: ${text}`);
  }
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!supabaseUrl || !serviceKey) {
          console.error(LOG_PREFIX, "missing env vars");
          return Response.json(
            { error: "Server configuration error" },
            { status: 500 },
          );
        }

        // Parse JSON
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        // Validate
        const parsed = ContactSchema.safeParse(raw);
        if (!parsed.success) {
          // If honeypot was filled, silently succeed.
          const honeypotIssue = parsed.error.issues.find(
            (i) => i.path[0] === "website",
          );
          if (honeypotIssue) {
            console.warn(LOG_PREFIX, "honeypot triggered");
            return Response.json({ ok: true });
          }
          return Response.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid input" },
            { status: 400 },
          );
        }

        const data = parsed.data;
        const ip =
          request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
          request.headers.get("cf-connecting-ip") ??
          null;
        const userAgent = request.headers.get("user-agent") ?? null;

        const supabase = createClient(supabaseUrl, serviceKey);

        // 1. Insert submission
        const { data: inserted, error: insertError } = await supabase
          .from("contact_submissions")
          .insert({
            name: data.name,
            email: data.email,
            company: data.company || null,
            project_type: data.projectType || null,
            budget: data.budget || null,
            message: data.message,
            ip,
            user_agent: userAgent,
          })
          .select("id, created_at")
          .single();

        if (insertError || !inserted) {
          console.error(LOG_PREFIX, "insert failed", insertError);
          return Response.json(
            { error: "Could not save submission" },
            { status: 500 },
          );
        }

        const submissionId = inserted.id as string;
        const origin = new URL(request.url).origin;

        // 2. Enqueue confirmation to the visitor (best-effort)
        try {
          await enqueueEmail(origin, serviceKey, {
            templateName: "contact-confirmation",
            recipientEmail: data.email,
            idempotencyKey: `contact-confirm-${submissionId}`,
            templateData: {
              name: data.name,
              projectType: data.projectType || undefined,
              message: data.message,
            },
          });
        } catch (err) {
          console.error(LOG_PREFIX, "confirmation enqueue failed", err);
        }

        // 3. Enqueue internal notification (best-effort)
        try {
          await enqueueEmail(origin, serviceKey, {
            templateName: "contact-internal-notification",
            // recipient is overridden by template `to`, but pass for clarity
            recipientEmail: "hello@slatelabshq.com",
            idempotencyKey: `contact-internal-${submissionId}`,
            templateData: {
              name: data.name,
              email: data.email,
              company: data.company || undefined,
              projectType: data.projectType || undefined,
              budget: data.budget || undefined,
              message: data.message,
              ip: ip ?? undefined,
              userAgent: userAgent ?? undefined,
              submissionId,
              receivedAt: inserted.created_at,
            },
          });
        } catch (err) {
          console.error(LOG_PREFIX, "internal notification enqueue failed", err);
        }

        return Response.json({ ok: true, id: submissionId });
      },

      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }),
    },
  },
});
