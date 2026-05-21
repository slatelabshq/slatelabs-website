## Plan: Add Morgan Oxford website screenshots to the case study

Use the 4 uploaded screenshots as the website mockup gallery in the existing Morgan Oxford case study.

### Steps

1. **Copy uploads to assets** (`src/assets/`):
   - `morgan-oxford-website-hero.png` — hero with "Placed with purpose"
   - `morgan-oxford-website-stats.png` — stats strip (2,000+, 13+, ICEF, Worldwide)
   - `morgan-oxford-website-framework.png` — "What we do" placement cards
   - `morgan-oxford-website-destinations.png` — Study destinations grid

2. **Update `src/routes/work.morgan-oxford.tsx`** — "The website" section:
   - Replace the single gradient placeholder tile inside `<div data-website-mockup>` with a gallery layout:
     - Hero screenshot as a large 16:9 lead tile (full width)
     - Below: 3-column grid (stats / framework / destinations), each in a rounded frame with subtle border, captioned
   - Each frame uses the existing case-study tile styling (rounded-2xl, border, overflow-hidden) consistent with Fly Trinity / Brillanta galleries
   - Captions: "Hero — Placed with purpose", "Proof points", "Service framework", "Study destinations"
   - Add `loading="lazy"` and descriptive alt text on each `<img>`

3. **No other changes** — meta tags, solution cards, and service strip already updated in the previous turn.

### Technical notes
- Import the 4 images at the top of the route file alongside existing asset imports
- Reuse the same Tailwind classes as other gallery sections (e.g., `aspect-video`, `rounded-2xl`, `border border-border/40`, `bg-muted`) for visual consistency
