# Phase 5 — Launch readiness

Phase 4 (Insights scaffold) already shipped. The remaining work in `.lovable/plan.md` is the path to a real public launch. Grouping into 4 sub-phases, delivered in this order so each step unblocks the next.

---

## 5.1 — Asset wiring (blocks everything visual)

Goal: replace every placeholder image/quote with real content so the site is screenshot-ready.

1. **Hero image** — slot into `src/routes/index.tsx` hero. Add responsive `<img>` with width/height + `fetchpriority="high"` for LCP.
2. **Logo wall** — drop client logo PNGs into `src/assets/logos/`, render in the "trusted by" strip on home. Greyscale by default, color on hover.
3. **Headshots** — SK + Joseph + team. Wire into `/about` team grid and Insights author chip (`Post.author.avatar`).
4. **Ile Eko screenshots** — populate the case-study gallery in `src/routes/ile-eko.tsx`.
5. **Real testimonial quotes** — replace placeholders in `src/components/Testimonials.tsx` with attributed quotes.
6. **Editorial pass** on the 2 seed Insights posts (remove `TODO` markers).

Blocker: user must upload assets / send copy. Track in a checklist; ship each as it arrives — no need to batch.

## 5.2 — Polish pass

Goal: tighten quality before sharing the link publicly.

1. **404 page** — custom `notFoundComponent` on `__root.tsx` matching brand.
2. **Accessibility sweep** — focus rings, alt text on every new image, landmark roles, color contrast on muted text.
3. **Performance** — verify LCP/CLS on home + a case study via Lighthouse. Lazy-load below-the-fold imagery, preload hero, audit font loading.
4. **Motion refinement** — consistent easing/durations; respect `prefers-reduced-motion`.
5. **OG images** — generate per-route social cards (home, services, work index, each case study, each insight).

## 5.3 — Integrations

1. **Real Calendly URL** — set `VITE_CALENDLY_URL` secret; verify `CtaButton` opens correct flow.
2. **Form endpoint** — wire `/contact` form to a real handler (server function → email).
3. **Analytics** — add Plausible or GA4 snippet in `__root.tsx`.

## 5.4 — Go-live SEO

Run last, after content + polish are stable.

1. **DNS migration** — point custom domain at the deployment, update canonical URLs in `head()` blocks and `sitemap.xml`.
2. **Google Search Console** — verify domain, submit sitemap.
3. **Bing Webmaster Tools** — same.
4. **Final sitemap audit** — ensure every shipped route is listed; resubmit.

---

## Delivery order (why)

```text
5.1 Assets   →  5.2 Polish   →  5.3 Integrations   →  5.4 SEO go-live
   (content)     (quality)        (functionality)        (distribution)
```

Assets first because polish + OG cards depend on real imagery. Integrations after polish so we test against the final UI. SEO last because canonical URLs and sitemap submission only matter once the production domain is live.

## Out of scope for Phase 5
- New page types or features beyond what's listed.
- CMS migration for Insights (stays code-defined).
- Paid ads, email capture/newsletter, multi-language.

## Suggested first move
Start 5.1 by uploading the **hero image** + **logo PNGs** — those two unlock the home page screenshot and the LCP perf work in 5.2.
