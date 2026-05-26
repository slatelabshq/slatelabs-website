## Add 44DB video hero banner

Use the uploaded 1920×1080, 3.5s H.264 clip as a muted, looping, autoplaying background video in two places.

### Files

1. **Place asset** at `public/media/44db-hero.mp4` (5.4MB — too large for src/assets bundling; served from public).

2. **`src/routes/index.tsx` — Homepage hero**
   - Wrap the existing `<header>` in a `relative` container.
   - Add absolutely-positioned `<video autoPlay muted loop playsInline preload="auto" aria-hidden="true">` covering the background (`absolute inset-0 w-full h-full object-cover`).
   - Add a dark overlay (`bg-background/70`) so the existing headline/eyebrow/CTAs stay legible.
   - Keep all existing hero text & buttons unchanged, just lifted above via `relative z-10`.
   - Eyebrow + headline color stays as-is (already works on dark).

3. **`src/routes/work.44db.tsx` — Case study hero**
   - Replace the centered logo tile block with a full-width video banner (`aspect-video` or `h-[70vh]`) above the title/category text.
   - Same `<video>` attrs: autoplay, muted, loop, playsInline.
   - Keep the back link, category eyebrow, and h1 below the video.
   - Logo import (`logo44db`) can stay for now or be removed if unused.

### Notes
- No new dependencies.
- No business logic changes — purely presentational.
- `playsInline` ensures iOS autoplay works.
- File lives in `public/` so it's referenced as `/media/44db-hero.mp4` (no import needed).
