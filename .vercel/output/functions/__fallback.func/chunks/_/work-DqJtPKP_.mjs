import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useLocation, Outlet, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { S as Section } from './Section-C2DeNOgk.mjs';
import { R as Reveal } from './Reveal-Bc5rEVPq.mjs';
import { P as PageHero } from './PageHero-CCrwiexh.mjs';
import { P as PageCta } from './PageCta-CiwlBK_x.mjs';
import { p as projects, j as workFly } from './router-Pw5mFUwk.mjs';
import './LagosTime-BkF40qTk.mjs';
import './HomeCta--NmQgw9L.mjs';
import './CtaButton-oIy5JhBR.mjs';
import './calendly-ow3Yvb14.mjs';
import '@tanstack/react-query';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

function WorkCard({
  p
}) {
  const title = p.title.includes("\u2014") ? p.title.split("\u2014")[1].trim() : p.title;
  return /* @__PURE__ */ jsxs("div", { className: "relative isolate flex min-h-[420px] md:min-h-[520px] flex-col justify-end overflow-hidden rounded-sm p-8 md:p-10 text-white", children: [
    /* @__PURE__ */ jsx("img", { src: p.image, alt: "", className: "absolute inset-0 h-full w-full object-cover img-zoom" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25", style: {
      backgroundColor: `${p.color}22`
    } }),
    p.badge ? /* @__PURE__ */ jsx("span", { className: "absolute top-6 right-6 z-10 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm", children: p.badge }) : null,
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-white/65 mb-4", children: p.category }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[0.95] mb-3", children: p.client }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-white/75 max-w-md mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm max-w-md mb-8", children: p.oneLiner }),
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all", children: [
        p.slug === "ile-eko" ? "Learn more" : "View case study",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] });
}
const filters = ["All", "Brand Foundations", "Digital Platforms", "Intelligent Systems"];
function Work() {
  const {
    pathname
  } = useLocation();
  const isIndex = pathname === "/work" || pathname === "/work/";
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);
  if (!isIndex) return /* @__PURE__ */ jsx(Outlet, {});
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { section: "Portfolio", image: workFly, imageAlt: "Fly Trinity Airways brand work", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Our ",
      /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "work." })
    ] }), description: "Building brands and platforms on a clean slate \u2014 one successful project at a time." }),
    /* @__PURE__ */ jsxs(Section, { className: "!pt-10 md:!pt-12", children: [
      /* @__PURE__ */ jsx("div", { className: "relative z-10 flex flex-wrap gap-2 mb-10 md:mb-12", children: filters.map((f) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setActive(f), className: `cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === f ? "bg-foreground text-background" : "border border-border bg-background text-muted hover:text-foreground hover:bg-surface"}`, children: f }, f)) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: visible.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 2 * 100, children: p.slug === "ile-eko" ? /* @__PURE__ */ jsx(Link, { to: "/ile-eko", className: "group block", children: /* @__PURE__ */ jsx(WorkCard, { p }) }) : p.slug === "44db" ? /* @__PURE__ */ jsx(Link, { to: "/work/44db", className: "group block", children: /* @__PURE__ */ jsx(WorkCard, { p }) }) : p.slug === "morgan-oxford" ? /* @__PURE__ */ jsx(Link, { to: "/work/morgan-oxford", className: "group block", children: /* @__PURE__ */ jsx(WorkCard, { p }) }) : p.slug === "fly-trinity" ? /* @__PURE__ */ jsx(Link, { to: "/work/fly-trinity", className: "group block", children: /* @__PURE__ */ jsx(WorkCard, { p }) }) : p.slug === "nelly-baradi" ? /* @__PURE__ */ jsx(Link, { to: "/work/nelly-baradi", className: "group block", children: /* @__PURE__ */ jsx(WorkCard, { p }) }) : /* @__PURE__ */ jsx(Link, { to: "/work/$slug", params: {
        slug: p.slug
      }, className: "group block", children: /* @__PURE__ */ jsx(WorkCard, { p }) }) }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsx(PageCta, {})
  ] });
}

export { Work as component };
//# sourceMappingURL=work-DqJtPKP_.mjs.map
