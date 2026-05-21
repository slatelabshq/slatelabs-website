Update the primary brand color across the design system from the current orange (#C5553D) to cyan (#00D9FF).

### Changes
- In `src/styles.css`:
  - Replace `--primary: #C5553D;` with `--primary: #00D9FF;`
  - Update all `rgba(197, 85, 61, ...)` values to `rgba(0, 217, 255, ...)` in the `soft-pulse` keyframe and `glow-primary` utility so glow/animation effects match the new cyan hue.

### Out of scope
- No component-level changes needed — all color usage is token-based.
- No other palette tokens change (background, foreground, surface, etc. remain as-is).