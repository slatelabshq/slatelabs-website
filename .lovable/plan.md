## Integrate Slate Labs Logos

Replace the current text-only "Slate Labs" wordmark with the official brand assets the user uploaded.

### Assets to add
- `src/assets/slate-logo-wordmark.png` — primary logo (mark + "Slate Labs" wordmark). Use in header and footer.
- `src/assets/slate-logo-mark.png` — icon-only mark. Use as favicon and anywhere a compact mark fits (mobile header collapsed, OG fallback, 404 page).

Copy both from `user-uploads://` into `src/assets/` and import as ES6 modules.

### Where they get applied

1. **`SiteHeader.tsx`** — Replace the text `Slate Labs` in the home link with an `<img>` of the primary wordmark logo. Height ~24px (h-6) to fit the pill nav; mark-only on very small screens if needed. Add descriptive `alt="Slate Labs"`.

2. **`SiteFooter.tsx`** — Replace the text wordmark in the footer brand block with the primary logo, slightly larger (h-7 / h-8). Keep the tagline beneath it.

3. **`__root.tsx`** —
   - Add `<link rel="icon">` pointing to the mark-only logo (copy to `public/favicon.png` as well so it's served at root).
   - Use the primary wordmark as `og:image` for default social sharing.

4. **`routes/__root.tsx` Not-Found / Error pages** — Add the mark above the "404" heading for brand presence (optional, small `h-10`).

### Notes
- Logos are dark slate (#3B4451-ish) on transparent background — they read well on the current cream `--background`. No color treatment needed.
- Keep existing hover/animation behavior on the header link; just swap inner content.
- No new dependencies, no layout restructuring.

### Files touched
- `src/assets/slate-logo-wordmark.png` (new, copied)
- `src/assets/slate-logo-mark.png` (new, copied)
- `public/favicon.png` (new, copied from mark)
- `src/components/SiteHeader.tsx`
- `src/components/SiteFooter.tsx`
- `src/routes/__root.tsx`
