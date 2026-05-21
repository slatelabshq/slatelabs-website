## Goal

Replace the "Social Media" placeholder tile on `/work/fly-trinity` with the uploaded Merry Christmas Fly Trinity image.

## Changes

1. Copy `user-uploads://BRILLANTA_-_3.jpg` → `src/assets/fly-trinity-social.jpg`.
2. In `src/routes/work.fly-trinity.tsx`:
   - Import the new asset.
   - Change the `Social Media` entry in the `designs` array from `kind: "gradient"` to `kind: "image"` pointing at the new asset.

Staff ID Card stays as a gradient placeholder until the user uploads it.
