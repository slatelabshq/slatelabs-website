import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { toast } from 'sonner';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { P as PageHero } from './PageHero-CCrwiexh.mjs';
import { C as CALENDLY_URL } from './calendly-ow3Yvb14.mjs';
import { e as workBrillanta, t as trackEvent } from './router-Pw5mFUwk.mjs';
import './LagosTime-BkF40qTk.mjs';
import '@tanstack/react-query';
import '@tanstack/react-router';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    setErrorMsg(null);
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      projectType: String(fd.get("projectType") ?? "").trim(),
      budget: String(fd.get("budget") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "")
      // honeypot
    };
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        trackEvent("contact_submit", {
          project_type: payload.projectType,
          budget: payload.budget
        });
        toast.success("Message sent \u2014 we'll be in touch within 24 hours.");
        setStatus("success");
        return;
      }
      const data = await res.json().catch(() => ({}));
      const msg = data && typeof data.error === "string" && data.error || "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
      toast.error(msg);
    } catch {
      const msg = "Network error. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
      toast.error(msg);
    }
  }
  const input = "w-full rounded-xl bg-background border border-transparent focus:border-foreground/20 outline-none px-4 py-3 text-foreground placeholder:text-muted transition-colors";
  const label = "block text-xs font-medium text-muted mb-2";
  const submitting = status === "submitting";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { section: "Contact", image: workBrillanta, imageAlt: "Slate Labs creative work", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Let's build on a ",
      /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "clean slate." })
    ] }), description: "Ready to transform your brand, build your platform, or scale your business? Tell us what you're working on." }),
    /* @__PURE__ */ jsx(Section, { className: "!pt-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-[90rem] mx-auto border border-border rounded-sm p-8 md:p-12 bg-surface/50", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Send a message" }),
        status === "success" ? /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-background p-8 border border-primary/30", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium tracking-tight mb-3", children: "Message received." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Thanks \u2014 we've got your message and will reply within 24 hours. Check your inbox for a confirmation." })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-5", noValidate: true, children: [
          /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", style: {
            position: "absolute",
            left: "-10000px",
            width: "1px",
            height: "1px",
            overflow: "hidden"
          }, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "website", children: "Website" }),
            /* @__PURE__ */ jsx("input", { id: "website", name: "website", type: "text", tabIndex: -1, autoComplete: "off", defaultValue: "" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: label, htmlFor: "name", children: "Name *" }),
            /* @__PURE__ */ jsx("input", { id: "name", name: "name", required: true, maxLength: 100, className: input })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: label, htmlFor: "email", children: "Email *" }),
            /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", required: true, maxLength: 255, className: input })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: label, htmlFor: "company", children: "Company / Organization" }),
            /* @__PURE__ */ jsx("input", { id: "company", name: "company", maxLength: 200, className: input })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: label, htmlFor: "projectType", children: "Project type" }),
            /* @__PURE__ */ jsxs("select", { id: "projectType", name: "projectType", className: input, defaultValue: "", children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select\u2026" }),
              /* @__PURE__ */ jsx("option", { children: "Brand Foundations" }),
              /* @__PURE__ */ jsx("option", { children: "Digital Platforms" }),
              /* @__PURE__ */ jsx("option", { children: "Intelligent Systems" }),
              /* @__PURE__ */ jsx("option", { children: "Ile Eko" }),
              /* @__PURE__ */ jsx("option", { children: "Other" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: label, htmlFor: "budget", children: "Budget range" }),
            /* @__PURE__ */ jsxs("select", { id: "budget", name: "budget", className: input, defaultValue: "", children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select\u2026" }),
              /* @__PURE__ */ jsx("option", { children: "Under \u20A6500k" }),
              /* @__PURE__ */ jsx("option", { children: "\u20A6500k\u2013\u20A61M" }),
              /* @__PURE__ */ jsx("option", { children: "\u20A61M\u2013\u20A63M" }),
              /* @__PURE__ */ jsx("option", { children: "\u20A63M+" }),
              /* @__PURE__ */ jsx("option", { children: "Not Sure" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: label, htmlFor: "message", children: "Message *" }),
            /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", required: true, rows: 6, maxLength: 5e3, className: `${input} resize-none` })
          ] }),
          status === "error" && errorMsg && /* @__PURE__ */ jsx("div", { className: "md:col-span-2 -mt-1", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", role: "alert", children: errorMsg }) }),
          /* @__PURE__ */ jsx("div", { className: "md:col-span-2 mt-2", children: /* @__PURE__ */ jsxs("button", { type: "submit", disabled: submitting, className: "inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-primary glow-primary active:translate-y-px focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed", children: [
            submitting && /* @__PURE__ */ jsx("span", { className: "inline-block h-3 w-3 rounded-full border-2 border-background/40 border-t-background animate-spin", "aria-hidden": "true" }),
            submitting ? "Sending\u2026" : "Send message"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "md:col-span-5 space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-3", children: "Book a call" }),
          /* @__PURE__ */ jsx("a", { href: CALENDLY_URL, target: "_blank", rel: "noopener noreferrer", onClick: () => trackEvent(), className: "inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary glow-primary transition-colors", children: "Book a 20-min intro \u2192" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted mt-3", children: "Pick a slot that works. No prep needed." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-3", children: "Direct" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:hello@slatelabshq.com", className: "block text-xl font-medium hover:text-primary", children: "hello@slatelabshq.com" }),
          /* @__PURE__ */ jsxs("a", { href: "https://wa.me/2347026036554?text=Hi%20Slate%20Labs", target: "_blank", rel: "noopener noreferrer", onClick: () => trackEvent(), className: "mt-3 inline-flex items-center gap-2 text-base hover:text-primary", children: [
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 32 32", className: "w-5 h-5", fill: "#25D366", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.045 2.264v.114c-.015.99.405 1.976.832 2.834 1.36 2.493 3.864 4.795 6.616 5.798.717.288 2.044.66 2.832.66.99 0 2.176-.59 2.59-1.55.13-.297.187-.622.187-.95 0-.187 0-.348-.044-.516-.115-.387-1.504-.985-1.847-1.146-.215-.115-.402-.215-.616-.215zM16.32 0c-8.696 0-15.747 7.05-15.747 15.747 0 2.79.732 5.51 2.107 7.916L0 32l8.532-2.234a15.61 15.61 0 0 0 7.788 1.974c8.696 0 15.747-7.05 15.747-15.748C32.067 7.052 25.017 0 16.32 0z" }) }),
            "WhatsApp / Call \u2014 +234 702 603 6554"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-3", children: "Location" }),
          /* @__PURE__ */ jsx("p", { className: "text-base", children: "Lagos, Nigeria (Lekki Phase 1)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-3", children: "Response time" }),
          /* @__PURE__ */ jsx("p", { className: "text-base", children: "We typically respond within 24 hours." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-3", children: "Other ways to connect" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-base", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://instagram.com/slatelabs.hq", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: "Instagram \u2014 @slatelabs.hq" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://tiktok.com/@slatelabs.hq", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: "TikTok \u2014 @slatelabs.hq" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/slate-labs-hq", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: "LinkedIn \u2014 Slate Labs" }) })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}

export { Contact as component };
//# sourceMappingURL=contact-bif7DIT3.mjs.map
