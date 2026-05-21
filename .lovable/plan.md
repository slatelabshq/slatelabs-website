Wrap all Morgan Oxford website screenshots in the case study in anchor tags linking to https://moe-website-beta.vercel.app/.

## Changes

In `src/routes/work.morgan-oxford.tsx`, wrap each image inside the `<div data-website-mockup>` block (hero + 3 grid tiles) in an `<a href="https://moe-website-beta.vercel.app/">`.

- No `target="_blank"` — opens in same tab as requested.
- Add a subtle hover state (e.g. `hover:opacity-90 transition-opacity`) to indicate clickability.
- The `<figure>` / `<figcaption>` wrapper stays intact; the `<a>` wraps the image container so the entire tile area is clickable.