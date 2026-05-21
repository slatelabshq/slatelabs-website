## Add Nelly Baradi case study

### What
Add Nelly Baradi — Afropop/R&B artist campaign — as a new project on `/work` with a dedicated case study route at `/work/nelly-baradi`, styled in the same vein as the 44DB case study (music/culture vertical).

### Files

1. **`src/lib/work-data.ts`** — extend the `Project` slug union to include `"nelly-baradi"` and append a new entry:
   - client: "Nelly Baradi"
   - title: "Nelly Baradi — Artist Campaign & Creative Direction"
   - category: "Brand Foundations"
   - oneLiner: "The voice behind the voice — now centre stage."
   - tags: ["Creative Direction", "Music Marketing", "Social Media"]
   - image: new asset (see image question below)
   - `detail` block with industry "Music", date "March – April 2026", services (Creative Direction, Social Media Management, Music Marketing, Content Production), and 3 hero metrics pulled from the doc:
     - "250K+" YouTube views
     - "+436%" Instagram organic views (28d)
     - "+41%" Spotify monthly listeners

2. **`src/routes/work.nelly-baradi.tsx`** — new route mirroring the `work.44db.tsx` structure:
   - Hero with artist name + tagline (logo/portrait area depending on image choice)
   - "The brief" section (artist bio + positioning from page 1 of the doc)
   - "Scope of work" — 4 service cards (Creative Direction, Social Media Management, Music Marketing, Content Production) using existing card pattern
   - "Results — High Me Campaign" black band, with the 13-row metrics table reformatted as a grid of metric tiles grouped by platform (YouTube / Instagram / Meta Paid / X / Spotify)
   - "What we delivered" grid (campaign strategy, 4-phase X rollout, press release, paid media, playlist pitching, influencer activations, content production, live activations)
   - Reused CTA section ("clean slate?")

3. **`src/routes/work.tsx`** — add a `p.slug === "nelly-baradi"` branch to the card-link switch so the work index links to `/work/nelly-baradi`.

### What I need from you (1 question)

The case study needs a hero visual. The uploaded `.docx` doesn't include a usable photo of Nelly — only placeholder boxes. Options:
- **(A)** You upload a portrait/cover image (1:1 or 4:3 works best — same treatment as the other case-study covers).
- **(B)** I generate a stylized type-led hero (large "NELLY BARADI" wordmark on a dark surface, no portrait) so the page can ship now and the photo can be swapped in later.

I'll wait for your choice before generating any assets.

### Out of scope
- No changes to `about.tsx`, navigation, or any other case study.
- No new design tokens — reuse the existing primary / surface / foreground palette.
