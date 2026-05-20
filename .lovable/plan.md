Apply existing `glow-primary` / `glow-subtle` utilities to the pill/button-style CTA links that visually match `CtaButton` but were written as inline `<Link>`/`<a>` tags.

Targets (button-shaped, currently missing glow):
- `src/routes/__root.tsx` line 27 — error boundary "Go home" primary CTA → add `glow-primary`
- `src/routes/__root.tsx` line 50 — 404 "Go home" primary CTA → add `glow-primary`
- `src/routes/__root.tsx` line 56 — 404 "Contact us" bordered CTA → add `glow-subtle`
- `src/components/SiteHeader.tsx` line 38 — header "Start a project" primary pill → add `glow-primary`

Out of scope (inline text links, not button-shaped — glow would look out of place):
- Footer nav links, work-card story-link, contact aside links, "View case" links

No new utilities or components needed; only className additions.