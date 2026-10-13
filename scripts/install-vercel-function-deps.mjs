import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const funcDir = resolve(".vercel/output/functions/__fallback.func");
const packageJsonPath = resolve(funcDir, "package.json");

if (!existsSync(packageJsonPath)) {
  console.log("[vercel] No server function package.json found, skipping dependency install.");
  process.exit(0);
}

const pkg = JSON.parse(readFileSync(packageJsonPath, "utf8"));
if (pkg.dependencies?.srvx) {
  // srvx 0.11 throws `new URL("/")` when Vercel passes a path-only request URL.
  pkg.dependencies.srvx = "0.12.8";
  writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
}

rmSync(resolve(funcDir, "node_modules"), { recursive: true, force: true });
rmSync(resolve(funcDir, "package-lock.json"), { force: true });

const npmInstall = spawnSync(
  "npm",
  ["install", "--omit=dev", "--no-package-lock", "--ignore-scripts", "--prefix", funcDir],
  { stdio: "inherit" },
);

if (npmInstall.status !== 0) {
  process.exit(npmInstall.status ?? 1);
}
