## What I'll build

A new case study page for **Brillanta Afrique Limited** at `/work/brillanta`, structured identically to `/work/fly-trinity` — same section rhythm (hero → cover → brief → palette → deliverables → designs gallery → CTA), same components (`Section`, `Eyebrow`, `CtaButton`), with the accent palette scoped to green + gold for this page only (does not touch global tokens).

Per your answer, the website we built for Brillanta is included as **one of the deliverables** on this case study — no separate Brillanta routes will be added to the project.

## Files

**1. `src/lib/work-data.ts`**
- Extend the `slug` union with `"brillanta"`.
- Add a new `Project` entry: client `"Brillanta Afrique"`, title `"Brillanta Afrique — Brand & Web Identity"`, category `"Brand Foundations"`, one-liner along the lines of *"A premium identity for an Africa-rooted agriculture & energy trader."*, tags `["Brand Identity", "Website Design", "Collateral"]`, color `#1F4D2B` (forest green).
- Use a generated cover image (see below) as `image`.

**2. `src/assets/work-brillanta.jpg`** (new, generated)
- 1280×720 hero cover. Concept: warm earth-and-grain still life with a subtle gold sheen — cocoa pods, sesame, ginger arranged editorially on a dark forest-green backdrop. Used as `project.image` and `og:image`.

**3. `src/routes/work.brillanta.tsx`** (new) — mirrors `work.fly-trinity.tsx`:
- `head()` with route-specific title, description, og tags, canonical.
- Scoped CSS-variable wrapper: `--primary: #1F4D2B`, `--primary-glow: #C9A24C`, `--primary-foreground: #FFFFFF` (forest green + gold, scoped to this page only — no global token changes).
- **Hero**: `← All work` link, icon tile (`Leaf` from lucide), eyebrow `"Brand Foundations · Agriculture & Energy"`, H1 `"Brillanta / Afrique"`, one-liner.
- **Cover image**: the generated `work-brillanta.jpg` in the 16:9 rounded frame.
- **The brief**: pulled from the PDF — Nigerian agro-allied & energy trader since 1998, premium grains/cocoa/ginger/sesame plus AGO/DPK/LPG/PMS, connecting African markets with global partners. Headline: *"From African soil to global markets."*
- **Color palette** (5 swatches): Forest `#1F4D2B`, Harvest Gold `#C9A24C`, Cocoa `#4A2C18`, Savanna Cream `#F2E8D5`, Ink `#0F1A14`.
- **Deliverables** (4 cards, lucide icons): Brand Identity (`Palette`), Website Design & Build (`Globe`) — this is where the website is acknowledged, Marketing Collateral (`LayoutTemplate`, covers company profile + stationery), Sustainability Storytelling (`Sprout`).
- **The designs** gallery (3 tiles, all **placeholder gradients** as you requested — no real photos yet): Company Profile, Website Mockup, Business Card. Same `Design` discriminated-union pattern as Fly Trinity so any tile can later be swapped from `kind: "gradient"` to `kind: "image"` when you upload artwork. Gradients use the brand greens/golds.
- **CTA** identical to Fly Trinity.

**4. Brillanta card on `/work`** — automatic. `work.tsx` already maps over `projects`, so adding the entry in step 1 makes the card appear with no edits needed.

## Notes

- `src/routeTree.gen.ts` is auto-generated; the TanStack plugin will register the new route on save.
- No global theme tokens are modified — green/gold lives only inside the `style={brillantaScope}` wrapper, exactly how Fly Trinity does it.
- All three design tiles are placeholders. Send me images (company profile cover, website screenshots, business card) and I'll swap them in the same way we did for Fly Trinity.

After approval I'll generate the cover image, add the data entry, and write the route file.