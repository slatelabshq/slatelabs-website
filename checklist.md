# Vercel 500 (`rou3` missing) — fix checklist

- [x] Diagnose: Nitro leaves `rou3` / `srvx` as runtime imports in `__fallback.func`
- [x] Confirm: Vercel was not shipping `node_modules` for the server function
- [x] Add post-build install for `.vercel/output/functions/__fallback.func`
- [x] Switch to npm (`package-lock.json`, `vercel.json` install/build)
- [x] Remove `.vercel/output` from Git (keep in `.gitignore`)
- [x] Bump `@tanstack/react-start` to ≥1.168.60 (CVE-2026-102989)
- [x] `npm run build` passes (types + Vite + function deps)
- [x] Pin server function `srvx` to 0.12.8 (fixes Invalid URL on `/`)
- [ ] Commit + push (stops tracking build output on GitHub)
- [ ] Push and redeploy on Vercel
- [ ] Confirm https://www.slatelabshq.com.ng/ loads (no 500)
- [ ] Spot-check a few routes (home, work, contact)
