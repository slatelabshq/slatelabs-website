## Move 44DB hero video below the write-up

On `/work/44db`, the hero video (the glowing "B" logo reel) currently sits at the top of the page, above the title and "The brief" write-up. Move it so it appears **after** the brief.

### Change

In `src/routes/work.work.44db.tsx` (the `FortyFourDBCaseStudy` component):

1. In the `<header>` block, remove the video container and keep only the "← All work" link, eyebrow category, and `<h1>` title.
2. Insert the video block as its own full-width section immediately after the "The brief" `<Section>`, before "Color palette". Keep the same `aspect-video`, rounded container, autoplay/muted/loop/playsInline attributes, and `max-w-7xl mx-auto` wrapper so the visual treatment is unchanged.

No other sections, copy, or styling change. No other routes affected.
