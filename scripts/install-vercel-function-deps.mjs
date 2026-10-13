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

// The Nitro v2 Vercel wrapper hands TanStack Start's web handler a Node
// IncomingMessage (path-only url, plain headers object) instead of a Request.
const entryPath = resolve(funcDir, "chunks/virtual/entry.mjs");
const entry = readFileSync(entryPath, "utf8");
const needle = "return handler(event.req, event.context);";
if (!entry.includes(needle)) {
  console.error("[vercel] Could not find the web handler bridge in the server bundle.");
  process.exit(1);
}

const toWebRequest = `
function __toWebRequest(req) {
	if (typeof Request !== "undefined" && req instanceof Request) return req;
	const headers = new Headers();
	for (const [key, value] of Object.entries(req.headers || {})) {
		if (value == null) continue;
		if (Array.isArray(value)) for (const v of value) headers.append(key, v);
		else headers.set(key, String(value));
	}
	const proto = (headers.get("x-forwarded-proto") || "https").split(",")[0].trim();
	const host = (headers.get("x-forwarded-host") || headers.get("host") || "localhost").split(",")[0].trim();
	const method = req.method || "GET";
	const hasBody = method !== "GET" && method !== "HEAD";
	return new Request(\`\${proto}://\${host}\${req.url || "/"}\`, {
		method,
		headers,
		body: hasBody ? __Readable.toWeb(req) : undefined,
		duplex: hasBody ? "half" : undefined,
	});
}
`;

const patched =
  `import { Readable as __Readable } from "node:stream";\n` +
  entry
    .replace(needle, "return handler(__toWebRequest(event.node?.req ?? event.req), event.context);")
    .replace("function fromWebHandler(handler) {", `${toWebRequest}\nfunction fromWebHandler(handler) {`);
writeFileSync(entryPath, patched);
console.log("[vercel] Patched server bundle to convert Node requests to web Requests.");
