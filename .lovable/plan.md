Refine entrance animation delays so each section has a clear, paced rhythm: heading first, supporting copy second, CTA/grid last — with consistent inter-item stagger.

### Pacing system
Adopt one shared scale across all routes:
- **Lead heading**: 0ms
- **Supporting paragraph**: 120ms
- **CTA row / first grid item**: 240ms
- **Grid stagger between siblings**: 90ms (slightly slower than the current 70–80ms so items don't pile up)
- **Section-intro Reveal wrappers around H2 + Eyebrow**: 0ms; first child grid item starts at 180ms via a base offset

### Changes by file

**`src/routes/index.tsx`**
- Hero: `animationDelay` 100 → 0 (h1), 250 → 140 (p), 400 → 280 (CTAs). Tighter, less waiting on first paint.
- Metrics grid: `delay={i * 80}` → `delay={i * 90}`.
- Services grid: `delay={i * 80}` → `delay={i * 90}`.
- Featured work cards: add `delay={i * 120}` (currently 0) so alternating cases stagger gently.
- Differentiators: `delay={i * 80}` → `delay={i * 100}` (longer text blocks need more breathing room).

**`src/routes/about.tsx`**
- Team cards: `delay={i * 80}` → `delay={i * 90}`.
- Process steps (4-up): `delay={i * 70}` → `delay={i * 80}` for clearer left-to-right read.

**`src/routes/ile-eko.tsx`**
- Benefits / features / steps: `delay={i * 70}` → `delay={i * 80}`.
- `(i % 3) * 70` (3-col wrap) → `(i % 3) * 80`.
- Final list: `delay={i * 80}` → `delay={i * 100}`.

**`src/routes/work.tsx`**
- `delay={(i % 2) * 80}` → `delay={(i % 2) * 120}` so the two-column case grid feels intentionally paired, not nervous.

### Out of scope
- No changes to keyframes, easing, or durations (already tuned subtle in `src/styles.css`).
- No changes to `Reveal.tsx`, `CtaButton`, or layout/markup.
- Marquee, hover-lift, and image hover scale untouched.