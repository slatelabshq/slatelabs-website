// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, componentTagger (dev-only),
//     VITE_* env injection, @ path alias, React/TanStack dedupe, error logger plugins,
//     and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel deployment: disable the Cloudflare plugin and target Vercel.
// TanStack Start's Vercel preset writes a .vercel/output directory that Vercel auto-detects.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
