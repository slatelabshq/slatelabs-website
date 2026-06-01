Continue the contact-form build with the remaining phases. Email infrastructure is already in place (domain `notify.www.slatelabshq.com` active, pgmq queues + cron deployed).

## Phase A — Scaffold transactional email + templates

1. Call `email_domain--scaffold_transactional_email` to generate:
   - `src/routes/lovable/email/transactional/send.ts` (auth-gated send route)
   - `src/routes/lovable/email/transactional/preview.ts`
   - `src/routes/email/unsubscribe.tsx` + handler
   - `src/routes/lovable/email/suppression.ts`
   - `src/lib/email-templates/registry.ts` + sample template
2. Create two branded React Email templates in `src/lib/email-templates/` (white body, Slate Labs brand accents pulled from `src/styles.css`):
   - `contact-confirmation.tsx` — to the visitor. Subject: "Thanks for reaching out — Slate Labs". Body: "Thanks, {name} — we've received your message and will reply within 24 hours." Echo their project type + message summary. Props: `{ name, projectType, message }`.
   - `contact-internal-notification.tsx` — to `hello@slatelabshq.com`. Subject: "New enquiry — {name} ({projectType})". Body: full submission (name, email, company, projectType, budget, message, IP, user-agent, timestamp).
3. Register both in `registry.ts` with `previewData`.
4. Create `src/lib/email/send.ts` helper (`sendTransactionalEmail`) per the standard pattern.

## Phase B — Database migration

Single migration adds:
- `app_role` enum (`'admin' | 'user'`)
- `user_roles` table (id, user_id, role, unique) + GRANTs + RLS + `has_role()` SECURITY DEFINER
- `contact_submissions` table: `id uuid pk`, `name text`, `email text`, `company text`, `project_type text`, `budget text`, `message text`, `ip text`, `user_agent text`, `created_at timestamptz default now()`
- GRANTs: `service_role` ALL; `authenticated` SELECT (admins only via policy)
- RLS enabled. Policies: admin SELECT via `has_role(auth.uid(),'admin')`. No public INSERT policy — the endpoint uses `supabaseAdmin` (bypasses RLS).

## Phase C — Public endpoint

Create `src/routes/api/public/contact.ts`:
- `POST` handler with Zod validation:
  - `name` 1–100, `email` valid + ≤255, `company` optional ≤200, `projectType` enum of form options, `budget` enum, `message` 1–5000, `website` (honeypot) must be empty string or undefined.
- Honeypot non-empty → return `200 { ok: true }` silently (don't tip off bots), log a warn.
- Validation failure → `400 { error: <first message> }`.
- On success:
  1. `supabaseAdmin.insert('contact_submissions', …)` with IP from `x-forwarded-for` + user-agent header. DB failure → `console.error` + `500 { error: "Could not save submission" }`.
  2. Enqueue both emails by POSTing to `/lovable/email/transactional/send` (server-to-server, using service-role bearer) with idempotency keys `contact-confirm-{id}` and `contact-internal-{id}`. Wrap each in try/catch — email failure does NOT fail the request; log `console.error` so it surfaces in server-function-logs and the `email_send_log` row records failures/dlq.
  3. Return `200 { ok: true, id }`.
- All catches use `console.error('contact-endpoint:', …)` with a stable prefix for easy log filtering.

## Phase D — Rewrite contact form

Edit `src/routes/contact.tsx` only:
- Replace `sent: boolean` with `status: 'idle' | 'submitting' | 'success' | 'error'` + `errorMsg`.
- Submit handler: `fetch('/api/public/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })`.
- Include hidden honeypot `website` field (sr-only div, `tabIndex={-1}`, `autoComplete="off"`, `aria-hidden`).
- Keep `trackEvent('contact_submit', …)` on success.
- Add `import { toast } from 'sonner'`. Success → toast + success card "Message received — we'll reply within 24 hours." Error → toast + inline red message.
- Submit button: disabled when submitting, label "Sending…" + spinner.
- Remove all `mailto:` logic from submit (keep the aside's direct `mailto:` link).

## Phase E — Verify

1. `stack_modern--invoke-server-function POST /api/public/contact` with a valid payload → expect `200`, row in `contact_submissions`, two rows pending in `email_send_log`.
2. Invoke with invalid email → expect `400`.
3. Invoke with non-empty honeypot → expect `200` but NO DB row.
4. Wait ~10s, query `email_send_log` to confirm `status='sent'` for both messages.
5. Check `stack_modern--server-function-logs` for the `contact-endpoint:` prefix to confirm logging works.

## Files

**New:** `src/routes/api/public/contact.ts`, `src/lib/email-templates/contact-confirmation.tsx`, `src/lib/email-templates/contact-internal-notification.tsx`, `src/lib/email/send.ts`, plus all scaffolded transactional routes.
**Edited:** `src/routes/contact.tsx`, `src/lib/email-templates/registry.ts`.
**Migration:** roles + `contact_submissions`.

## Out of scope

Admin dashboard for viewing submissions, captcha/rate-limiting, Calendly/WhatsApp changes.
