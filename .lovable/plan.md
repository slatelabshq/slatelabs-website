# Phase 5.2 — Polish pass

Tighten quality before assets land. Scope kept tight: visual + a11y + perf, no new features.

## 1. Branded 404 (upgrade existing)
The current `NotFoundComponent` in `__root.tsx` works but is plain. Replace with a branded version: oversized "404" treatment using the site's display type, short copy in brand voice, two CTAs (Home + Insights), and links to top 3 destinations (Services, Work, Contact). Same component, richer layout — no new route.

## 2. Accessibility sweep
- **Focus rings**: audit `:focus-visible` on all interactive elements (links, buttons, form fields, `CtaButton`). Add a consistent ring token in `styles.css` (`--ring`) and apply via `focus-visible:ring-2 focus-visible:ring-ring`.
- **Skip link**: add "Skip to content" link at top of `RootComponent`, target `<main id="main">`.
- **Landmarks**: ensure `<header>`, `<main>`, `<footer>`, `<nav>` are present and unique. Add `aria-label` to multiple `<nav>` instances (header vs footer).
- **Alt text audit**: every existing `<img>` (logo, OG fallback paths, decorative icons) gets meaningful `alt` or `alt=""` + `aria-hidden` for decorative.
- **Color contrast**: re-check `text-muted` on `bg-background` and `bg-surface`. Bump muted token lightness if it falls below WCAG AA (4.5:1 body, 3:1 large).
- **Heading hierarchy**: verify each route has exactly one `<h1>` and no skipped levels.
- **Form labels**: `/contact` inputs get proper `<label htmlFor>` pairing + `aria-describedby` for help text.

## 3. Performance
- **Font loading**: swap blocking `<link rel="stylesheet">` Google Fonts to `media="print" onload="this.media='all'"` pattern or self-host. Add `font-display: swap` if not already.
- **Image lazy-loading**: add `loading="lazy"` + explicit `width`/`height` to every below-the-fold `<img>` (case-study covers, insight cards, logo wall when it lands).
- **Preload hint** for hero (once asset arrives — leave a `// TODO` comment in `index.tsx`).
- **Bundle audit**: run a build, check for any oversized dependencies; lazy-import Calendly popup if it's pulling weight on initial load.

## 4. Motion refinement
- **Token easings**: add `--ease-out-quart`, `--ease-in-out-cubic`, `--duration-fast/base/slow` to `styles.css`.
- **Replace ad-hoc durations**: sweep components for inline `duration-300` etc.; align with tokens.
- **Reduced motion**: wrap any non-essential transition/animation in `@media (prefers-reduced-motion: no-preference)` or use Tailwind's `motion-safe:` / `motion-reduce:` variants. `PageTransition` should short-circuit to no animation when reduced motion is set.

## 5. Per-route OG metadata audit
Quick pass: confirm each route's `head()` has unique `title`, `description`, `og:title`, `og:description`, `og:url`. Note: skip og:image generation — that's blocked on hero/brand assets (5.1). Add a `// TODO og:image` comment at each route as a tracker.

## Files touched
- **Edit**: `src/routes/__root.tsx` (branded 404, skip link, main id), `src/styles.css` (ring, motion tokens, contrast), `src/components/SiteHeader.tsx` / `SiteFooter.tsx` (nav aria-labels), `src/components/PageTransition.tsx` (reduced motion), `src/routes/contact.tsx` (form a11y), `src/components/InsightCard.tsx` + case-study route files (lazy-load attrs), every `src/routes/*.tsx` for og audit + TODOs.
- **No new files** unless a small `<SkipLink>` component is cleaner inline.

## Out of scope
- Hero/logo/headshot assets (5.1, blocked).
- OG image generation (needs brand assets first).
- Lighthouse score guarantees — we'll target obvious wins, not chase numbers without real images.
- Analytics, Calendly secret, form backend (5.3).

## Verification
After edits: visual sweep at desktop + mobile viewports, tab through home page to confirm focus rings + skip link, toggle `prefers-reduced-motion`, build to confirm no regressions.
