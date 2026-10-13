import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { m as project$4 } from './router-Pw5mFUwk.mjs';
import { Link } from '@tanstack/react-router';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';
import '@tanstack/react-query';
import 'react';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

const credits = [{
  title: "Declan Rice \u2014 Odumodublvck",
  label: "Hip-Hop / Drill",
  copy: "Produced by Trill Xoe and JohnWav of 44DB. One of the fastest-streaming Nigerian songs at release. #1 on TCL Radio Nigeria. The record that announced a new era for Nigerian rap \u2014 made by 44DB members."
}, {
  title: "Idanski \u2014 Zaylevelten",
  label: "Alternative Rap",
  copy: "Produced by Trill Xoe of 44DB. One of the biggest records from Nigeria's rising underground scene. ZayLevelten and 44DB \u2014 building the next wave from the ground up."
}, {
  title: "Chanel \u2014 Blaqbonez ft. Asake",
  label: "Afro-Fusion",
  copy: "Co-produced by Johnson IP of 44DB. Released May 2026. One of the most anticipated Nigerian releases of the year \u2014 2.5M+ pre-release views. Nigeria's #1 rap song."
}];
const servicesDelivered = ["Brand platform & visual identity", "Social media strategy & management", "Content production & art direction", "Music marketing", "Digital campaign strategy", "Community growth & audience development"];
const metrics = [{
  v: "1K \u2192 300K+",
  l: "Organic monthly views growth"
}, {
  v: "300K+",
  l: "Views in 7 days \u2014 Chanel campaign"
}, {
  v: "4K+",
  l: "Interactions in campaign period"
}, {
  v: "500+",
  l: "New followers in 72 hours"
}];
function FortyFourDBCaseStudy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "px-6 pt-32 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx(Link, { to: "/work", className: "text-sm text-muted hover:text-primary", children: "\u2190 All work" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase", children: project$4.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance", children: project$4.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed", children: "The producers behind Nigeria's biggest records across every genre." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl bg-surface aspect-video", children: /* @__PURE__ */ jsx("video", { className: "absolute inset-0 w-full h-full object-cover", src: "/media/44db-hero.mp4", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "auto", "aria-label": "44DB hero reel" }) }) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "The Brief" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance", children: [
        "The people making your favourite songs ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "finally getting the platform they deserve." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-muted leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "44DB is Nigeria's premier producer collective, a 9+ member team of producers whose credits span rap, alternative R&B, Afro-fusion, trap, and beyond. Founded by Tochi Bedford in 2018, the collective was built on a simple but radical idea: producers deserve credit, community, and a platform that reflects the weight of their work." }),
        /* @__PURE__ */ jsx("p", { children: "When Slate Labs came in, 44DB had the credits. What they didn't have was a brand infrastructure that matched. Under 1,000 monthly Instagram views. An identity that lived in the background... even as their music dominated the foreground." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "The Credits" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "Three records. ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Three moments that defined Nigerian music." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: credits.map((c) => /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-3xl p-8 border border-border flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-[0.15em] text-primary mb-4", children: c.label }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight mb-4", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: c.copy })
      ] }, c.title)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "bg-foreground text-background rounded-[2.5rem] p-10 md:p-20", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "What We Delivered" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-10 text-balance text-background", children: [
        "From 1,000 views a month to ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "300,000." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-background/70 leading-relaxed max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsx("p", { children: "When Slate Labs took on 44DB, the brief was clear: build the platform that matches the cultural weight these producers carry. That meant brand architecture, content strategy, community management, and when the moment came \u2014 full music marketing campaign execution." }),
        /* @__PURE__ */ jsx("p", { children: "In May 2026, when Chanel dropped and became the #1 rap song in the country, 44DB's platform was ready for the moment. 300,000+ organic views in 14 days. 4,000+ interactions. 500+ new followers in 72 hours." }),
        /* @__PURE__ */ jsx("p", { children: "But the Chanel campaign is one chapter. The real story is a collective that now has a brand as powerful as their catalogue. And with their next project on the way \u2014 Slate Labs is handling the full creative direction and music marketing rollout." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-primary mb-6 uppercase tracking-[0.15em]", children: "Services delivered" }),
        /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-background/80", children: servicesDelivered.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "\u2014" }),
          /* @__PURE__ */ jsx("span", { children: s })
        ] }, s)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-primary/20 bg-[#111111] p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-medium tracking-[-0.03em] text-primary", children: m.v }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-background/70 mt-3 leading-snug", children: m.l })
      ] }, m.l)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-3xl border border-primary/30 bg-[#0d0d0d] p-8 flex flex-col md:flex-row items-baseline gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl md:text-6xl font-medium tracking-[-0.03em] text-primary", children: "74.6%" }),
        /* @__PURE__ */ jsx("div", { className: "text-base md:text-lg text-background/80", children: "Of views from non-followers" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance", children: [
        "Ready to build your ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "movement?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted mb-10", children: "Whether you're a solo artist, a collective, or the label behind the scenes \u2014 your music deserves a platform that works as hard as you do." }),
      /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Let's talk" })
    ] }) })
  ] });
}

export { FortyFourDBCaseStudy as component };
//# sourceMappingURL=work.44db-lMNAyvM4.mjs.map
