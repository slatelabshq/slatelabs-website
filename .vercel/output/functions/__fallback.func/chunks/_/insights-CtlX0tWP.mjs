import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useLocation, Outlet } from '@tanstack/react-router';
import { S as Section } from './Section-C2DeNOgk.mjs';
import { I as InsightCard } from './InsightCard-BTv_3Prt.mjs';
import { P as PageHero } from './PageHero-CCrwiexh.mjs';
import { h as posts, c as workMorgan } from './router-Pw5mFUwk.mjs';
import './Reveal-Bc5rEVPq.mjs';
import 'react';
import './LagosTime-BkF40qTk.mjs';
import '@tanstack/react-query';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

function Insights() {
  const {
    pathname
  } = useLocation();
  const isIndex = pathname === "/insights" || pathname === "/insights/";
  if (!isIndex) return /* @__PURE__ */ jsx(Outlet, {});
  const sorted = [...posts].sort((a, b) => a.date < b.date ? 1 : -1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { section: "Insights", image: workMorgan, imageAlt: "Slate Labs studio work", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Field notes from a ",
      /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "clean slate." })
    ] }), description: "Essays on brand, growth, platforms, and systems \u2014 written by the team building them." }),
    /* @__PURE__ */ jsx(Section, { className: "!pt-12", children: sorted.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-muted", children: "No insights yet. Check back soon." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: sorted.map((p, i) => /* @__PURE__ */ jsx(InsightCard, { post: p, i }, p.slug)) }) })
  ] });
}

export { Insights as component };
//# sourceMappingURL=insights-CtlX0tWP.mjs.map
