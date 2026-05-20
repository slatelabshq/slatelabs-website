# Button Glow Hover Animation

Add subtle, premium glowing hover effects to all interactive buttons across the site.

## What We're Building

### 1. Primary Button Glow (`CtaButton` variant="primary")
- On hover: soft Clay-colored box-shadow glow emanating from the button
- Shadow: `0 0 0 0 rgba(197, 85, 61, 0)` → `0 0 24px 4px rgba(197, 85, 61, 0.25)`
- Transition: 300ms with `--ease-out-soft`
- Background already transitions to `--primary` (Clay); glow reinforces the warm accent

### 2. Secondary Button Glow (`CtaButton` variant="secondary")
- On hover: soft ambient border glow
- Shadow: `0 0 20px 2px rgba(17, 17, 17, 0.06)` — subtle, not colored
- Complements the existing `hover:bg-surface` + `hover:border-foreground/20`

### 3. Contact Form Submit Button
- Convert to use `CtaButton` component (or apply same glow class)
- Ensures consistency across all CTAs

### 4. Animation Utilities in `styles.css`
- Add reusable `.glow-primary` and `.glow-subtle` utility classes
- Uses `transition: box-shadow 300ms var(--ease-out-soft)`
- Respects `prefers-reduced-motion` (instant transition)

## Files to Modify
- `src/styles.css` — add glow utility classes
- `src/components/CtaButton.tsx` — apply glow classes to both variants
- `src/routes/contact.tsx` — replace inline `<button>` with `CtaButton` or matching glow styles

## Design Notes
- Glow must feel premium, not gaming/LED — low opacity, large blur radius, small spread
- No animated pulsing on hover (that would be distracting); just a steady glow state transition
- The existing `active:translate-y-px` micro-interaction stays intact