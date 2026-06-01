# Phase 5.3a — GA4 analytics

Add Google Analytics 4 to the site. Gated on a `VITE_GA_MEASUREMENT_ID` secret so nothing loads until you provide the ID (format `G-XXXXXXXXXX`). No cookie banner work in this phase — GA4 with default settings is in scope; consent UI can come later if needed.

## What changes

1. **Secret** — add `VITE_GA_MEASUREMENT_ID` via the secrets tool once you share the ID. `VITE_` prefix so it's inlined at build time and usable from the client. Empty/unset = analytics disabled (safe default for dev/preview).

2. **Loader** — new `src/lib/analytics.ts`:
   - Reads `import.meta.env.VITE_GA_MEASUREMENT_ID`.
   - `initGA()` injects the `gtag.js` script once, only in the browser, only when the ID is set, and only when `import.meta.env.PROD` is true (no analytics noise from dev/preview).
   - Bootstraps `window.dataLayer` + `gtag('config', id, { send_page_view: false })` — we send page_view manually on route change to avoid double-counting SPA navigations.
   - Exports `trackPageview(path, title)` and `trackEvent(name, params?)` helpers that no-op when the ID is missing.

3. **Route-change tracking** — in `src/routes/__root.tsx` `RootComponent`:
   - Call `initGA()` once on mount.
   - Subscribe to `router.subscribe('onResolved', ...)` to fire `trackPageview` on every navigation (covers SPA transitions, which gtag's auto page_view misses).

4. **Custom events** — wire three events through `trackEvent`:
   - `contact_submit` — fires in `src/routes/contact.tsx` after a successful submit. (Form is still `mailto:` today, so for now fire on the submit handler; swap to "on success" when the contact backend lands.)
   - `calendly_click` — on the Calendly link in `src/routes/contact.tsx` (and anywhere else `getCalendlyUrl()` is linked).
   - `whatsapp_click` — on `src/components/WhatsAppFab.tsx` and the WhatsApp link in the contact aside.

5. **Types** — small `src/types/gtag.d.ts` declaring `window.gtag` and `window.dataLayer` so TS stays happy.

## Files touched
- **New**: `src/lib/analytics.ts`, `src/types/gtag.d.ts`
- **Edit**: `src/routes/__root.tsx` (init + route subscription), `src/routes/contact.tsx` (submit + Calendly + WhatsApp events), `src/components/WhatsAppFab.tsx` (click event)
- **Secret**: `VITE_GA_MEASUREMENT_ID`

## Out of scope
- Cookie/consent banner (GA4 Consent Mode v2). Add later if you want EU compliance.
- Replacing/augmenting with Plausible or Posthog.
- Server-side Measurement Protocol events.
- Contact form backend (still tracked under Phase 5.3).

## Verification
After deploying with the secret set: open the published site in a browser with GA DebugView open → confirm a `page_view` on load, another on client-side nav, and `calendly_click` / `whatsapp_click` when those links are clicked. Confirm dev/preview builds send nothing (no `gtag` script in network tab).

## What I need from you
1. Your **GA4 Measurement ID** (`G-XXXXXXXXXX`) — from GA4 → Admin → Data Streams → Web → Measurement ID. I'll add it as `VITE_GA_MEASUREMENT_ID` via the secrets tool.
