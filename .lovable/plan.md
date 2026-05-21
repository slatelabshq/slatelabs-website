## What I'll do

Add the uploaded website mockup as a fourth tile in the "Bringing the brand to life" gallery on `/work/brillanta`, so the section now reads: **Staff ID Card · Social Media · Business Card · Website**.

## Files

1. Copy `user-uploads://Gemini_Generated_Image_jr6bpojr6bpojr6b.png` → `src/assets/brillanta-website.png`.

2. Edit `src/routes/work.brillanta.tsx`:
   - Import the new asset as `brillantaWebsite`.
   - Add a fourth entry to the `designs` array: `{ label: "Website", kind: "image", src: brillantaWebsite }`.
   - Change the gallery grid from `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-4` so four tiles fit cleanly.
   - The website mockup is a landscape composition, so keep `aspect-[4/5]` on the tile (image will `object-cover` and crop sensibly) — consistent visual rhythm with the other three.

No other changes.