# Vercel 500 (`rou3` missing) — fix checklist

- [x] Diagnose: Nitro leaves `rou3` / `srvx` as runtime imports in `__fallback.func`
- [x] Confirm: Vercel was not shipping `node_modules` for the server function
- [x] Add post-build install for `.vercel/output/functions/__fallback.func`
- [x] Point Vercel settings at Bun (`installCommand` / `buildCommand`)
- [ ] Push and redeploy on Vercel
- [ ] Confirm https://www.slatelabshq.com.ng/ loads (no 500)
- [ ] Spot-check a few routes (home, work, contact)
