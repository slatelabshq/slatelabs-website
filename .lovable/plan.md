# Phase 5.3 — Backend wiring (form + analytics + Calendly)

With polish done (5.2) and assets still pending (5.1), the next unblocked phase moves `/contact` off `mailto:` and adds the lightweight infra the site needs before launch.

## 1. Contact form backend
Replace the `mailto:` handoff in `src/routes/contact.tsx` with a real submission so messages land reliably (and on mobile, where `mailto:` often fails silently).

- Add a server route `src/routes/api/public/contact.ts` (POST). Validates payload with Zod (name, email, company?, projectType?, budget?, message; min/max lengths; email format).
- Sends via Resend using `RESEND_API_KEY` (stored as a Cloud secret). To: `hello@slatelabshq.com`. Reply-To: submitter's email. Subject mirrors current mailto subject.
- Basic anti-abuse: honeypot field (`company_url`), 30s min time-on-page token, simple in-memory IP rate-limit (3/min) — best-effort only.
- Client: replace `handleSubmit` with `fetch('/api/public/contact', ...)`. Keep the existing form markup and success state; add an error state with retry. Disable submit button while pending.

## 2. Calendly secret
- Move the Calendly URL fully to env. `src/lib/calendly.ts` already reads `VITE_CALENDLY_URL` with a fallback — add it as a Cloud secret so it's set in published builds. No code change beyond confirming the read path.

## 3. Analytics
- Add Plausible (privacy-first, no cookie banner needed) via a single script tag in `__root.tsx` `head().scripts`. Domain: `slatelabshq.com`. Script loads only in production (`import.meta.env.PROD`).
- Track 3 custom events through `window.plausible(...)`:
  - `Contact Submit` (on successful form POST)
  - `Calendly Click` (on the "Book a 20-min intro" link in contact + any other CTAs)
  - `WhatsApp Click` (on `WhatsAppFab` + contact aside link)

## 4. robots + sitemap sanity
- Confirm `public/robots.txt` allows crawling and references `public/sitemap.xml`.
- Confirm sitemap includes every current route (added insights routes in earlier phase).

## Files touched
- **New**: `src/routes/api/public/contact.ts`
- **Edit**: `src/routes/contact.tsx` (fetch instead of mailto, pending/error states, event tracking), `src/routes/__root.tsx` (Plausible script in prod), `src/components/WhatsAppFab.tsx` (click event), `public/robots.txt` + `public/sitemap.xml` (verify only — edits only if gaps found).
- **Secrets**: `RESEND_API_KEY`, `VITE_CALENDLY_URL` (request from user / add via secrets tool).

## Out of scope
- Hero/logo/headshot assets (5.1, still blocked).
- OG image generation.
- Replacing Plausible with GA4 or Posthog — can swap later if the user prefers.
- Multi-step form, file uploads, CRM sync.

## Verification
After build: submit the form against a dev Resend key and confirm email arrives; check Plausible dashboard receives a pageview + custom event from a published build; tab through form to confirm pending/error/success states are accessible.

## Open questions before I implement
1. **Email provider**: Resend is the simplest fit for a Worker runtime. OK, or do you prefer Postmark / SendGrid / SES?
2. **Analytics**: Plausible (lightweight, no cookie banner) vs GA4 (richer, needs consent) vs none?
3. **Calendly URL**: confirm the real link so I can stage it as the `VITE_CALENDLY_URL` secret (current fallback is `https://calendly.com/slatelabs/intro`).
