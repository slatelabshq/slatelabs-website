# Insights / Blog scaffold

A lightweight publishing surface for thought-leadership pieces — no CMS, no MDX toolchain. Content lives as typed objects in `src/lib/insights-data.ts` so SK / Joseph can write new posts by adding an entry.

## Routes

- `/insights` — index. Header, intro line, grid of post cards (image, date, title, excerpt, tag).
- `/insights/$slug` — detail. Hero with cover, title, meta (date, author, read time), rendered body, "More insights" footer with 2 related posts, back-to-insights link.

## Data model (`src/lib/insights-data.ts`)

```ts
type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] };

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;          // ISO
  readMinutes: number;
  author: { name: string; role: string };
  cover?: string;        // optional asset import; falls back to gradient
  tag: "Brand" | "Growth" | "Platforms" | "Systems" | "Culture";
  body: Block[];
};
```

Renderer (small `BlockRenderer` in the detail route) maps each block type to styled JSX — reuses existing typography tokens, no new components beyond a simple `<Prose>` wrapper.

## Seed posts (2)

1. **"Why most Lagos brands look the same"** — Brand essay by Joseph (4-min read). Talks positioning, sameness, what differentiation actually means. Pulls thread from the RefinedNG piece.
2. **"The CRM your team will actually use"** — Systems essay by SK (5-min read). Workflow-first thinking, the Morgan Oxford lesson.

Both shipped as placeholders with `// TODO: editorial pass` comment so SK can rewrite. Real publishing happens by adding entries.

## SEO

- Index route: `head()` with insights-specific title / description / canonical.
- Detail route: dynamic `head()` from loader data — title, description (= excerpt), `og:type: article`, `og:title`, `og:description`, canonical, **Article JSON-LD** (headline, datePublished, author, publisher = Slate Labs).
- Add both routes to `public/sitemap.xml`.

## Navigation + cross-linking

- `SiteHeader` desktop + mobile nav: add `Insights` link between Work and About.
- `SiteFooter`: add Insights to the footer link list.
- Home page: add a small "Latest from Slate Labs" 3-card strip above the final CTA (pulls top 3 posts) — only renders if posts exist.

## Files

- **New**: `src/lib/insights-data.ts`, `src/routes/insights.tsx` (index), `src/routes/insights.$slug.tsx` (detail), `src/components/InsightCard.tsx`, `src/components/Prose.tsx`
- **Edited**: `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`, `src/routes/index.tsx`, `public/sitemap.xml`, `.lovable/plan.md`

## Out of scope

- No MDX, no remark/rehype, no markdown parser dependency.
- No CMS, no DB. Editorial workflow = edit TS file, deploy.
- No tag/category filter pages — single index sorted by date.
- No RSS feed (easy to add later if asked).

Approve and I'll build it.
