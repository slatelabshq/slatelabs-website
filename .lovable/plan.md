## Goal
Redesign the `/work` portfolio cards to match the uploaded reference: solid colored cards with a small category eyebrow, oversized bold title, subtitle, and a "View case study →" link — replacing the current image-led 4:3 cover layout.

## Reference read
From the screenshot:
- Wide, generously rounded card (~2rem radius) with a flat solid color fill
- Top-left: small uppercase tracked label ("BRAND IDENTITY")
- Bold, condensed/heavy display title ("Fly Trinity")
- Muted one-line subtitle below the title
- Bottom-left CTA: "View Mission →"
- Faint outlined icons floating in the background (decorative)
- No photography — color does the work

## Changes

### 1. `src/routes/work.tsx`
Replace the current card markup inside the `visible.map(...)` grid:
- Drop the `<img>` cover entirely.
- Render each project as a tall solid-color card (`aspect-[16/10]` or min-height ~420px) with:
  - Eyebrow: `p.category` in uppercase, tracked, small, semi-transparent on the card bg
  - Title: `p.client` (or shortened title) in a large, heavy weight — using existing display font, size up to `text-6xl md:text-7xl`
  - Subtitle: `p.oneLiner`, muted
  - CTA pinned bottom-left: "View case study →" (or "Learn more →" for `ile-eko`)
- Add 3–4 faint outlined SVG decorations absolutely positioned in the card (sparkle/cloud-style, low opacity) — generic, not per-project, so it stays simple.
- Keep the existing `Link` routing logic (`ile-eko` → `/ile-eko`, others → `/work/$slug`) and `Reveal` wrapper untouched.

### 2. Per-project card color
Add a `color` field to each project so each card gets its own bg:
- `44db` → deep indigo/violet (matches reference vibe)
- `vida-rosa` → rose/burgundy
- `ile-eko` → forest green
- `morgan-oxford` → warm navy or oxford blue
Store as a Tailwind-compatible hex on the `Project` type in `src/lib/work-data.ts`. Text color on the card is white; eyebrow/subtitle use `white/60`.

### 3. No other surface changes
- The case study detail pages (`/work/$slug`, `/ile-eko`) stay exactly as they are.
- Filters, hero, and CTA section on `/work` stay as-is.
- Images (`work-*.jpg`) remain in the repo and are still used on the case study detail pages — only the listing changes.

## Out of scope
- No changes to homepage featured work (can be a follow-up if you want the same treatment there).
- No new fonts; using the existing display font at a larger size to match the reference's typographic weight.
- No animation beyond the existing `Reveal` + a subtle hover lift.

## Risk
- The reference uses a very heavy display face (looks like Druk/Neue Machina). Our current font may read lighter — if you want an exact match I can swap in a free Google equivalent (e.g. Bebas Neue or Archivo Black) as a one-line change. Flag if you want that.
