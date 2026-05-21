Remove the laptop/dashboard hero image from `/ile-eko`.

### Steps
1. In `src/routes/ile-eko.tsx`:
   - Delete the `md:col-span-5` column containing the `<img>` (lines 88–92).
   - Change the hero grid from a 7/5 split to a single centered column (drop `md:col-span-7` on the text block, or simply remove the grid wrapper and use a `max-w-3xl` container).
   - Remove the now-unused `import workIleEko from "@/assets/work-ileeko.jpg"`.
2. Keep the OG image reference (`og:image`) — switch it from `workIleEko` to a different existing project asset (or remove the og:image meta entirely). Simplest: drop the og:image line so the route falls back to no share image rather than referencing a deleted import.

Result: hero becomes a clean, centered text block with eyebrow, headline, copy, and the two CTAs. No image.

No other files change.