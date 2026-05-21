## What I'll do

Replace the static cover image on `/work/brillanta` (the cocoa/grain still life sitting in the 16:9 frame under the hero) with the uploaded `brillanta_website_banner.mp4`, played as an autoplay background-style hero video.

## Files

1. Copy `user-uploads://brillanta_website_banner.mp4` → `public/brillanta-banner.mp4` (videos belong in `public/` so they stream directly without being bundled by Vite).

2. Edit `src/routes/work.brillanta.tsx`:
   - In the cover block (currently `<img src={project.image} ... />` inside the `aspect-[16/9]` frame), swap the `<img>` for a `<video>` with `src="/brillanta-banner.mp4"`, `autoPlay`, `muted`, `loop`, `playsInline`, `preload="metadata"`, and `className="w-full h-full object-cover"`. Add `poster={project.image}` so the still image shows while the video loads / on browsers that block autoplay.
   - Leave `project.image` untouched so the `/work` card thumbnail and the `og:image` social preview keep using the still (video can't be an OG image).

No other changes — palette, brief, deliverables, gallery, CTA all stay.