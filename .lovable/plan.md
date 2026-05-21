# Smoother, More Consistent Reveal Easing

## Problem
- `--ease-out-soft` and `--ease-out-expo` are defined identically (`cubic-bezier(0.33, 1, 0.68, 1)`) — the "expo" token is a lie, and all entrances share the same mild quart curve.
- Entrance durations are scattered: `reveal/slide-up` 900ms, `fade-in` 600ms, `fade-in-up` 750ms, `scale-in` 700ms. Stacked reveals feel uneven because each item glides for a different length of time.
- `Reveal` always animates for 900ms regardless of how many items are in a stagger, so trailing items feel laggy.

## Goal
One easing curve and a tighter, predictable duration for all entrance animations so staggers read as a single coordinated motion.

## Changes (all in `src/styles.css`)
1. **Define a real expressive easing token:**
   - `--ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1)` (smoother out-quint, less linear tail than current)
   - `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)` (true expo for hero-scale reveals)
2. **Standardize entrance durations** to a single rhythm:
   - `.reveal` transition: `900ms` → `700ms`
   - `.animate-reveal` (hero slide-up): `900ms` → `800ms` with `--ease-out-expo`
   - `.animate-fade-in`: `600ms` → `700ms`
   - `.animate-fade-in-up`: `750ms` → `700ms`
   - `.animate-scale-in`: `700ms` (keep) but switch to `--ease-out-expo`
3. **Keep `--ease-out-soft` as the default** for all `Reveal` wrappers and small UI transitions (hovers, links).
4. **No JS changes required** — `Reveal.tsx` already reads from `.reveal` CSS; durations centralize in one file.

## Out of Scope
- No changes to existing per-section delay values (already tuned in a prior pass).
- No changes to hover-lift, glow, story-link timing (already at 350–500ms, separate rhythm).
- No new Reveal props.

## Risk
Hero `animate-reveal` keyframe (`slide-up`) starts from `translateY(10px)`. Tightening to 800ms with expo will feel snappier — intended. If too snappy, fallback is 850ms.
