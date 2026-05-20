Add explicit `prefers-reduced-motion` overrides for the glow utility classes in `src/styles.css`.

The existing blanket `@media (prefers-reduced-motion: reduce)` rule shortens all transitions to 0.01ms, but the glow classes deserve targeted treatment so the effect is intentionally disabled rather than just flickering instantly.

Changes:
- Inside the existing `@media (prefers-reduced-motion: reduce)` block, add rules for `.glow-primary` and `.glow-subtle` that:
  1. Remove the box-shadow transition entirely (`transition: none`).
  2. Strip the hover glow so no shadow appears at all, avoiding any visual jump.

This is a single-file, zero-dependency change scoped to `src/styles.css` only.