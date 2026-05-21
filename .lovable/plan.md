## Goal

Replace the "Business Card" placeholder tile on `/work/fly-trinity` with the real business-card image the user uploaded.

## Changes

1. **New asset** — copy `user-uploads://Untitled_design_1.png` to `src/assets/fly-trinity-business-card.png`.

2. **Update `src/routes/work.fly-trinity.tsx`**
   - Import the new asset.
   - In the "Bringing the brand to life" gallery, change the `Business Card` entry from a gradient placeholder to render an `<img>` (with `object-cover`, `loading="lazy"`, width/height). Keep the other two tiles (Staff ID Card, Social Media) as gradient placeholders for now.
   - Refactor the `designs` array so each entry can be either `{ kind: "image", src }` or `{ kind: "gradient", gradient }`, and render accordingly.

## Notes

- No work-data or routing changes needed.
- Other two gallery tiles stay as purple gradient placeholders until the user uploads their finals.
