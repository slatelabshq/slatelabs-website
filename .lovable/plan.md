# Remove case study images from home page

In `src/routes/index.tsx` "Selected work" section (lines ~119-164), remove the image column from each featured project card. The text column (title, one-liner, tags, "Case study 0X" label) stays and becomes full-width.

## Change
- Drop the `<div className="md:col-span-7 ...">` image wrapper (lines 130-141) entirely.
- Remove the 12-col grid + reversed alternation; replace with a simple stacked text block per project (or a `max-w-3xl` container).
- Keep links, hover state, tags, and CTA below unchanged.