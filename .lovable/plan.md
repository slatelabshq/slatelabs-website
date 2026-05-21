## Plan: Make Animations More Subtle

### Goal
Reduce the speed and intensity of site-wide animations so they feel gentle and refined rather than fast and sharp.

### Changes to `src/styles.css`

#### 1. Entrance animations — longer durations, smaller movements
| Class | Current | New |
|---|---|---|
| `animate-reveal` | 600ms, translateY(16px) | 900ms, translateY(10px) |
| `animate-fade-in` | 400ms, translateY(8px) | 600ms, translateY(6px) |
| `animate-fade-in-up` | 500ms, translateY(12px) | 750ms, translateY(8px) |
| `animate-scale-in` | 400ms, scale(0.98) | 700ms, scale(0.985) |

#### 2. Scroll reveal — softer and slower
| Property | Current | New |
|---|---|---|
| Duration | 600ms | 900ms |
| translateY | 12px | 8px |

#### 3. Hover & interactive transitions — slower, more understated
| Element | Current | New |
|---|---|---|
| `a, button` base | 200ms | 350ms |
| `hover-lift` | 250ms, -2px | 400ms, -1px |
| `glow-primary` box-shadow | 300ms | 500ms |
| `glow-subtle` box-shadow | 300ms | 500ms |
| `story-link` underline | 300ms | 450ms |

#### 4. Easing — softer across the board
Replace the current `--ease-out-soft` with a gentler curve:
- Current: `cubic-bezier(0.22, 1, 0.36, 1)`
- New: `cubic-bezier(0.33, 1, 0.68, 1)` (slower start, more gradual settle)

#### 5. Hero animation delays — slightly staggered
Increase the stagger gap in the hero from 60/180/300ms to 100/250/400ms so each line has more breathing room.

### Out of scope
- The marquee animation (it is already slow at 50s)
- Image hover scale duration (already 900ms, only the scale amount could be reduced)
- Reduced-motion media query (already handled)

### Verification
- Load the homepage and scroll through sections to confirm reveals feel gentle
- Hover over nav links, CTA buttons, and service cards to confirm transitions feel smooth, not snappy
- Check that the hero text entrance no longer feels abrupt