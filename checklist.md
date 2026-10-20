# Slate Labs v4 design migration — checklist

Source design: `slate_labs_site_animated/` (static HTML + `assets/css/slate.css`).

- [x] Copy fonts, CSS, JS, and images into `public/assets/`
- [x] Wire global shell: self-hosted fonts, `slate.css`, theme pre-paint script, `slate.js`
- [x] Replace header, footer, mobile sheet, and WhatsApp FAB with v4 markup
- [x] Generate / align page markup for all 15 marketing routes
- [x] Keep working contact form (`/api/public/contact`) in the new contact layout
- [x] Remove old Tailwind-only chrome (scroll progress, page transition) from root
- [x] `npm run build` passes
- [x] Fix SPA navigation: re-run reveal/ktype after route chunk loads (not only on full refresh)
- [x] SPA page curtain (cyan / teal veils) when switching nav tabs
- [ ] Deploy to Vercel and spot-check home, work case study, contact submit, theme toggle
- [ ] Optional: convert internal `<a href>` links to TanStack `<Link>` for client-side navigation without full reload
