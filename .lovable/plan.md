# Update contact & social info across site

Replace outdated email, Instagram, and add TikTok references across three files.

## Files changed

### `src/routes/contact.tsx`
- Change mailto link from `hello@slatelabs.co` to `hello@slatelabshq.com`
- Change sidebar email link from `hello@slatelabs.co` to `hello@slatelabshq.com`
- Change Instagram link from `slatelabs.co` to `slatelabs.hq`
- Add TikTok — `slatelabs.hq` in "Other ways to connect"

### `src/components/SiteFooter.tsx`
- Change Instagram link from `slatelabs.co` to `slatelabs.hq`
- Change email from `hello@slatelabs.co` to `hello@slatelabshq.com`
- Add TikTok link below Instagram in "Connect" column

### `src/routes/__root.tsx`
- Update JSON-LD schema email from `hello@slatelabs.co` to `hello@slatelabshq.com`
- Update JSON-LD schema `sameAs` Instagram from `slatelabs.co` to `slatelabs.hq`
- Add TikTok URL to `sameAs` array