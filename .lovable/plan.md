## 1. Use the uploaded CRM screenshot on the Morgan Oxford page

- Copy `user-uploads://Screenshot_2026-05-21_at_15.49.24.png` → `src/assets/morgan-oxford-crm-welcome.png`.
- In `src/routes/work.morgan-oxford.tsx`:
  - Import the new image.
  - Add a new section above "The Website" titled "The CRM" with the screenshot inside a framed mockup card (same `bg-surface rounded-3xl p-4 border border-border` styling used for the website mockups, full-width aspect-video).
- Leave the existing card thumbnail (`work-morgan-oxford.jpg`) untouched so the work index keeps its current look.

## 2. Make invalid JSX / TS fail the build

The JSX parse error the user hit earlier got through because nothing typechecks before `vite build` runs. Wire `tsc --noEmit` (which catches JSX syntax errors via the TS parser) into the build pipeline:

- In `package.json`:
  - Add `"typecheck": "tsc --noEmit"`.
  - Change `"build"` to `"tsc --noEmit && vite build"`.
  - Change `"build:dev"` to `"tsc --noEmit && vite build --mode development"`.

This way any unterminated JSX, missing closing tag, or type error halts the build with a clear error instead of producing a blank-screen runtime crash. ESLint already runs via `bun run lint`; the existing `typescript-eslint` config will also flag these once `tsc` gates the build.

## Files touched
- `src/assets/morgan-oxford-crm-welcome.png` (new)
- `src/routes/work.morgan-oxford.tsx`
- `package.json`
