# Phase 3 — MEDIUM priority

Code-buildable items from the Phase 2 deferred list. Domain migration + Google Search Console submission are user-side ops handled outside the codebase — I'll prep what's needed (sitemap, robots, canonicals) so they're one-click ready.

## 1. Testimonials section (home + about)
- Add a `Testimonials` component (`src/components/Testimonials.tsx`): 3-card grid, quote + name + role + company, subtle border, no avatars until SK delivers.
- Seed with 3 quotes pulled from the brief's client list (44DB / Vida Rosa / Ile Eko context). Marked as placeholder copy in a comment so SK can swap.
- Mount on home (above the final CTA) and about (below Press).

## 2. Calendly integration
- Add `VITE_CALENDLY_URL` usage with a safe fallback (`https://calendly.com/slatelabs/intro` placeholder).
- Contact page: replace primary "Email us" button with "Book a 20-min intro" → opens Calendly in new tab. Keep email as secondary.
- Home final CTA + Services pillar CTAs: add secondary "Book a call" link.
- No embed widget (keeps bundle clean) — link-out only.

## 3. Work-card metric badges
- `src/lib/work-data.ts`: add optional `badge?: string` per entry (e.g. 44DB → "74.6% conv", Brillanta → "…", etc.). Brief-sourced where available; omitted where not.
- `src/routes/work.tsx` card: render badge as a small pill top-right of each card when present.

## 4. SEO infrastructure
- `public/robots.txt`: allow all, point at sitemap.
- `public/sitemap.xml`: static list of all public routes (/, /about, /services, /work, /work/44db, /work/vida-rosa, /work/brillanta, /work/fly-trinity, /work/morgan-oxford, /work/nelly-baradi, /ile-eko, /contact) with lastmod = today.
- `__root.tsx`: add canonical `<link rel="canonical">` derived from current pathname; per-route overrides not needed yet.

## 5. Asset-swap scaffolding (no new assets — structure only)
- `src/lib/assets.ts`: central map of pending asset slots (hero, logoWall[], teamHeadshots{}, ileEkoScreens[]) pointing at current placeholders. One file to edit when Seph/SK ship PNGs.
- Update home hero, marquee, about team cards, ile-eko "See it in action" to import from this map.

## Out of scope (user-side)
- Custom domain DNS migration.
- Google Search Console verification + sitemap submission (I'll output the sitemap URL for them to paste).

## Files
- **New**: `src/components/Testimonials.tsx`, `src/lib/assets.ts`, `public/robots.txt`, `public/sitemap.xml`
- **Edited**: `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/contact.tsx`, `src/routes/services.tsx`, `src/routes/work.tsx`, `src/routes/ile-eko.tsx`, `src/routes/__root.tsx`, `src/lib/work-data.ts`, `.lovable/plan.md`

Approve and I'll ship it.
