## Goal

Make the Slate Labs logo feel balanced and consistent in the header and footer across mobile, tablet, and desktop. Today the header logo is `h-6` at all sizes (too small next to the nav text and pill padding), and the footer is `h-8` at all sizes.

## Changes

### `src/components/SiteHeader.tsx`
- Increase mark size on mobile so it doesn't look lost in the pill.
- Switch to wordmark at `md` (when nav links appear), not `sm`, to avoid a cramped wordmark + Menu button on narrow phones/tablets.
- Tune pill padding and the gap between logo and nav so vertical rhythm matches the logo height.

Concretely:
- Mark (mobile, `<md`): `h-7`
- Wordmark (`md+`): `h-6 lg:h-7`
- Logo link padding: `pl-4 pr-3` (a touch more breathing room on the left)
- Nav pill: keep `py-2` on mobile, bump to `md:py-2.5` so the taller wordmark sits centered without the pill feeling tight
- Nav links container gets `md:ml-2` so there's a clear gap between logo and links

### `src/components/SiteFooter.tsx`
- Footer wordmark: `h-7 md:h-9` so it scales down on mobile and reads larger on desktop, matching the larger footer card padding.

## Out of scope
- No changes to logo assets, colors, or hover states.
- No changes to the mobile menu drawer layout itself, only the trigger row.

## Verification
- Screenshot at 390/375 (mobile), 768 (tablet), and 1280 (desktop) and confirm the logo is vertically centered in the pill, doesn't crowd the Menu button on mobile, and feels proportional to nav text on desktop. Repeat for the footer.
