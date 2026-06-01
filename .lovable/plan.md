# Phase 4 — Insights / Blog scaffold — SHIPPED ✅

## Done
- **Data**: `src/lib/insights-data.ts` — typed `Post` + `Block` model, helpers (`getPostBySlug`, `getRelatedPosts`, `getLatestPosts`, `formatPostDate`), 2 seed posts marked `TODO: editorial pass`.
- **Components**: `src/components/Prose.tsx` (block renderer for p / h2 / quote / ul), `src/components/InsightCard.tsx` (card with gradient fallback cover, tag pill, meta).
- **Routes**:
  - `/insights` (`src/routes/insights.tsx`) — header, sorted card grid, empty state.
  - `/insights/$slug` (`src/routes/insights.$slug.tsx`) — hero with tag/date/read time, author chip, Prose body, CTA card, related posts. Article JSON-LD + per-post `og:type=article`, dynamic title/description/canonical. `notFound()` for unknown slugs with a custom notFoundComponent.
- **Navigation**: Insights added to `SiteHeader` (desktop + mobile) and `SiteFooter` Company list.
- **Home cross-link**: "Latest from Slate Labs" 3-card strip between testimonials and final CTA (auto-hides when no posts).
- **SEO**: added `/insights` and both seed-post URLs to `public/sitemap.xml`.

## How to publish new posts
1. Add an entry to the `posts` array in `src/lib/insights-data.ts`.
2. Build body with `p` / `h2` / `quote` / `ul` blocks.
3. Add the URL to `public/sitemap.xml`.
4. Ship.

## Out of scope
- No MDX, CMS, or DB.
- No tag-filter pages, no pagination, no RSS (easy to add later).
- Real editorial copy — seed posts need SK / Joseph sign-off.

## Still pending (carryover)
- Hero image, logo PNG wall, SK + team headshots, Ile Eko screenshots.
- DNS migration, Google Search Console.
- Real Calendly URL (set `VITE_CALENDLY_URL`).
- Real testimonial quotes.
