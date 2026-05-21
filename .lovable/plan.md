## Selected Work — Modern Editorial Grid

Replace the alternating two-column case-study list on the homepage with a 3-column editorial grid featuring only 44DB, Nelly Baradi, and Morgan Oxford. Middle card is offset down (`md:mt-24`) for asymmetric rhythm. Footer CTA becomes a centered link with a circular arrow button above a thin top border.

### Files

**`src/lib/work-data.ts`**
- Update `featuredProjects` to export exactly: `44db`, `nelly-baradi`, `morgan-oxford` (in that order).

**`src/routes/index.tsx`** — replace the `{/* Featured work */}` Section (lines 113–168) with:
- Eyebrow "Selected work" + heading "Work that speaks for itself." (kept).
- 3-column grid (`grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-x-12 lg:gap-x-16 items-start`).
- Middle card uses `md:mt-24` offset.
- Each card: `aspect-[4/5]` image (uses existing `p.image`, with hover `scale-105` + opacity), then a meta row (client label + 1px divider + tag chips from `p.tags.slice(0,2)`), title (`p.title` or short variant — using `p.client` as the headline label and `p.oneLiner` as subline), and a one-line description (`p.oneLiner`).
- Cards link via existing `<Link to="/work/$slug" params={{ slug: p.slug }}>` (Ile Eko isn't in the set, so the special-case can be dropped here).
- Replace bottom CTA button with the centered "View full portfolio" link + circular arrow icon over a `border-t border-border` divider.

### Tokens

Use semantic tokens (`text-muted`, `bg-surface`, `border-border`, `text-foreground`) instead of raw `zinc-*`/`neutral-*` from the prototype, so it matches the dark theme already configured in `src/styles.css`. Typography stays with current site fonts — no new font imports.

### Out of scope

- No changes to `/work` listing page or case-study pages.
- No new image generation — uses existing project images already in `src/assets`.
