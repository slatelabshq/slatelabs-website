## What I'll do

Replace the three gradient placeholders in the "Bringing the brand to life" gallery on `/work/brillanta` with the three artworks you just uploaded — same swap pattern we used for Fly Trinity.

## Tile mapping

| Current placeholder | New image | Source upload |
|---|---|---|
| Company Profile | → **Staff ID Card** | `brillanta_ID_Cards_1.png` |
| Website Mockup | → **Social Media** | `BRILLANTA.jpg` (Merry Christmas post) |
| Business Card | **Business Card** (kept) | `Brillanta_1Business_Card_1.png` |

The "Company Profile" and "Website Mockup" labels go away because we don't have artwork for them yet — the new trio (Business Card, Staff ID, Social Media) mirrors the Fly Trinity case study exactly. The website itself stays acknowledged in the "Website Design & Build" deliverable card above.

## Files

1. Copy uploads into the project:
   - `user-uploads://Brillanta_1Business_Card_1.png` → `src/assets/brillanta-business-card.png`
   - `user-uploads://brillanta_ID_Cards_1.png` → `src/assets/brillanta-id-card.png`
   - `user-uploads://BRILLANTA.jpg` → `src/assets/brillanta-social.jpg`

2. Edit `src/routes/work.brillanta.tsx`:
   - Import the three new assets.
   - Replace the `designs` array — all three entries become `{ kind: "image", src: ... }` (no gradients left).
   - No other changes (palette, brief, deliverables, CTA stay as-is).

After approval I'll execute.