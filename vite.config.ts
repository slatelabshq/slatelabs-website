import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart(),
    nitroV2Plugin({ preset: "vercel" }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "entities/lib/decode.js": path.resolve(__dirname, "node_modules/entities/lib/decode.js"),
      "entities/lib/encode.js": path.resolve(__dirname, "node_modules/entities/lib/encode.js"),
      "entities": path.resolve(__dirname, "node_modules/entities"),
    },
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-start",
    ],
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
