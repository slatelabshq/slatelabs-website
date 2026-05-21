## Fix 44DB Case Study Link

The new `src/routes/work.44db.tsx` page exists and is registered, but the portfolio card on `/work` links to `/work/$slug` with `slug=44db`, which routes to the old dynamic case study template (`work.$slug.tsx`) instead of the new dedicated page.

### Change
**File: `src/routes/work.tsx`** — update the `<Link>` in the cards map:
- Currently: `to={p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug"}` with `params={{ slug: p.slug }}`
- Change to also special-case 44db: `to="/work/44db"` (no params) when `p.slug === "44db"`, ile-eko → `/ile-eko`, otherwise → `/work/$slug` with params.

Simplest implementation: switch to a helper that returns the correct `<Link>` props per slug, or use a small inline conditional.

No other files affected.