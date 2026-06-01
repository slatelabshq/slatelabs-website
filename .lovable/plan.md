Add the provided GA4 Measurement ID `G-B1DBF35GW9` to `.env` as `VITE_GA_MEASUREMENT_ID` so the existing analytics integration becomes active in production builds.

**Files to change**
- `.env` — add one line: `VITE_GA_MEASUREMENT_ID=G-B1DBF35GW9`

**Technical details**
- `src/lib/analytics.ts` already reads `import.meta.env.VITE_GA_MEASUREMENT_ID` and no-ops when missing or in dev mode.
- `src/routes/__root.tsx` already calls `initGA()` on mount and tracks `page_view` on SPA route changes.
- `src/routes/contact.tsx` and `src/components/WhatsAppFab.tsx` already fire custom events (`contact_submit`, `calendly_click`, `whatsapp_click`).
- Adding the env var is the final step; nothing else needs to change.