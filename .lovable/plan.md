# Phased Deployment Plan — Slate Labs v2 Brief

Work follows the brief's Section 10 priority table. Each phase ends with a Vercel deploy so progress goes live incrementally. Items needing assets from Seph/SK are flagged ⚠ and will ship with placeholders until the asset lands.

---

## Phase 1 — BLOCKERS (ship before any public promotion)

Goal: site is safe to share publicly. Pure copy/markup work, no new assets required (except OG images — temporary auto-generated fallback until Praise delivers).

1. Fix LinkedIn link sitewide → `linkedin.com/company/slate-labs-hq` (header, footer, contact). Open in new tab.
2. Floating WhatsApp button (mobile only, <768px) + Contact "Direct" entry + footer phone `+234 702 603 6554` (`tel:` + `wa.me` deep link with prefilled message).
3. OG + Twitter image meta tags on every route, default + per-page overrides (`og-default`, `og-about`, `og-services`, `og-work`, `og-ile-eko`, `og-contact`). ⚠ Use auto-generated placeholder until Praise delivers final 1200×630s.
4. JSON-LD schema: Organization+LocalBusiness on every page; Service schema on `/services`; (third block per brief) added globally via root `head()`.
5. Remove every "studio" instance sitewide. Homepage hero: "Four integrated practices. One team."
6. Four Practices section — new copy, Growth Marketing added as 4th pillar.

→ **Deploy v1.0**

---

## Phase 2 — HIGH (before launch)

Goal: full content refresh across home, services, work, about, contact.

7. Homepage stats → 300K+ / #1 / 8hrs+ / Lagos. Remove "45% car sales" and "8,000+ followers".
8. ⚠ Homepage hero visual (needs Seph asset; ship with current placeholder).
9. ⚠ Client logo wall (needs Seph assets).
10. Rewrite `/work/44db` per Section 4.2 (full copy + production credits + stats table).
11. Rewrite Vida Rosa as Featured Engagement (no metrics, paid-ads framing).
12. Services page — four pillars, full copy from Section 3 (Brand Strategy, Growth Marketing, Digital Platforms, Intelligent Systems), updated comparison table (4 cols) + FAQ.
13. About page restructure — Founders + Team split, new bios. ⚠ Headshots from SK.
14. Press section on About (RefinedNG feature, opens in new tab).
15. Meta descriptions per Section 8.2 across all routes.
16. ⚠ SK headshot on About (placeholder until provided).
17. Phone number in nav + footer + contact (`+234 702 603 6554`).
18. Remove pricing from `/ile-eko`.
19. ⚠ Ile Eko screenshots section with framed placeholders + captions.

→ **Deploy v1.1**

---

## Phase 3 — MEDIUM (within 2 weeks of launch)

20. ⚠ Testimonials on home, services, Ile Eko (needs 3 quotes from SK+Seph).
21. Calendly booking link on Contact (needs Calendly URL from SK).
22. Metric badges on Work page cards.
23. Domain migration `slatelabs-launchpad.vercel.app` → `slatelabshq.com` (Section 9 steps — Kenny owns DNS).
24. Submit to Google Search Console, verify sitemap, confirm robots.txt has no `noindex`.

→ **Deploy v1.2** (+ domain cutover)

---

## Phase 4 — NEXT PHASE (Sprint 2)

25. Build 4 service sub-pages for SEO (URLs in Section 8.3).
26. Three SEO blog articles (Section 8.4).
27. Claim Google Business Profile (Kenny).
28. Add USD pricing option to Contact budget dropdown.

→ **Deploy v2.0**

---

## Assets blocking work (flagged ⚠ above)

| Asset | Blocks |
|---|---|
| OG images (6 × 1200×630) — Praise | Phase 1 #3 (final swap) |
| Hero image — Seph | Phase 2 #8 |
| Client logos — Seph | Phase 2 #9 |
| SK headshot + team photos — SK | Phase 2 #13, #16 |
| Ile Eko screenshots (2–3) — SK | Phase 2 #19 |
| 3 testimonials — SK+Seph | Phase 3 #20 |
| Calendly URL — SK | Phase 3 #21 |

---

## Technical notes

- Schema + OG meta added via TanStack `head()` — global block in `__root.tsx`, per-page overrides in each route file. `og:image` only on leaf routes to avoid root override.
- WhatsApp FAB: new `WhatsAppFab` component mounted in `__root.tsx`, hidden ≥`md`.
- Auto-generated OG placeholders go in `public/` so links work the moment the site is shared, even before Praise's finals.
- After Phase 3 domain cutover, update all absolute URLs in schema/OG to `https://slatelabshq.com`.

## Recommendation

Approve and I'll start with **Phase 1** (BLOCKERS) — all code-only, deployable today.
