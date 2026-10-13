import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';
import { a as workVidaRosa } from './router-Pw5mFUwk.mjs';
import '@tanstack/react-query';
import 'react';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

const whatWeBring = [{
  title: "Luxury Content Strategy",
  body: "Content designed for an audience that can immediately recognise quality \u2014 or the absence of it."
}, {
  title: "Paid Advertising",
  body: "Precision-targeted Meta and digital ad campaigns built to reach Lagos HNW individuals. Paid ads are the primary performance lever here \u2014 not an afterthought."
}, {
  title: "Creative Direction",
  body: "Visual standards, shot direction, and asset production aligned to the premium tier that Vida Rosa occupies."
}, {
  title: "Audience & Brand Positioning",
  body: "Repositioning the dealership's digital presence to attract the buyer who buys a Cybertruck because they want to, not because they need to."
}];
function VidaRosa() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "px-6 pt-32 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/work", className: "text-sm text-muted hover:text-primary", children: "\u2190 All work" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:ml-8 ml-4", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase", children: "Featured Engagement" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance", children: "Vida Rosa" }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed", children: "Luxury automotive marketing for one of Lagos's most exclusive dealerships." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] overflow-hidden rounded-[2.5rem]", children: /* @__PURE__ */ jsx("img", { src: workVidaRosa, alt: "Vida Rosa", width: 1280, height: 720, className: "w-full h-full object-cover" }) }) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "The Client" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight leading-tight", children: [
          "They don't sell cars. They sell the ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "lifestyle" }),
          " of people who drive a certain kind of car."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-6 text-lg text-muted leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "Vida Rosa is not a regular dealership. You will scarcely find budget options here. You will find Mercedes-Benz. Range Rovers. Lexus. Tesla. Cybertruck. The vehicles that signal something about the person before they've said a word." }),
        /* @__PURE__ */ jsx("p", { children: "Their clientele are not impulsive buyers. They are Lagos's executive class \u2014 the business owners, the decision-makers, the people with money to spend and the discernment to spend it well. Reaching them requires a different approach entirely." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "The Brief" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight leading-tight", children: [
          "Marketing to the 1% requires more than content. It requires ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "positioning." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-6 text-lg text-muted leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "Most social media strategies are built for volume \u2014 broad reach, high frequency, mass appeal. That strategy does not work for a brand selling Brabus Mercedes to Lagos's elite. The wrong content in front of the wrong audience does more damage than silence." }),
        /* @__PURE__ */ jsx("p", { children: "The brief for Vida Rosa was to build a marketing engine \u2014 organic and paid \u2014 that reaches high-net-worth individuals with content and advertising that speaks their language. Premium aesthetics. Aspirational framing. Precision targeting. Zero noise." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "What We Bring" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-12", children: [
        "Paid. Organic. Creative. ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "All aligned." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: whatWeBring.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-surface p-8 border border-border", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium tracking-tight mb-3", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: s.body })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", { className: "bg-foreground text-background rounded-[2.5rem] p-10 md:p-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-xs text-primary mb-6 uppercase tracking-[0.15em]", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
          "The Engagement"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "An ongoing partnership built for precision." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-6 text-lg text-background/70 leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "The Vida Rosa engagement is active and ongoing. We don't come in with generic strategies and templated posts. We come in as the marketing team for a luxury brand \u2014 with everything that entails." }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-background font-medium tracking-tight", children: "This is luxury marketing. The kind that moves the right audience, not the biggest one." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance", children: [
        "Working with a ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "premium brand?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted mb-10", children: "If your product or service belongs to a certain tier \u2014 your marketing needs to match. Let's talk." }),
      /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Start the conversation" })
    ] }) })
  ] });
}

export { VidaRosa as component };
//# sourceMappingURL=work.vida-rosa-D6srpm-4.mjs.map
