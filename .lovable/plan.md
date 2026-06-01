# Phase 2 — HIGH priority build

Brief tasks #7–19 from Section 10. Code-only; asset-blocked items ship with framed placeholders (flagged ⚠) so the page structure is in production now and assets can be swapped in without further edits.

---

## 1. Homepage (`src/routes/index.tsx`)

- **Stats block (#7)** — replace 4-card grid with the brief's exact stats:
  - `300K+` / Organic views in 30 days / 44DB — May 2026
  - `#1` / Rap song in Nigeria, co-produced by our client / Blaqbonez ft. Asake
  - `8hrs+` / Operational time saved weekly / Morgan Oxford Education
  - `Lagos` / HQ base / Nigeria
  - Add sub-label line per stat (small muted text under the existing label).
- **Hero subtitle (#8 partial)** — keep existing CTAs; add the brief's audience line under the current subtitle in Inter 14px muted: "From music collectives and luxury automotive to education and aviation — if you're building something real in Lagos and beyond, we're for you."
- Hero visual itself ⚠ deferred until Seph delivers `hero-visual.jpg`. No layout change yet.
- Logo marquee (#9) keeps current text-only treatment until Seph delivers PNG logos.

## 2. 44DB case study (`src/routes/work.44db.tsx`) — full rewrite (#10)

Replace current sections with the brief's structure verbatim:
- Subline under H1: "The producers behind Nigeria's biggest records across every genre."
- **The Brief**: new H2 + body about Tochi Bedford founding 44DB in 2018; current "From underground sound to mainstream presence" replaced.
- **The Credits** (new section): three cards — Declan Rice (Odumodublvck), Idanski (Zaylevelten), Chanel (Blaqbonez ft. Asake) with exact label + copy.
- **What We Delivered**: H2 "From 1,000 views a month to 300,000." with three-paragraph body and a Services-delivered list (6 items).
- **Stats block**: 4-cell metrics table + standalone `74.6%` callout for "Views from non-followers."
- **CTA**: "Ready to build your movement?" + body + `Let's talk →` to `/contact`.
- Remove the old color-palette and "What we delivered" icon cards — they're not in the new brief; keep the hero video block as is.

## 3. Vida Rosa Featured Engagement — new dedicated route (#11)

- **Create `src/routes/work.vida-rosa.tsx`** as a static route. TanStack file routing makes a static segment win over `$slug`, so `/work/vida-rosa` will resolve to the new file automatically.
- New page follows the brief's "Featured Engagement" structure: page tag chip "Featured Engagement" (replaces "Case Study"), H1 + subline, four labelled sections (The Client / The Brief / What We Bring / The Engagement) with exact copy, and the closing "Working with a premium brand?" CTA.
- **Strip the Vida Rosa special-case from `src/routes/work.$slug.tsx`** (lines 41–61 and the `!== "vida-rosa"` guard on line 194). The catch-all becomes purely generic again.
- **`src/lib/work-data.ts`**: drop the metrics (`8,000+`, `2–5`, `45%`) and remove `detail` from the Vida Rosa entry so the case-study card on `/work` still renders but no metric badge implies a closed case study. Update `oneLiner` to "Luxury automotive marketing for one of Lagos's most exclusive dealerships."

## 4. Services page (`src/routes/services.tsx`) — full rewrite (#12)

- New H1: "Four practices. One team. Everything you need to build and grow."
- New subtext per brief.
- Replace 3-item `services` array with 4 entries (Brand Strategy, Growth Marketing, Digital Platforms, Intelligent Systems). Each gets lead copy, "What's included" list, and an "Example outcome" block with a `See case study →` link from the brief (44DB / 44DB / Morgan Oxford / Morgan Oxford).
- Comparison table (#3.6): expand from 3 to 4 columns (`Slate Labs | Traditional Agencies | Freelancers | In-house`). Update existing rows with In-house entries; add new "Practices" row.
- FAQ "How much do you charge?" — replace answer with brief's pricing tiers (₦500k brand, ₦1.5M platforms, ₦300k/mo retainers).

## 5. About page (`src/routes/about.tsx`) — restructure (#13, #14, #16)

- Split current "Meet the founders" into two sections:
  - **The Founders** (2 cards): Joseph (existing photo) + SK ⚠ placeholder initials card with new bio.
  - **The Team** (5 cards): Kenny (existing photo), Adeola, Michael, Jael, Elizabeth — all ⚠ placeholder initials until SK provides headshots. Bios per brief.
- **Press section (#14)**: new section "AS SEEN IN" between Philosophy and final CTA. Single card with left border `#00D9FF`, RefinedNG headline + excerpt + date + external link "Read the full feature →" (new tab).

## 6. Ile Eko page (`src/routes/ile-eko.tsx`) — #18, #19, schema

- **Remove pricing tier cards** — replace whole pricing `Section` with a single CTA block: heading "Pricing built for Nigerian schools.", body per brief, button "Book a demo →" to `/contact`. Tier data + `tiers` array deleted.
- **Add "See it in action" section** between Features and the new pricing CTA — 3-card grid with framed placeholders + captions from the brief. ⚠ Swap with real screenshots when SK delivers.
- **Add SoftwareApplication JSON-LD** to the route's `head()` per brief §1.5 (closes a Phase 1 schema item that was deferred).

## 7. Meta descriptions (#15)

Update `head().meta` `description` + `og:description` on:
- Homepage, About, Services, Work, Contact, Ile Eko — using the exact strings from Section 8.2.

## 8. Phone number in nav (#17)

- Add `tel:+2347026036554` link to the mobile menu drawer in `src/components/SiteHeader.tsx` (footer + contact already done in Phase 1).
- Desktop header stays clean — phone lives in footer + contact + WhatsApp FAB.

---

## Items intentionally deferred to later phases

- ⚠ Hero image (#8), logo wall PNGs (#9), SK + team headshots (#13/#16), Ile Eko screenshots (#19) — placeholders shipped, swap when assets land.
- Testimonials (#20), Calendly (#21), metric badges on Work cards (#22), domain migration (#23), GSC submission (#24) — these are Phase 3 (MEDIUM).

## Files touched

```
src/routes/index.tsx                 stats + hero subtitle + meta
src/routes/work.44db.tsx             full rewrite per §4.2
src/routes/work.vida-rosa.tsx        NEW file (Featured Engagement)
src/routes/work.$slug.tsx            strip vida-rosa special-case
src/lib/work-data.ts                 vida-rosa: drop metrics + detail, new oneLiner
src/routes/services.tsx              4 pillars + new comparison + FAQ + intro
src/routes/about.tsx                 Founders/Team split, new bios, Press section
src/routes/ile-eko.tsx               remove pricing tiers, add screenshots placeholder, add SoftwareApplication schema
src/routes/about.tsx                 meta description update
src/routes/work.tsx, contact.tsx     meta description updates
src/components/SiteHeader.tsx        phone link in mobile menu
.lovable/plan.md                     mark Phase 2 done
```

After implementation: spot-check the four major touched pages (home, /work/44db, /work/vida-rosa, /services) in the preview, then call it Phase 2 deploy v1.1.
