## What I'll do

Fold the website revamp into the existing Morgan Oxford case study at `/work/morgan-oxford` — no new route, no new project entry. Two surgical additions:

## Edits to `src/routes/work.morgan-oxford.tsx`

1. **Solutions grid** — add a 7th card so the existing 3×2 grid becomes 4×2 on the second row:
   - **Icon**: `Globe` (already imported).
   - **Title**: "Website Revamp".
   - **Desc**: "A full rebuild of MorganOxford.com — a modern, fast, conversion-focused site that mirrors the consultancy's premium positioning and routes prospective students straight into the CRM pipeline."

2. **New "The website" section** — inserted after the Solutions block and before the Info strip. Single Section containing:
   - `Eyebrow`: "The website"
   - Heading: *"A new front door for ****global students.****"*
   - One placeholder tile in a 16:9 rounded frame using a Slate Dark → System Cyan gradient (matches the existing palette). Caption: "morganoxford.com — Revamp".
   - Wrapped in `<div data-website-mockup>` so when you send the screenshot I can swap the gradient for an `<img>` in one edit. Same `Design` swap pattern as Fly Trinity / Brillanta.

3. **Info strip — "Service Delivered"** — change `"Custom CRM System"` to `"Custom CRM System + Website Revamp"` so the deliverable summary reflects both.

4. **Head meta** — append "& website revamp" to the description and og:description so the social/search snippet is accurate.

## Not changing

- `src/lib/work-data.ts` — Morgan Oxford's card on `/work` keeps its current copy (CRM-led). Adding "website" to the one-liner would dilute the headline.
- No new route, no new project entry.
- When you upload the website screenshot next, I'll copy it to `src/assets/morgan-oxford-website.png`, import it, and swap the gradient tile for the image.