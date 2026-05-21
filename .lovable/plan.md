## Update Portfolio Cards to Black with Cyan Accent

### What
Change all `/work` portfolio cards from colored backgrounds to uniform black cards with cyan accent details.

### Changes
**File: `src/routes/work.tsx`**
- Card background: remove `style={{ backgroundColor: p.color }}`, add `bg-[#111111]`
- Category eyebrow: change from `text-white/60` to `text-primary` (cyan)
- Decorative SVGs: change from white opacity to `text-primary/30` and `text-primary/20`
- Subtitle: change from `text-white/70` to `text-white/60`
- CTA link: change from `text-white` to `text-primary` (cyan)

### Out of scope
- No changes to the `color` field in `work-data.ts` (can be cleaned up later if needed)
- No changes to case study detail pages
- No layout or structure changes