## Goal

Add a Fly Trinity Airways case study at `/work/fly-trinity` matching the layout of the Morgan Oxford / 44DB pages, using a purple accent palette scoped to this page only (rest of site stays cyan). Also add it as a card on the work index.

## Changes

1. **New asset** `src/assets/work-fly-trinity.jpg`
   - Generate a purple-toned airline brand mock image (clouds / lavender gradient / abstract plane) for the work card and og:image.

2. **Update `src/lib/work-data.ts`**
   - Add a new `Project` entry with `slug: "fly-trinity"`, category `Brand Foundations`, client `Fly Trinity Airways`, color `#3C096C`, tags `["Brand Strategy", "Visual Identity", "Collateral"]`, oneLiner `Crafting a premium airline brand identity from ground to sky.`
   - Extend the `slug` union type to include `"fly-trinity"`.

3. **New route file** `src/routes/work.fly-trinity.tsx` mirroring the Morgan Oxford structure:
   - Wrap the whole page in a `<div className="fly-trinity-page">` that scopes a CSS variable override so the page's `--primary` reads as deep purple. Headings, eyebrows, icons that use `text-primary` will automatically pick this up — no per-element color overrides needed.
   - **Hero**: a square card with a `Plane` lucide icon centered, eyebrow `BRAND FOUNDATIONS · AIRLINE`, headline `Fly Trinity Airways` with `Airways` in accent purple, subtitle `Crafting a premium airline brand identity from ground to sky`.
   - **The Brief**: heading `Elevating air travel through identity` with paragraph copy from the screenshot.
   - **Color Palette**: heading `The colours of flight`, 5 swatches — Deep Purple `#3C096C`, Lavender `#DAB6FC`, Off-White `#F4F4F2`, Royal Violet `#5A189A`, Orchid `#9D4EDD`.
   - **What we delivered**: 2×2 grid of 4 cards with icons (Palette → Brand Identity, Type → Typography System, LayoutTemplate → Collateral Design, Image → Digital Presence), copy from screenshots.
   - **Bringing the brand to life**: 3-column gallery of placeholder tiles labeled `Staff ID Card`, `Social Media`, `Business Card`. Each tile is a purple-tinted gradient card with the label centered — easy to swap for real imagery later.
   - **CTA**: `Ready for your clean slate?` with `Let's talk` button, consistent with other case studies.
   - SEO `head()` with route-specific title, description, og tags, canonical, and the generated og:image.

4. **Update `src/routes/work.tsx`** card link branch
   - Add a `p.slug === "fly-trinity"` branch linking to `/work/fly-trinity` alongside the existing branches.

## Technical Notes

- Purple accent scoped via `style={{ "--primary": "270 73% 27%" } as React.CSSProperties}` (or `oklch` matching the token format in `src/styles.css`) on the page wrapper — keeps every other route's cyan branding untouched.
- Reuses `Section`, `Eyebrow`, `CtaButton`, semantic tokens; only the swatch backgrounds use inline `style.backgroundColor` exactly like 44DB.
- TanStack flat dot routing: `work.fly-trinity.tsx` → `/work/fly-trinity`. `routeTree.gen.ts` regenerates automatically.
- Placeholder gallery tiles use `bg-surface` with a soft purple inner gradient via `style` — no missing-asset imports.
