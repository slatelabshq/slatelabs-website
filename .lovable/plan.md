## Restyle 44DB Case Study Page

Rebuild `/work/44db` to mirror the reference layout (brief → color palette → results → deliverables grid) while keeping the site's existing black + cyan aesthetic (no pink).

### Scope
Only affects the 44DB case study rendering — either by branching inside `src/routes/work.$slug.tsx` when `slug === "44db"`, or (cleaner) creating a dedicated `src/routes/work.44db.tsx` route that takes precedence over the dynamic `work.$slug.tsx`. Plan goes with **dedicated route file** for clarity and to leave other case studies untouched.

### New sections (top → bottom)

1. **Hero** — small "← All work" link, category eyebrow (cyan), big project title, then the existing hero image in a rounded frame.
2. **The Brief** — `THE BRIEF` cyan eyebrow, large headline ("From underground sound to mainstream presence"), muted paragraph (uses existing `challenge` copy).
3. **Color Palette** — `COLOR PALETTE` eyebrow, headline ("The colours of culture"), 5 swatch cards in a row. Each swatch: large solid color block, name + hex below on light card. Palette: `#0A0A0A Midnight`, `#00D9FF Cyan`, `#0099BF Deep Cyan`, `#1A1A1A Carbon`, `#F2F1EC Bone` (site tokens, not pink).
4. **The Results** — full-width black band (`bg-foreground` equivalent / `#0A0A0A`), `THE RESULTS` cyan eyebrow, headline ("Numbers that speak volumes"), 3 stat cards using existing metrics (`69,526 Instagram Views`, `310,700 X Impressions`, `6,900% Growth`). Big cyan numerals, label + sub-label.
5. **What We Delivered** — `THE WORK` cyan eyebrow, headline ("What we delivered"), 2-column grid of 6 cards with cyan icons (lucide: FileText, Palette, Camera, Music, TrendingUp, BarChart3) + title + 1-line description. Pulled from the existing `deliverables` array, expanded to title+desc pairs.
6. **CTA band** — keep existing "Ready for your clean slate?" footer with Let's talk button.

Remove from the 44DB page (not from generic template): Quick Facts table, Challenge/Solution split sections, bullet-list deliverables. The new structure replaces them.

### Files to change
- **Create** `src/routes/work.44db.tsx` — new route component with the sections above. Imports `projects` from `@/lib/work-data` to reuse hero image and metric values.
- **No changes** to `src/routes/work.$slug.tsx`, `src/lib/work-data.ts`, or other case studies.

### Styling notes
- All accents use `text-primary` / cyan tokens already in `src/styles.css` — no new colors.
- Cards use existing `bg-surface`, `rounded-3xl` patterns from the rest of the site.
- Stat numbers on dark band use `text-primary` cyan, large display weight.
- Reuses `Section`, `Eyebrow`, `CtaButton`, `Reveal` components.

### Out of scope
- No changes to other case studies, the /work index, or the data model.
- No new image generation — uses existing `work-44db.jpg` hero.