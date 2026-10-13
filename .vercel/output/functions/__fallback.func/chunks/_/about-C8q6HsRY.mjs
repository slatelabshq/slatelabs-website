import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { S as Section } from './Section-C2DeNOgk.mjs';
import { R as Reveal } from './Reveal-Bc5rEVPq.mjs';
import { P as PageHero } from './PageHero-CCrwiexh.mjs';
import { P as PageCta } from './PageCta-CiwlBK_x.mjs';
import { l as logoWordmark } from './router-Pw5mFUwk.mjs';
import 'react';
import './LagosTime-BkF40qTk.mjs';
import './HomeCta--NmQgw9L.mjs';
import './CtaButton-oIy5JhBR.mjs';
import '@tanstack/react-router';
import './calendly-ow3Yvb14.mjs';
import '@tanstack/react-query';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

const quotes = [
  {
    quote: "They didn't just manage our socials \u2014 they rebuilt how the world sees us. The month BREAKTIME dropped, we stopped feeling like a collective and started feeling like a movement.",
    name: "44DB",
    role: "Production Collective",
    company: "Lagos"
  },
  {
    quote: "The CRM Slate Labs built fits how we actually work. New advisors are productive in under two weeks and I finally have visibility across every programme.",
    name: "Morgan Oxford Education",
    role: "Leadership",
    company: "Lagos"
  },
  {
    quote: "Working with Slate Labs feels less like hiring an agency and more like adding a brand and tech team to our own. Strategy, creative, and engineering \u2014 one conversation.",
    name: "Vida Rosa",
    role: "Luxury Automotive",
    company: "Lagos"
  }
];
function Testimonials({ heading = "What clients say." }) {
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "Testimonials" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl tracking-tight mb-10 max-w-2xl", children: heading }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-border", children: quotes.map((q, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 90, className: "bg-background p-8 md:p-10 flex flex-col border border-transparent hover:border-border transition-colors", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-primary/60 mb-6", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5A1.67 1.67 0 0 1 17.17 9.5V6Z" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed mb-8 flex-1", children: q.quote }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium tracking-tight", children: q.name }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted mt-1", children: [
          q.role,
          " \xB7 ",
          q.company
        ] })
      ] })
    ] }, q.name)) })
  ] });
}
const founders = [{
  name: "Joseph Awujoola-Kalohun",
  role: "Co-Founder & CEO",
  bio: "Joseph leads strategy and creative direction \u2014 translating client goals into brand systems, campaigns, and digital presence that move markets. As CEO, he steers Slate Labs's vision and client relationships from the front.",
  photo: "/about/Joseph.jpg"
}, {
  name: "Olasukanmi Adeyeye (SK)",
  role: "Co-Founder & CTO",
  bio: "SK architects the platforms. From SaaS products to custom CRMs and intelligent systems, he turns ambitious technical briefs into working products. As CTO, he leads the entire engineering and systems practice.",
  photo: "/about/SK.jpg"
}];
const team = [{
  name: "Adeola Titilola",
  role: "COO & Content Strategist",
  bio: "Adeola keeps Slate Labs running day to day while developing content strategy across client accounts \u2014 editorial frameworks and copy that give brands a consistent voice.",
  photo: "/about/Adeola.jpg"
}, {
  name: "Michael Ikehi",
  role: "Full-Stack, AI/ML & Mobile Developer",
  bio: "Michael builds full-stack web, mobile, and AI/ML systems \u2014 shipping features, fixing bugs, and keeping client platforms at the standard they launched with.",
  photo: "/about/Michael.jpg"
}, {
  name: "David Francis",
  role: "Graphic Designer & UI/UX",
  bio: "David shapes how Slate Labs and our clients look and feel \u2014 from brand visuals and marketing assets to interfaces that are clear, polished, and on-brand.",
  photo: "/about/David.jpg"
}, {
  name: "Jael Chinwe",
  role: "Brand & Social Strategist",
  bio: "Jael manages day-to-day social presence for Slate Labs's clients \u2014 from content scheduling to community engagement and performance tracking.",
  photo: "/about/Jael.jpg"
}, {
  name: "Elizabeth Enoch",
  role: "Partnerships & Growth Lead",
  bio: "Elizabeth owns the client pipeline \u2014 prospecting, outreach, and business development that keeps Slate Labs growing and finding the right clients.",
  photo: "/about/elizabeth.jpg"
}];
const philosophy = [{
  title: "No quick fixes",
  body: "Real solutions take time. We don't patch over problems\u2014we rebuild from the ground up."
}, {
  title: "Tailored, not templated",
  body: "Every business is different. We build custom strategies, platforms, and content designed for your goals."
}, {
  title: "Creative + technical, always",
  body: "Great businesses are built on vision, strategy, and execution working together\u2014under one roof."
}];
const process = [{
  n: "01",
  title: "Listen",
  body: "We start by understanding your story, your challenges, and what's not working."
}, {
  n: "02",
  title: "Strategize",
  body: "We map a tailored plan\u2014brand, platform, systems\u2014pointed at your specific goals."
}, {
  n: "03",
  title: "Build",
  body: "Our creative and technical teams build in sync, with you in the loop the whole way."
}, {
  n: "04",
  title: "Launch & grow",
  body: "We don't disappear after launch. We measure, iterate, and keep growing with you."
}];
function MemberCard({
  m,
  i
}) {
  return /* @__PURE__ */ jsxs(Reveal, { delay: i * 90, className: "group", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface mb-6", children: m.photo ? /* @__PURE__ */ jsx("img", { src: m.photo, alt: m.name, className: "w-full h-full object-cover img-zoom", loading: "lazy" }) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-ink text-ink-foreground", children: /* @__PURE__ */ jsx("span", { className: "font-display text-6xl italic text-primary/80", children: m.initials }) }) }),
    /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2", children: String(i + 1).padStart(2, "0") }),
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium tracking-tight mb-1", children: m.name }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted mb-4", children: m.role }),
    /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed text-sm", children: m.bio })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { section: "About", image: logoWordmark, imageAlt: "Slate Labs", imageMode: "logo", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "We're ",
      /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "Slate Labs." })
    ] }), description: "A Lagos-based creative & tech agency. Brand, growth, platforms, and intelligent systems \u2014 under one roof." }),
    /* @__PURE__ */ jsx(Section, { className: "!pt-10 md:!pt-12", children: /* @__PURE__ */ jsxs(Reveal, { className: "max-w-[90rem] mx-auto border-t border-border pt-8 md:pt-10", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-6", children: "Our mission" }),
      /* @__PURE__ */ jsx("p", { className: "font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.03em] max-w-4xl", children: "To give businesses a clean slate \u2014 a fresh start to rebuild their brand, rethink their platforms, and reimagine their growth." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "Our story" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl tracking-tight", children: "How Slate Labs began." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-6 text-muted text-lg leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "Slate Labs didn't start as an agency. It started as a realization." }),
        /* @__PURE__ */ jsx("p", { children: "We'd been working in marketing and social media, building brands and seeing real results. But clients needed more than great content\u2014they needed cohesive branding, functional websites, scalable systems\u2014everything working together. Most agencies couldn't offer that." }),
        /* @__PURE__ */ jsx("p", { children: "Meanwhile, SK was building on the technical side\u2014developing platforms and SaaS products. Clients kept coming to him for websites with no brand strategy, no clear positioning, no content plan." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground", children: "That's when we realized: we needed each other." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "The team" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl tracking-tight mb-10", children: "The founders." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: founders.map((m, i) => /* @__PURE__ */ jsx(MemberCard, { m, i }, m.name)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "The team" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl tracking-tight mb-10", children: "Meet the rest of the studio." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: team.map((m, i) => /* @__PURE__ */ jsx(MemberCard, { m, i }, m.name)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "How we work" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl tracking-tight mb-10", children: "Our process." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-px bg-border", children: process.map((p, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 80, className: "bg-background p-8 md:p-10", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4", children: p.n }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium tracking-tight mb-3", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed text-sm", children: p.body })
      ] }, p.n)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "bg-ink text-ink-foreground rounded-sm p-10 md:p-20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "grain-overlay absolute inset-0 opacity-25" }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-xs text-primary mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
            "What we believe"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "Our philosophy." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-8 space-y-10", children: philosophy.map((p) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium tracking-tight mb-2", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "text-ink-foreground/70 leading-relaxed", children: p.body })
        ] }, p.title)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-8", children: "As seen in" }),
      /* @__PURE__ */ jsxs("a", { href: "https://refinedng.com/lagos-hustle-diaries-from-poetry-to-marketing-with-joseph-awujoola-kalohun/", target: "_blank", rel: "noopener noreferrer", className: "block rounded-3xl bg-surface p-8 md:p-10 border-l-4 hover:bg-surface/80 transition-colors group", style: {
        borderLeftColor: "#00D9FF"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-primary", children: "RefinedNG" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted", children: "February 6, 2026" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-medium tracking-tight mb-4 group-hover:text-primary transition-colors", children: "Lagos Hustle Diaries: From Poetry to Marketing with Joseph Awujoola-Kalohun" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed mb-6", children: '"Building a place where creative excellence meets technical precision \u2014 where the person managing your socials understands your data, and the person building your website understands your story."' }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium group-hover:text-primary", children: "Read the full feature \u2192" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Testimonials, { heading: "What it's like to work with us." }),
    /* @__PURE__ */ jsx(PageCta, {})
  ] });
}

export { About as component };
//# sourceMappingURL=about-C8q6HsRY.mjs.map
