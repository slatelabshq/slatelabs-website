## Polished animation pass — Slate Labs

Add a small, consistent animation system that reinforces the minimalist feel: slow, soft easing; short distances; opacity-led motion. No bouncy springs, no parallax, no decorative motion.

### Motion principles

- **Easing**: single curve `cubic-bezier(0.22, 1, 0.36, 1)` (soft-out) for everything; we already expose `--ease-out-expo` — reuse it.
- **Duration**: 200ms for hovers, 400ms for entrances, 600ms for hero reveal. Never longer.
- **Distance**: ≤12px translate, ≤1.03 scale. Subtle.
- **Opacity-first**: most reveals are fade + small translate, never just scale.
- **Respect `prefers-reduced-motion`**: disable transforms, keep opacity, durations → 0.01ms.

### Tokens (src/styles.css)

Add keyframes + utility classes:
- `fade-in` (opacity 0→1, translateY 8px→0, 400ms)
- `fade-in-up` (12px→0, 500ms) — for section reveals
- `scale-in` (0.98→1 + fade, 300ms) — for cards/images
- Keep existing `slide-up` and `marquee`.
- Add `.hover-lift` utility (translateY -2px + subtle shadow on hover, 200ms).
- Add `.story-link` underline-grow utility for inline text links.
- Global `@media (prefers-reduced-motion: reduce)` block neutralizing animations and transforms.

### Reusable Reveal component

New `src/components/Reveal.tsx`:
- IntersectionObserver-based, triggers once at 15% visibility.
- Props: `as`, `delay` (ms), `className`, `children`.
- Applies `fade-in-up` when in view; renders invisible until then.
- Used to stagger section content (eyebrow → heading → body → cards) with 60–80ms increments.

### Where animations land

**Global / shell**
- Header pill: subtle backdrop opacity ramp on scroll (already blurred — add `transition-all` on bg).
- Nav links: bg pill scales in on hover (already transitions, tighten timing).
- Route change: rely on existing reveal — no fancy page transitions (TanStack Start SSR).

**Buttons (CtaButton)**
- Hover: bg color transition (existing) + 1px translateY on press (`active:translate-y-px`).
- Focus ring: `focus-visible:ring-2 ring-foreground/20 ring-offset-2 ring-offset-background`.

**Home**
- Hero h1 + sub + CTA stack: stagger reveal (already animate-reveal on h1/p — add delay to CTAs).
- Metrics row: each metric fades up with 80ms stagger when scrolled into view.
- Service cards: stagger fade-up; on hover, current bg swap stays but add `hover-lift`.
- Featured work: image `scale-in` on view + existing hover scale 1.03 (extend duration to 900ms, smoother).
- Logo marquee: keep, slow from 40s → 50s, softer.
- Dark "we build from zero" panel: stagger differentiator items as they enter.

**About / Services / Work / Ile Eko**
- All `<Section>` headings + cards use Reveal with stagger.
- Pricing tier highlighted: add a continuous, very subtle pulse on the primary border (`@keyframes soft-pulse` 3s).
- FAQ `<details>`: replace default open with smooth height animation via `details[open] summary ~ *` + `interpolate-size: allow-keywords` fallback; or wrap content and animate max-height. Plus chevron rotate (already there).
- Comparison table rows: subtle row hover bg shift to `bg-surface/50`.

**Contact**
- Form inputs: focus border transition (existing) + label color shift to foreground on focus-within.
- Submit button: same CTA treatment.
- Success state: `scale-in` reveal.

**Images globally**
- Add `transition-transform duration-700` on all case-study/work imagery (already partially done) — standardize.

### Files to edit

- `src/styles.css` — add keyframes, utilities, reduced-motion block.
- `src/components/Reveal.tsx` — new, IntersectionObserver wrapper.
- `src/components/CtaButton.tsx` — add focus ring + active state.
- `src/components/SiteHeader.tsx` — tighten nav link transition timing.
- `src/routes/index.tsx` — wrap section content in Reveal, stagger metrics/cards/work.
- `src/routes/about.tsx`, `services.tsx`, `work.tsx`, `work.$slug.tsx`, `ile-eko.tsx`, `contact.tsx` — apply Reveal to headings/cards; FAQ smooth open; pricing highlight pulse.

### Out of scope

- No third-party animation libs (Framer Motion, GSAP). Pure CSS + IntersectionObserver.
- No page transitions, no cursor effects, no scroll-linked parallax.
- No copy or layout changes.
