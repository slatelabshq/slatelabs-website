Remove the 44DB hero video from the homepage hero banner only.

### What changes
1. Edit `src/routes/index.tsx` to remove the `<video>` element and its overlay `<div>` from the `<header>` hero.
2. Clean up the now-unnecessary positioning classes (`relative`, `overflow-hidden`, `relative z-10`) so the hero returns to its original solid-background layout.
3. Leave the 44DB case study page (`src/routes/work.44db.tsx`) untouched — the video stays there.

No new dependencies, no other files affected.