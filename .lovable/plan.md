## Goal

Create a dedicated case-study page for Morgan Oxford Education at `/work/morgan-oxford`, mirroring the layout and quality of the existing 44DB case study but populated with the content shown in the uploaded screenshots (hero with grad-cap icon card, brief, system palette, solution cards, sector/service/category info card, CTA).

## Changes

1. **New route file** `src/routes/work.morgan-oxford.tsx`
   - Hero: eyebrow `INTELLIGENT SYSTEMS · CRM`, headline "Morgan Oxford **Education**" (accent on "Education"), subtitle "Bespoke CRM built to orchestrate global student recruitment at scale", with the grad-cap icon card above.
   - The Brief section: "International education deserves intelligent infrastructure" + supporting paragraph from screenshot.
   - System Palette section: "Built for clarity, built for scale" with 5 swatches — Slate Dark `#2A3347`, Steel Grey `#5B6E8A`, System Cyan `#00D9FF`, Cloud White `#F2F4F8`, Deep Navy `#1A2235`.
   - The Solution section: "A CRM that thinks the way they work" + supporting paragraph and a 2-column grid of 6 feature cards (Custom CRM Architecture, Student Pipeline Management, Global University Placement Engine, Operations Dashboard, Automated Workflow System, Data Security & Compliance) each with a lucide icon (Database, Users, Globe, BarChart3, Network, ShieldCheck).
   - Info strip card with three columns: Sector "International Education Agency & Consultancy", Service Delivered "Custom CRM System", Category "Intelligent Systems".
   - CTA: "Need a custom intelligent system for your business?" with `Start Your Mission` button linking to `/contact`.
   - SEO `head()` with route-specific title, description, og tags, canonical.

2. **Update `src/routes/work.tsx`** card link branch
   - Add a `p.slug === "morgan-oxford"` branch that links to `/work/morgan-oxford` (alongside the existing `44db` and `ile-eko` branches).

3. **No changes** to `src/lib/work-data.ts` content — copy on the page comes from the screenshots directly; data file remains the source for the work index card.

## Technical Notes

- Follows existing patterns (`Section`, `Eyebrow`, `CtaButton`, semantic tokens, no hardcoded Tailwind colors except inline swatch backgrounds via `style={{ backgroundColor }}` as 44DB does).
- File name uses TanStack flat dot routing: `work.morgan-oxford.tsx` → `/work/morgan-oxford`. `routeTree.gen.ts` regenerates automatically.
- Reuses lucide icons already common in the project.
