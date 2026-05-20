## Minimalist Redesign — Slate Labs

Shift the site away from the current sharp, editorial/brutalist look (hard right angles, uppercase-everywhere, italic serif accents, offset-shadow buttons, dense bordered grids) toward a calm, premium minimalism with a soft curved language.

### Design tokens (src/styles.css)

**Palette** — 2 primaries + warm neutrals:
- Ink `#111111` (foreground)
- Canvas `#FAFAF7` (background — warm off-white)
- Mist `#F2F1EC` (card / subtle surface)
- Accent Clay `#C5553D` (single accent, used sparingly — replaces current high-saturation orange)
- Muted `#6B6B68` (secondary text)
- Hairline `rgba(17,17,17,0.08)` (borders)

Drop the `.dark` theme reshuffle for now; keep light-mode only for visual focus (dark can return later).

**Typography** — Inter only (drop Playfair italic accents):
- Display: Inter, weight 500, tracking `-0.03em`, sizes clamp `2.5rem → 5.5rem`
- H2: Inter 500, `-0.02em`, `2rem → 3rem`
- Body: Inter 400, `1rem → 1.125rem`, line-height 1.6
- Eyebrow: Inter 500, `0.75rem`, tracking `0.08em` (not 0.3em), sentence case — NOT uppercase
- Remove `text-balance` uppercase headlines and italic serif callouts; emphasis via weight/color only.

**Radii** — curved language:
- `--radius-sm: 12px` (chips, inputs)
- `--radius: 20px` (buttons, small cards)
- `--radius-lg: 28px` (cards, image frames)
- `--radius-xl: 40px` (hero panels, pricing tiers)
- `--radius-full: 9999px` (pills, nav CTA)

**Motion** — keep `--ease-out-expo`, add subtle `transition: all 250ms`. Remove the offset-shadow hover on buttons.

### Component changes

**SiteHeader**
- Float a pill-shaped nav: `rounded-full`, Mist background, hairline border, `mx-auto` with `max-w` constraint, `top-4` offset (not flush).
- Wordmark in normal case (`Slate Labs`), no trailing dot accent.
- Nav links: sentence case, weight 500, no tracking-widest.
- CTA: rounded-full pill, Ink bg, Canvas text, no offset shadow.

**SiteFooter**
- Drop uppercase tracking. Single row layout: brand + 3 link columns + email signup. Hairline divider only at bottom.

**CtaButton**
- `rounded-full`, `px-7 py-3.5`, no offset border shadow. Primary: Ink/Canvas. Secondary: transparent + hairline border. Hover: accent fill or subtle bg tint, no translate.

**Section / Eyebrow**
- Eyebrow no longer uppercase + 0.3em tracking; small medium-weight label with a leading dot.

### Page-level changes

**Home**
- Hero: remove right-side card panel and italic serif "clean slate." Headline becomes Inter 500, sentence case, single accent word in Clay. Two pill CTAs. Generous top padding (`pt-40`).
- Metrics strip: remove dividers + borders. Convert to 4 floating cards in a Mist rounded-3xl panel, no uppercase labels.
- Services: replace bordered top-rule grid with 3 rounded-2xl Mist cards, generous padding, single accent number, no italic serif.
- Featured work: keep alternating layout but images get `rounded-3xl`, drop the bordered tag chips for rounded-full pills, remove "Case Study 0X" italic serif label (use a small Clay dot + label).
- Logo marquee: lower opacity, normal case, no extreme letter-spacing.
- "Why Slate Labs" dark section: keep dark but switch bg to Ink, headline non-italic, content in a single rounded-3xl panel with internal padding instead of full-bleed.
- Final CTA: smaller headline (not 8xl), remove serif italic accent, two pill CTAs centered.

**Ile Eko, About, Services, Work, Contact**
- Apply same primitives: rounded image frames (`rounded-3xl`), rounded cards, pill chips/tags, sentence-case eyebrows, no italic serif accents, no offset borders.
- Pricing tiers: `rounded-3xl`, hairline borders, highlighted tier uses Clay border + Mist bg (no inversion).
- FAQ: rounded chevron buttons, generous py spacing, no `+` rotate gimmick — use a chevron icon.
- Contact form inputs: `rounded-xl`, Mist bg, no borders until focus.

### Files to edit

- `src/styles.css` — replace tokens, palette, radii, drop serif font import usage
- `src/components/SiteHeader.tsx` — floating pill nav
- `src/components/SiteFooter.tsx` — calmer layout, no uppercase
- `src/components/CtaButton.tsx` — pill button, no offset shadow
- `src/components/Section.tsx` — adjust Eyebrow
- `src/routes/index.tsx` — hero/metrics/services/work/dark section/final CTA rework
- `src/routes/about.tsx` — apply primitives
- `src/routes/services.tsx` — apply primitives, soften comparison table
- `src/routes/work.tsx` and `src/routes/work.$slug.tsx` — rounded media, pill filters/tags
- `src/routes/ile-eko.tsx` — rounded cards, pricing tier restyle, FAQ chevrons
- `src/routes/contact.tsx` — rounded form inputs

### Out of scope

- No new routes, no copy rewrite (only de-uppercase where needed), no new images, no backend changes.
- Founder photos, real logos, dashboard mockup still pending from user — keep existing placeholders.

### Open question

This is a significant visual shift away from the previously-approved "Architectural editorial" direction. Confirm you want me to fully replace that look with the minimalist/rounded language above, or whether you'd prefer me to generate 2–3 rendered minimalist variants first so you can pick one before I implement.
