/**
 * One-off generator: static HTML main → React page components.
 * Run: node scripts/generate-slate-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";

const SRC_ROOT = path.resolve("slate_labs_site_animated");
const OUT_DIR = path.resolve("src/components/slate/pages");

const PAGES = [
  ["index.html", "HomePage"],
  ["about.html", "AboutPage"],
  ["services.html", "ServicesPage"],
  ["work.html", "WorkIndexPage"],
  ["insights.html", "InsightsIndexPage"],
  ["ile-eko.html", "IleEkoPage"],
  ["work/nelly-baradi.html", "WorkNellyBaradiPage"],
  ["work/44db.html", "Work44dbPage"],
  ["work/vida-rosa.html", "WorkVidaRosaPage"],
  ["work/fly-trinity.html", "WorkFlyTrinityPage"],
  ["work/morgan-oxford.html", "WorkMorganOxfordPage"],
  ["work/brillanta.html", "WorkBrillantaPage"],
  ["insights/why-most-lagos-brands-look-the-same.html", "InsightLagosBrandsPage"],
  ["insights/the-crm-your-team-will-actually-use.html", "InsightCrmPage"],
];

function extractMain(html) {
  const m = html.match(/<main id="main">([\s\S]*?)<\/main>/i);
  if (!m) throw new Error("No <main id=\"main\"> found");
  return m[1].trim();
}

function rewriteHref(raw) {
  if (
    !raw ||
    raw.startsWith("http") ||
    raw.startsWith("mailto:") ||
    raw.startsWith("tel:") ||
    raw.startsWith("javascript:")
  ) {
    return raw;
  }
  const [pathPart, hash = ""] = raw.split("#");
  let p = pathPart.replace(/^\.\//, "");
  if (p === "index.html" || p === "") return hash ? `/${hash}` : "/";
  p = p.replace(/\.html$/, "");
  if (!p.startsWith("/")) p = `/${p}`;
  return hash ? `${p}#${hash}` : p;
}

function rewriteAssetUrls(s) {
  return s
    .replace(/(src|href)="assets\//g, '$1="/assets/')
    .replace(/(src|href)="\.\.\/assets\//g, '$1="/assets/');
}

function rewriteLinks(s) {
  return s.replace(/\bhref="([^"]+)"/g, (_, href) => {
    const next = rewriteHref(href);
    return `href="${next}"`;
  });
}

function inlineStyleToJsx(styleStr) {
  const obj = {};
  for (const chunk of styleStr.split(";")) {
    const idx = chunk.indexOf(":");
    if (idx === -1) continue;
    const key = chunk.slice(0, idx).trim();
    const val = chunk.slice(idx + 1).trim();
    if (key) obj[key] = val;
  }
  return `style={${JSON.stringify(obj)}}`;
}

function htmlToJsx(html) {
  let s = html;
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = rewriteAssetUrls(s);
  s = rewriteLinks(s);
  s = s.replace(/\bstyle="([^"]*)"/g, (_, styleStr) => inlineStyleToJsx(styleStr));
  s = s.replace(/\bclass=/g, "className=");
  s = s.replace(/\bfor=/g, "htmlFor=");
  s = s.replace(/\btabindex="(-?\d+)"/g, 'tabIndex={$1}');
  s = s.replace(/\btabindex=/g, "tabIndex=");
  s = s.replace(/\bautocomplete=/g, "autoComplete=");
  s = s.replace(/\breadonly\b/g, "readOnly");
  s = s.replace(/\bmaxlength=/g, "maxLength=");
  s = s.replace(/\bcolspan=/g, "colSpan=");
  s = s.replace(/\browspan=/g, "rowSpan=");
  s = s.replace(/\bstroke-width=/g, "strokeWidth=");
  s = s.replace(/\bstroke-linecap=/g, "strokeLinecap=");
  s = s.replace(/\bstroke-linejoin=/g, "strokeLinejoin=");
  s = s.replace(/\bfill-rule=/g, "fillRule=");
  s = s.replace(/\bclip-rule=/g, "clipRule=");
  s = s.replace(/\bcrossorigin=/g, "crossOrigin=");
  s = s.replace(/<br>/gi, "<br />");
  s = s.replace(/<(input|img|br|hr|meta|link|area|base|col|embed|source|track|wbr)(\s[^>]*?)(?<!\/)>/gi, "<$1$2 />");
  return s;
}

function componentFile(name, body) {
  return `// @ts-nocheck\n/* Auto-generated from slate_labs_site_animated — run scripts/generate-slate-pages.mjs to refresh */\nexport function ${name}() {\n  return (\n    <>\n${body}\n    </>\n  );\n}\n`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [rel, exportName] of PAGES) {
  const filePath = path.join(SRC_ROOT, rel);
  const html = fs.readFileSync(filePath, "utf8");
  const main = extractMain(html);
  const jsxBody = htmlToJsx(main)
    .split("\n")
    .map((line) => (line.trim() ? `      ${line}` : ""))
    .join("\n");
  const outPath = path.join(OUT_DIR, `${exportName}.tsx`);
  fs.writeFileSync(outPath, componentFile(exportName, jsxBody));
  console.log("Wrote", path.relative(process.cwd(), outPath));
}
