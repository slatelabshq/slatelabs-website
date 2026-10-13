import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { R as Reveal } from './Reveal-Bc5rEVPq.mjs';
import { P as PageCta } from './PageCta-CiwlBK_x.mjs';
import { k as Route$b, p as projects } from './router-Pw5mFUwk.mjs';
import 'react';
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

function CaseStudy() {
  const {
    project
  } = Route$b.useLoaderData();
  const d = project.detail;
  const others = projects.filter((p) => p.slug !== project.slug);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "relative isolate min-h-[72vh] flex flex-col justify-end overflow-hidden bg-ink text-ink-foreground -mt-px", children: [
      /* @__PURE__ */ jsx("img", { src: project.image, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" }),
      /* @__PURE__ */ jsx("div", { className: "grain-overlay absolute inset-0 opacity-30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-[90rem] mx-auto w-full px-6 lg:px-10 pt-[7.5rem] pb-12 md:pb-16", children: [
        /* @__PURE__ */ jsx(Link, { to: "/work", className: "font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/60 hover:text-primary", children: "\u2190 All work" }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-primary", children: project.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.04em] max-w-4xl text-balance", children: project.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-ink-foreground/70 leading-relaxed", children: project.oneLiner })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "!pt-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "border border-border rounded-sm p-8 md:p-10", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Quick facts" }),
        /* @__PURE__ */ jsxs("dl", { className: "space-y-4 text-base", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-border pb-3", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted", children: "Client" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: project.client })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-border pb-3", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted", children: "Industry" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: d.industry })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-border pb-3", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted", children: "Date" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: d.date })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 pb-3", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted", children: "Services" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: d.services.join(" \xB7 ") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 90, className: "border border-border rounded-sm p-8 md:p-10", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Key results" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: d.metrics.map((m) => /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-4 first:border-0 first:pt-0", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: m.value }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted mt-1", children: m.label })
        ] }, m.label)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "The challenge" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "The problem." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-8 text-lg text-muted leading-relaxed", children: d.challenge })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Our solution" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "What we built." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-8 space-y-8", children: d.solution.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-surface p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium tracking-tight mb-3", children: s.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: s.body })
      ] }, s.heading)) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "bg-ink text-ink-foreground rounded-sm p-10 md:p-20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "grain-overlay absolute inset-0 opacity-25" }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-sm text-primary mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
            "The impact"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "The results." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-medium leading-snug tracking-tight", children: d.results }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: d.numbers.map((n) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-ink-foreground/80", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "\u2192" }),
            /* @__PURE__ */ jsx("span", { children: n })
          ] }, n)) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Deliverables" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-12", children: "What we created." }),
      /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: d.deliverables.map((dv) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 rounded-2xl bg-surface p-5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "\u2014" }),
        /* @__PURE__ */ jsx("span", { children: dv })
      ] }, dv)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Explore more projects" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: others.map((p) => /* @__PURE__ */ jsxs(Link, { to: p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug", params: {
        slug: p.slug
      }, className: "group block", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-sm mb-6", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.client, loading: "lazy", width: 1280, height: 960, className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted mt-2", children: p.oneLiner })
      ] }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsx(PageCta, {})
  ] });
}

export { CaseStudy as component };
//# sourceMappingURL=work._slug-DzSTyiaJ.mjs.map
