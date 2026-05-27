## Adjust logo marquee for mobile responsiveness

The logo marquee on the homepage has layout issues on mobile devices:
- Text, gaps, and padding are desktop-sized and don't scale down
- Three copies of the logo array are rendered but the CSS animation scrolls only `translateX(-50%)`, creating a misaligned loop
- The wide `w-max` container with `whitespace-nowrap` overflows the viewport

### Changes
1. **`src/routes/index.tsx`** — Update the marquee markup:
   - Reduce `gap-16` → responsive `gap-6 md:gap-16`
   - Reduce `px-8` per item → responsive `px-3 md:px-8`
   - Reduce `text-lg` → responsive `text-sm md:text-lg`
   - Change `[...logos, ...logos, ...logos]` to `[...logos, ...logos]` so the duplicated content matches the `translateX(-50%)` keyframe for a seamless loop
   - Keep `overflow-hidden` on the outer container so no horizontal scrollbar appears

No other files or routes affected.