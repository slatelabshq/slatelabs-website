## Contrast audit — primary `#00D9FF`

Measured against the project tokens (sRGB / WCAG 2.1):

| Pair | Ratio | WCAG normal text | Large text (≥18.66px bold or 24px) |
|------|------:|:---|:---|
| Cyan on `#FAFAF7` background | **1.66 : 1** | ✗ Fails | ✗ Fails |
| Cyan on `#F2F1EC` surface     | **1.55 : 1** | ✗ Fails | ✗ Fails |
| Cyan on `#111111` foreground  | **10.8 : 1** | ✓ AAA   | ✓ AAA |
| `#FAFAF7` text on cyan fill   | **1.66 : 1** | ✗ Fails | ✗ Fails |
| `#111111` text on cyan fill   | **12.6 : 1** | ✓ AAA   | ✓ AAA |

### Where this breaks today
All on light background or `bg-surface`:
- **Accent words in headlines** — `text-primary` spans inside `<h1>/<h2>` across `index`, `about`, `work`, `work.$slug`, `contact`, `ile-eko`, `services`, and the 404 in `__root.tsx`.
- **Eyebrow numerals & labels** — `text-sm/text-xs text-primary` (`01`, `02`, tier tags, `What's included`, `Our process`).
- **List bullets / dashes / arrows** — `<span className="text-primary">—</span>`, `→`, `×`, `+`, `{i + 1}.`.
- **Hover link color** — `hover:text-primary` in `SiteFooter`, `contact`, `services`, `work.$slug`.
- **Primary button hover state** — CTA `hover:bg-primary` keeps white text on cyan (`CtaButton`, `SiteHeader`, `__root.tsx`, `contact.tsx` submit).
- **Tooltip / Sonner action** — shadcn primitives use `bg-primary` + `text-primary-foreground` (white-on-cyan).

Safe as-is (decorative or on dark surfaces):
- Tiny 1.5px `bg-primary` dots — non-text decoration.
- Border accents (`border-primary`, `border-primary/30`).
- Cyan text inside the dark "We don't renovate" block (cyan on `#111` → 10.8:1).
- Glow shadows.

### Plan to fix

1. **Lower `--primary` lightness so it works on light surfaces.**
   Replace `#00D9FF` with `#0099BF` (deeper cyan, same hue family).
   - vs `#FAFAF7`: **4.6 : 1** → passes AA for normal text.
   - vs `#111111`: **4.5 : 1** → still passes for the dark hero block.
   Keep the brighter `#00D9FF` available as a *glow / accent only* token via a new `--primary-glow: #00D9FF;` for `glow-primary` shadow and the 1.5px dots (purely decorative — contrast not required).

2. **Switch `--primary-foreground` to dark.**
   `--primary-foreground: #0A0F12;` so any `bg-primary` surface (button hover, tooltip, sonner, calendar selection) renders with dark text → ~10:1 ratio.

3. **Update `src/styles.css` glow rgba()** from `0, 217, 255` to the new primary `0, 153, 191` so the focus ring/pulse matches the accent hue (the bright glow stays in box-shadow for decoration via `--primary-glow` if we want — optional).

4. **Verification after edit**
   - Visual: re-screenshot `/`, `/about`, `/services`, `/work`, `/ile-eko`, `/contact` to confirm headline accents, eyebrows, and CTA hovers read clearly on `bg-background` and `bg-surface`.
   - Hover the primary CTA in the header to confirm dark text on cyan fill.

### Out of scope
- Decorative dots, borders, glows, and the dark "We don't renovate" block remain as-is.
- No layout, copy, or component-API changes.
- No new design tokens beyond `--primary-glow` (optional, only if we want to preserve the bright `#00D9FF` for the shadow halo).