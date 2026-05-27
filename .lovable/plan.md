## Plan: Fix Vercel 404 by using upstream TanStack Start plugin

The current `vite.config.ts` uses `@lovable.dev/vite-tanstack-config` with `cloudflare: false` and `target: "vercel"`. That wrapper is Cloudflare-opinionated and likely still isn't emitting the Vercel Build Output API directory (`.vercel/output`) that Vercel needs — which is why you're still getting `NOT_FOUND`.

### Changes

1. **Rewrite `vite.config.ts`** to bypass the Lovable wrapper and use the upstream plugins directly:
   - `@tanstack/react-start/plugin/vite` with `{ target: "vercel" }`
   - `@vitejs/plugin-react`
   - `@tailwindcss/vite`
   - `vite-tsconfig-paths`
   - Keep the `@` alias and React/TanStack dedupe

2. **Delete `src/server.ts`** — it's a Cloudflare Worker `fetch` handler and has no role on Vercel. The TanStack Start Vercel preset generates its own serverless function entry. `src/start.ts`'s `errorMiddleware` already handles SSR errors with the branded error page.

3. **Add `vercel.json`** with:
   ```json
   { "buildCommand": "vite build", "outputDirectory": ".vercel/output", "framework": null }
   ```
   This makes the build deterministic regardless of Vercel's auto-detection.

4. **Install any missing dev deps** (`@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`) if not already present — they're transitive today via the Lovable wrapper.

### Vercel dashboard settings

- Framework Preset: **Other**
- Build Command: leave blank (uses `vercel.json`)
- Output Directory: leave blank (uses `vercel.json`)
- Install Command: default

### Risks

- The Lovable dev sandbox/preview here uses the wrapper. After this change, the local Lovable preview will run on the upstream plugin instead. Behavior should be equivalent, but if the in-Lovable preview breaks I'll need to reconcile.
- If `@tanstack/react-start/plugin/vite` isn't installed standalone, I'll add `@tanstack/react-start` (already a dep) — the plugin ships with it.

### Outcome

After redeploying, Vercel will find `.vercel/output/config.json` + functions, route all paths through the SSR handler, and the 404s disappear. Genuine missing routes will show your in-app 404 from `__root.tsx`.

Confirm to proceed and I'll implement.