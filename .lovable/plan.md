# Tune Cyan Glow & Pulse Strength

## Goal
Make the cyan glow and soft-pulse effects feel consistent with the deepened primary (`#0099BF`) while remaining visible but not overpowering against the warm off-white background (`#FAFAF7`).

## Current State (from `src/styles.css`)
- `--primary: #0099BF` (text/accessible accent)
- `--primary-glow: #00D9FF` (brighter, decorative only)
- Glow classes hardcode `rgba(0, 217, 255, ...)` — not tied to `--primary-glow`
- `soft-pulse`: `rgba(0, 217, 255, 0.18)` → `6px` ring
- `glow-primary:hover`: `28px/60px` double halo at `0.28` and `0.12` alpha

## Proposed Changes
1. **Wire glows to `--primary-glow`** via CSS custom properties (`--glow-color`, `--glow-alpha`) so the token is actually used and future changes are single-source.
2. **Soften the hover glow intensity** by reducing alpha values:
   - Outer ring: `0.28` → `0.18`
   - Inner halo: `0.12` → `0.07`
   - This keeps the cyan visible on `#FAFAF7` without creating a neon sign effect.
3. **Reduce pulse ring alpha** from `0.18` → `0.12` and tighten spread from `6px` → `4px` so the tab highlight in `ile-eko.tsx` feels crisp, not bloomy.
4. **Slightly shorten pulse duration** from `3s` → `2.5s` to make the rhythm feel more alive and less lounge-like.
5. **Verify visually** on the preview that the `ile-eko` active tab, CTA buttons, and header button all feel like one family of effects.

## Out of Scope
- No changes to animation timings for page entrances (already tuned).
- No changes to `glow-subtle` (dark/neutral, unrelated).
- No changes to layout or copy.
