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

const entryPath = resolve(funcDir, "chunks/virtual/entry.mjs");
const entry = readFileSync(entryPath, "utf8");
const needle = "new FastURL(req.url)";
if (!entry.includes(needle)) {
  console.error("[vercel] Could not find FastURL(req.url) in the server bundle.");
  process.exit(1);
}

const patched = entry.replaceAll(
  needle,
  'new FastURL(typeof req.url==="string"&&req.url.startsWith("/")?`${req.headers.get("x-forwarded-proto")||"https"}://${req.headers.get("x-forwarded-host")||req.headers.get("host")||"localhost"}${req.url}`:req.url)',
);
writeFileSync(entryPath, patched);
console.log("[vercel] Patched server URL handling for Vercel path-only requests.");
