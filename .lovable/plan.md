Redesign the Vida Rosa hero to match the Morgan Oxford style (centered icon, eyebrow, large centered title with accent, subtitle).

In `src/routes/work.$slug.tsx`, replace the current left-aligned `<header>` with a conditional:

- If `project.slug === "vida-rosa"`: render a centered hero matching Morgan Oxford —
  - `← All work` link
  - Icon block (rounded card with `Car` icon from `lucide-react`)
  - Eyebrow: `Brand Foundations · Social Management` (uppercase, primary, tracked)
  - Title: `Vida Rosa —` on line 1, `Luxury Auto Social Management` in primary on line 2
  - Subtitle: `Turning Instagram into a premium sales channel.` (project.oneLiner)
- Otherwise: keep the existing left-aligned header unchanged.

The full-width hero image below the header stays as-is for all case studies.