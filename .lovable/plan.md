## Add team photos to About page

### What
Add the uploaded headshots for Joseph and Kehinde to the "Meet the founders" cards on `/about`. SK has no photo — keep his card photoless (or use an initials placeholder).

### Changes
1. Copy uploads to assets:
   - `user-uploads://Untitled_design_7.png` → `src/assets/team-joseph.png`
   - `user-uploads://Untitled_design_5.png` → `src/assets/team-kehinde.png`
2. In `src/routes/about.tsx`:
   - Import both images
   - Add an optional `photo` field to each `team` entry (Joseph + Kehinde get one; SK left undefined)
   - Update the team card markup to render the photo at the top of each card as a square (rounded-2xl, aspect-square, object-cover, full width of card) above the existing `0X` number, name, role, and bio
   - For the card without a photo (SK), render a same-sized placeholder tile with his initials "SK" centered in the brand surface color so all three cards stay the same height

No other sections change.