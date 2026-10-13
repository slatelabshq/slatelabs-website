import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { P as PageCta } from './PageCta-CiwlBK_x.mjs';
import { I as InsightCard } from './InsightCard-BTv_3Prt.mjs';
import { R as Route$c, d as formatPostDate } from './router-Pw5mFUwk.mjs';
import './HomeCta--NmQgw9L.mjs';
import './CtaButton-oIy5JhBR.mjs';
import 'react';
import './calendly-ow3Yvb14.mjs';
import './Reveal-Bc5rEVPq.mjs';
import '@tanstack/react-query';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

function Prose({ blocks }) {
  return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: blocks.map((b, i) => {
    switch (b.type) {
      case "h2":
        return /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-medium tracking-tight mt-12 mb-2 text-foreground", children: b.text }, i);
      case "p":
        return /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-muted", children: b.text }, i);
      case "quote":
        return /* @__PURE__ */ jsxs(
          "blockquote",
          {
            className: "border-l-4 border-primary pl-6 my-10 text-xl md:text-2xl font-medium leading-snug tracking-tight text-foreground",
            children: [
              '"',
              b.text,
              '"',
              b.cite && /* @__PURE__ */ jsxs("cite", { className: "block mt-3 text-sm font-normal text-muted not-italic", children: [
                "\u2014 ",
                b.cite
              ] })
            ]
          },
          i
        );
      case "ul":
        return /* @__PURE__ */ jsx("ul", { className: "space-y-3 pl-5 list-disc marker:text-primary text-lg text-muted leading-relaxed", children: b.items.map((item, j) => /* @__PURE__ */ jsx("li", { children: item }, j)) }, i);
      default:
        return null;
    }
  }) });
}
function InsightDetail() {
  const {
    post,
    related
  } = Route$c.useLoaderData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "relative isolate overflow-hidden bg-ink text-ink-foreground -mt-px pt-[7.5rem] pb-14 md:pb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "grain-overlay absolute inset-0 opacity-30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/insights", className: "font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/55 hover:text-primary inline-flex items-center gap-2 mb-10", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "\u2190" }),
          " All insights"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-foreground/55", children: [
          /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-ink-foreground", children: post.tag }),
          /* @__PURE__ */ jsx("span", { children: formatPostDate(post.date) }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "\xB7" }),
          /* @__PURE__ */ jsxs("span", { children: [
            post.readMinutes,
            " min read"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] mb-8 text-balance", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-ink-foreground/65 leading-relaxed mb-10", children: post.excerpt }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-6 border-t border-white/10", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium tracking-tight", children: post.author.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: post.author.name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-ink-foreground/55", children: post.author.role })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "!pt-10 md:!pt-12", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto rounded-sm overflow-hidden aspect-[16/9] bg-surface mb-10 md:mb-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)]", children: /* @__PURE__ */ jsx("img", { src: post.cover, alt: post.coverAlt, width: 1600, height: 900, loading: "eager", fetchPriority: "high", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(Prose, { blocks: post.body }) })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "More insights" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-12", children: "Keep reading." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: related.map((p, i) => /* @__PURE__ */ jsx(InsightCard, { post: p, i }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsx(PageCta, {})
  ] });
}

export { InsightDetail as component };
//# sourceMappingURL=insights._slug-SgU5yWLT.mjs.map
