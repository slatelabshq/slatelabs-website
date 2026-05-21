### Scope
Add Nelly Baradi's platform links as accessible icon buttons inside the **Results** section of her case-study page.

### Links to add
| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/nellybaradi |
| X (Twitter) | https://x.com/nellybaradii |
| TikTok | https://www.tiktok.com/@nellybaradi_ |
| Hypalabs (Linktree) | https://hypalabs.lnk.to/HighMe |
| Spotify | https://open.spotify.com/artist/77bRctbyJcjkQcyEa5wrQr |
| Apple Music | https://music.apple.com/us/artist/nelly-baradi/1494289729 |
| Audiomack | https://audiomack.com/nelly-baradi |

### Implementation
1. **Import brand icons** (`react-icons/fa6`) into `src/routes/work.nelly-baradi.tsx`:
   - `FaInstagram`, `FaXTwitter`, `FaTiktok`, `FaSpotify`, `FaApple`
   - Keep `ExternalLink` from `lucide-react` for Hypalabs / Audiomack.
2. **Add icon button row** at the bottom of the black results band, below the metrics grid and results paragraph.
   - Heading: "Follow the artist"
   - Each link is an `<a>` with:
     - `target="_blank" rel="noopener noreferrer"`
     - `aria-label` naming the platform (e.g. "Nelly Baradi on Instagram")
     - Circular button style: `rounded-full`, `border border-primary/20`, dark surface matching the results cards, hover state with `hover:bg-primary/10 hover:border-primary/40`
   - Icon size: 20px, primary color.
3. **No changes** to `work-data.ts` or other routes.

### Design tokens
- Uses existing `--primary` color for icons and hover.
- Dark surface (`bg-[#111111]`) matches the result metric cards.
- Consistent border radius and spacing with the rest of the page.