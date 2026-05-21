## Goal
Add a smooth fade/slide transition when navigating between routes (Home, About, Services, Work, Contact, etc.) so route changes feel cohesive with the existing entrance rhythm.

## Approach
Wrap the `<Outlet />` in `src/routes/__root.tsx` with a small client-side `PageTransition` component that animates on `location.pathname` change, using the existing easing tokens already standardized in `src/styles.css` (`--ease-out-soft`, ~400ms).

No new dependencies — pure CSS + a keyed React node driven by TanStack Router's `useLocation()`. This keeps it lightweight, SSR-safe, and consistent with the current motion system.

## Changes

### 1. New component: `src/components/PageTransition.tsx`
- Reads `useLocation().pathname` from `@tanstack/react-router`.
- Renders children inside a keyed wrapper so React remounts on route change.
- Applies a `page-enter` class that fades + slides up subtly (opacity 0→1, translateY 6px→0).
- Respects `prefers-reduced-motion` (handled globally in `styles.css` already).

### 2. `src/routes/__root.tsx`
- Import `PageTransition` and wrap `<Outlet />` inside `<main>`:
  ```tsx
  <main className="flex-1">
    <PageTransition>
      <Outlet />
    </PageTransition>
  </main>
  ```

### 3. `src/styles.css`
- Add a `page-enter` animation keyframe + utility using the standardized rhythm:
  - Duration: **450ms**, easing: `--ease-out-soft`
  - From: `opacity: 0; transform: translateY(6px)`
  - To: `opacity: 1; transform: translateY(0)`
- Subtle enough not to compete with in-page `Reveal` staggers (700–800ms), but distinct enough to register as a page change.

## Out of Scope
- No exit animations (would require `AnimatePresence` / extra library; adds complexity for marginal benefit on simple fades).
- No scroll-position choreography — TanStack Router's `scrollRestoration: true` already handles scroll on navigation.
- No changes to existing `Reveal` / entrance animations.

## Risk
Keying `<Outlet />` causes a remount of the page tree on every navigation. This is intentional and matches the visual effect, but it discards in-page state (e.g. expanded `<details>`). Acceptable for a marketing site where each route is independent.
