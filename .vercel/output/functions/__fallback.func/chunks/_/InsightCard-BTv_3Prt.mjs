import { jsx, jsxs } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { R as Reveal } from './Reveal-Bc5rEVPq.mjs';
import { d as formatPostDate } from './router-Pw5mFUwk.mjs';

function InsightCard({ post, i = 0 }) {
  return /* @__PURE__ */ jsx(Reveal, { delay: i * 90, children: /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/insights/$slug",
      params: { slug: post.slug },
      className: "group block h-full border-t border-border pt-8 hover:border-foreground/20 transition-colors",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-[16/10] w-full rounded-sm overflow-hidden mb-6 relative bg-gradient-to-br from-primary/25 via-background to-foreground/10", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: post.cover,
              alt: post.coverAlt,
              className: "w-full h-full object-cover img-zoom",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur-sm font-mono text-[10px] uppercase tracking-[0.16em] text-ink-foreground", children: post.tag })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-3", children: [
          /* @__PURE__ */ jsx("span", { children: formatPostDate(post.date) }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "\xB7" }),
          /* @__PURE__ */ jsxs("span", { children: [
            post.readMinutes,
            " min"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-primary transition-colors", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed text-sm mb-6", children: post.excerpt }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground group-hover:text-primary", children: "Read insight \u2192" })
      ]
    }
  ) });
}

export { InsightCard as I };
//# sourceMappingURL=InsightCard-BTv_3Prt.mjs.map
