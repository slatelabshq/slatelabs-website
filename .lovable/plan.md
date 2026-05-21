Swap the AI-generated hero on the Nelly Baradi case study for her real portrait.

### Steps
1. Copy `user-uploads://image-2.png` → `src/assets/work-nelly-baradi.jpg` (overwrite the existing file so all imports keep working — `work-data.ts` and the OG image reference stay unchanged).
2. In `src/routes/work.nelly-baradi.tsx`, update the hero image:
   - Change `aspect-[16/10]` → `aspect-[4/5]` (portrait orientation suits the new photo).
   - Constrain to `max-w-2xl mx-auto` so the tall portrait doesn't dominate the page.
   - Use `object-cover object-top` to keep her face in frame.
   - Update `alt` to "Nelly Baradi — portrait" (more accurate than the previous campaign-art alt).

No changes to data, copy, or other routes.