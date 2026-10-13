import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const funcDir = resolve(".vercel/output/functions/__fallback.func");
const packageJsonPath = resolve(funcDir, "package.json");

if (!existsSync(packageJsonPath)) {
  console.log("[vercel] No server function package.json found, skipping dependency install.");
  process.exit(0);
}

const bun = spawnSync("bun", ["install", "--production"], {
  cwd: funcDir,
  stdio: "inherit",
});

if (bun.status !== 0) {
  process.exit(bun.status ?? 1);
}
