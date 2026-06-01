# Phase 3 — MEDIUM priority — SHIPPED ✅

## Done
- **Testimonials**: new `src/components/Testimonials.tsx`, 3-card grid with placeholder quotes (44DB / Morgan Oxford / Vida Rosa). Mounted on home (above final CTA) and about (below Press).
- **Calendly**: new `src/lib/calendly.ts` reads `VITE_CALENDLY_URL` with fallback `https://calendly.com/slatelabs/intro`. Contact page now leads with "Book a 20-min intro" button (email + WhatsApp remain). Home and Services final CTAs include "Book a 20-min call" secondary.
- **CtaButton**: now supports `external` prop for `target="_blank"` external links.
- **Work-card metric badges**: added optional `badge` field to `work-data.ts` (44DB 74.6% reach, Vida Rosa Featured engagement, Morgan Oxford 8hrs+ saved/wk, Nelly Baradi 250K+ views). Rendered as primary-tinted pill top-right on each card in `work.tsx`.
- **SEO infrastructure**: `public/robots.txt` (Allow all + Sitemap directive), `public/sitemap.xml` listing all 12 public routes with lastmod 2026-06-01.

## Out of scope (user-side)
- Custom domain DNS migration.
- Google Search Console verification + sitemap submission (`https://slatelabshq.com/sitemap.xml`).
- Replace placeholder testimonial quotes with real client sign-off when SK has them.
- Set `VITE_CALENDLY_URL` env var to the real Slate Labs Calendly link.

## Asset swaps still pending
- Hero image, logo PNG wall, SK + team headshots, Ile Eko screenshots (Phase 2 carryover).
