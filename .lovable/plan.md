## Problem

The 404 you're seeing is from Vercel's edge, not from the app. The project is currently configured for **Cloudflare Workers**:

- `wrangler.jsonc` declares a Worker with `main: "src/server.ts"`
- `src/server.ts` imports `@tanstack/react-start/server-entry` and exports a Worker `fetch` handler
- `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`, which bundles the `@cloudflare/vite-plugin` and builds a Worker artifact

When this build is uploaded to Vercel, no route handler runs (Vercel expects either a static site or its own Node/Edge function format), so every URL returns Vercel's generic `404: NOT_FOUND`.

## Plan: switch the build target to Vercel

1. **Add a Vercel build target to TanStack Start**
   - Update `vite.config.ts` to pass `target: "vercel"` to TanStack Start, replacing the Cloudflare-specific `tanstackStart.server.entry` override.
   - Remove `src/server.ts` from the SSR entry path (it's a Cloudflare Worker wrapper and won't run on Vercel). Keep the file or delete it — but stop referencing it from config.

2. **Remove Cloudflare-only config**
   - Delete `wrangler.jsonc` (Cloudflare-only, ignored by Vercel and confusing to keep).
   - Confirm `@lovable.dev/vite-tanstack-config` doesn't force the Cloudflare plugin in a way that breaks Vercel output. If it does, we'll bypass it and use TanStack Start's own Vite plugin directly (`@tanstack/react-start/plugin/vite`) with `target: "vercel"`.

3. **Add a `vercel.json`** (only if needed) to point Vercel at the generated `.vercel/output` directory produced by TanStack Start's Vercel preset. With the preset, Vercel auto-detects it — no file usually needed.

4. **Re-deploy to Vercel**
   - Push the changes; Vercel rebuilds.
   - All routes (`/`, `/about`, `/work/44db`, etc.) should resolve via TanStack Start's SSR handler running as a Vercel function, and the in-app branded 404 will show for genuinely missing paths instead of Vercel's generic one.

## Heads-up / risk

`@lovable.dev/vite-tanstack-config` is opinionated toward Cloudflare. There's a real chance step 1 alone isn't enough and we'll need to swap it for the upstream TanStack Start Vite plugin to get a clean Vercel build. I'll do that fallback automatically if the first attempt still produces a Worker bundle.

Alternative (much simpler): publish through Lovable instead — it's already set up for this stack and would work in one click. Let me know if you'd rather go that route; otherwise I'll proceed with the Vercel reconfiguration above.