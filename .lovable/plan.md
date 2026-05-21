## Add Cyan Glow on Hover to Work Cards

Add a soft cyan glow effect when hovering the black portfolio cards on `/work`.

### Change
**File: `src/routes/work.tsx`**
- Add `transition-shadow` and `hover:shadow-[0_0_60px_-5px_rgba(0,217,255,0.45)]` (cyan glow) to the card `<div>` (the one with `bg-[#0A0A0A]`).
- Keep the existing `group-hover:-translate-y-1` lift.

No other files affected.