import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';
import { R as Reveal } from './Reveal-Bc5rEVPq.mjs';
import { P as PageHero } from './PageHero-CCrwiexh.mjs';
import { P as PageCta } from './PageCta-CiwlBK_x.mjs';
import { C as CALENDLY_URL } from './calendly-ow3Yvb14.mjs';
import { a as workVidaRosa, c as workMorgan, b as workIleEko, i as work44db } from './router-Pw5mFUwk.mjs';
import 'react';
import './LagosTime-BkF40qTk.mjs';
import './HomeCta--NmQgw9L.mjs';
import '@tanstack/react-query';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

const practiceImages = {
  "brand-strategy": work44db,
  "growth-marketing": workVidaRosa,
  "digital-platforms": workIleEko,
  "intelligent-systems": workMorgan
};
const practices = [{
  id: "brand-strategy",
  n: "01",
  title: "Brand Strategy",
  lead: ["Most brands in Lagos have a logo. Few have a story. Fewer still have both working together across every surface \u2014 digital, physical, and cultural. Brand strategy is the difference between looking good and meaning something."],
  includes: ["Brand positioning & competitive strategy", "Naming & messaging architecture", "Visual identity (logo, colour, typography, motion)", "Brand guidelines & asset library", "Content strategy & voice development"],
  example: "44DB went from an underground producer collective with under 1,000 monthly views to the brand behind Nigeria's #1 rap song \u2014 with a visual identity and a content system built to match their cultural weight.",
  caseStudy: {
    label: "See case study",
    href: "/work/44db"
  }
}, {
  id: "growth-marketing",
  n: "02",
  title: "Growth Marketing",
  lead: ["Content is a commodity. Strategy is rare. We manage social media, run paid campaigns, and execute music marketing for artists and collectives who want real traction \u2014 not just follower counts.", "Whether you're selling luxury cars to Lagos's top 1%, launching a product or record to the streets, or building an audience from zero \u2014 growth looks different for every client. We plan, execute, and measure accordingly."],
  includes: ["Social media management (strategy + execution)", "Paid advertising (Meta, Google, TikTok)", "Music marketing & campaign rollouts", "Influencer strategy & partnerships", "Analytics, reporting, and optimisation", "Content production (photo, video, graphics)"],
  example: "In May 2026, we collaborated on the digital rollout for 'Chanel' by Blaqbonez ft. Asake \u2014 produced by Johnson IP of 44DB. 300,000+ organic views, 6,000,000 streams on Spotify in 7 days. The song became Nigeria's #1 rap record.",
  caseStudy: {
    label: "See case study",
    href: "/work/44db"
  }
}, {
  id: "digital-platforms",
  n: "03",
  title: "Digital Platforms",
  lead: ["A website should do more than exist. A platform should do more than function. We build custom digital products \u2014 from marketing websites to full SaaS applications \u2014 that solve specific problems and scale as your business grows.", "Every platform we build starts with one question: what does this need to do that no off-the-shelf tool can do? The answer becomes your competitive advantage."],
  includes: ["Websites & landing pages", "Web applications & dashboards", "SaaS products (end-to-end)", "E-commerce platforms", "API design & infrastructure", "CRM & internal tools"],
  example: "We built a new website for Morgan Oxford Education that showcases the work they do. Live and in use by their full team.",
  caseStudy: {
    label: "See case study",
    href: "/work/morgan-oxford"
  }
}, {
  id: "intelligent-systems",
  n: "04",
  title: "Intelligent Systems",
  lead: ["Most businesses are running on manual. Data entry that takes hours. Customer enquiries that pile up. Reports that someone spends a Friday building. Decisions made on gut when they should be made on numbers.", "We find the 8 to 20 hours your team is losing every week and build systems that handle it. AI automation, workflow design, and intelligent infrastructure \u2014 not as a novelty, but as a business tool."],
  includes: ["AI chatbots & customer support agents", "Workflow automation (across any tool stack)", "Internal dashboards & reporting tools", "Data pipelines & analytics infrastructure", "Custom AI agents for operations, sales, or content", "System integration (connect your existing tools)"],
  example: "We rebuilt the operational infrastructure for Morgan Oxford Education \u2014 consolidating fragmented manual processes into one integrated system. Result: 8+ hours saved per staff member per week.",
  caseStudy: {
    label: "See case study",
    href: "/work/morgan-oxford"
  }
}];
const comparison = [{
  row: "Practices",
  slate: "Brand + Marketing + Platform + Systems",
  trad: "One or two",
  free: "One at a time",
  inhouse: "Depends on headcount"
}, {
  row: "Approach",
  slate: "Clean-slate, tailored",
  trad: "Templated process",
  free: "Inconsistent",
  inhouse: "Internal politics"
}, {
  row: "Skills",
  slate: "Creative + Technical",
  trad: "One or the other",
  free: "Varies by person",
  inhouse: "Depends on hires"
}, {
  row: "Integration",
  slate: "Brand + platform together",
  trad: "Fragmented vendors",
  free: "You manage it",
  inhouse: "Cross-team coordination"
}, {
  row: "Access",
  slate: "Direct to founders",
  trad: "Account managers",
  free: "Maybe",
  inhouse: "Your own team"
}];
const faqs = [{
  q: "How long does a project take?",
  a: "It depends on scope. A brand foundation typically takes 4\u20138 weeks. A digital platform is 8\u201316+ weeks. We'll give you a clear timeline after the discovery call."
}, {
  q: "Do you work with clients outside Nigeria?",
  a: "Yes. We're based in Lagos but partner with founders and teams globally."
}, {
  q: "Can you handle just one part of a project?",
  a: "Of course. We're built for integrated work, but we'll happily take on a single brand engagement, a website, or an automation project."
}, {
  q: "How much do you charge?",
  a: "Every project is scoped individually. Brand strategy and identity projects typically start from \u20A6500,000. Digital platforms from \u20A61.5M. Growth marketing retainers from \u20A6300,000/month. We'll give you a detailed quote after a discovery call \u2014 no commitment required."
}];
function Services() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { section: "Services", image: workVidaRosa, imageAlt: "Vida Rosa luxury automotive marketing", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Four practices. One team. Everything you need to",
      " ",
      /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "build and grow." })
    ] }), description: "Brand strategy and growth marketing. Digital platforms and intelligent systems. You work with the people who built this \u2014 not a handoff chain." }),
    practices.map((s, idx) => /* @__PURE__ */ jsx(Section, { className: idx === 0 ? "!pt-12" : "", children: /* @__PURE__ */ jsxs("div", { id: s.id, className: "scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-5 lg:sticky lg:top-28", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-sm aspect-[4/5] bg-surface mb-8 lg:mb-0", children: /* @__PURE__ */ jsx("img", { src: practiceImages[s.id], alt: "", className: "h-full w-full object-cover" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-10", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4", children: s.n }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl tracking-[-0.03em] mb-6", children: s.title }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 text-muted leading-relaxed", children: s.lead.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-primary mb-4 uppercase tracking-[0.15em]", children: "What's included" }),
            /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: s.includes.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "\u2014" }),
              /* @__PURE__ */ jsx("span", { children: i })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-border", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted mb-3 uppercase tracking-[0.15em]", children: "Example outcome" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", children: s.example }),
            /* @__PURE__ */ jsxs(Link, { to: s.caseStudy.href, className: "mt-4 inline-block text-sm font-medium hover:text-primary", children: [
              s.caseStudy.label,
              " \u2192"
            ] })
          ] })
        ] })
      ] })
    ] }) }, s.id)),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "Compare" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl tracking-tight mb-12", children: "Why choose Slate Labs." }),
      /* @__PURE__ */ jsx("div", { className: "rounded-sm border border-border overflow-x-auto", children: /* @__PURE__ */ jsxs("div", { className: "min-w-[720px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 bg-ink text-ink-foreground text-xs font-medium", children: [
          /* @__PURE__ */ jsx("div", { className: "p-5" }),
          /* @__PURE__ */ jsx("div", { className: "p-5 text-primary", children: "Slate Labs" }),
          /* @__PURE__ */ jsx("div", { className: "p-5", children: "Traditional Agencies" }),
          /* @__PURE__ */ jsx("div", { className: "p-5", children: "Freelancers" }),
          /* @__PURE__ */ jsx("div", { className: "p-5", children: "In-house" })
        ] }),
        comparison.map((c, i) => /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-5 text-sm ${i > 0 ? "border-t border-border" : ""}`, children: [
          /* @__PURE__ */ jsx("div", { className: "p-5 font-medium", children: c.row }),
          /* @__PURE__ */ jsx("div", { className: "p-5", children: c.slate }),
          /* @__PURE__ */ jsx("div", { className: "p-5 text-muted", children: c.trad }),
          /* @__PURE__ */ jsx("div", { className: "p-5 text-muted", children: c.free }),
          /* @__PURE__ */ jsx("div", { className: "p-5 text-muted", children: c.inhouse })
        ] }, c.row))
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "Frequently asked questions." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-8 space-y-3", children: faqs.map((f) => /* @__PURE__ */ jsxs("details", { className: "group rounded-2xl bg-surface px-6 py-5", children: [
        /* @__PURE__ */ jsxs("summary", { className: "cursor-pointer list-none flex justify-between items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-base font-medium", children: f.q }),
          /* @__PURE__ */ jsx("span", { className: "text-primary text-xl transition-transform group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted leading-relaxed", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-6", children: "Next step" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Book a consultation" }),
        /* @__PURE__ */ jsx(CtaButton, { href: CALENDLY_URL, external: true, variant: "secondary", children: "Book a 20-min call" }),
        /* @__PURE__ */ jsx(CtaButton, { to: "/work", variant: "secondary", children: "See our work" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(PageCta, {})
  ] });
}

export { Services as component };
//# sourceMappingURL=services-CSWlC02O.mjs.map
