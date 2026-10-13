import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';
import { R as Reveal } from './Reveal-Bc5rEVPq.mjs';
import { P as PageHero } from './PageHero-CCrwiexh.mjs';
import { P as PageCta } from './PageCta-CiwlBK_x.mjs';
import { b as workIleEko } from './router-Pw5mFUwk.mjs';
import '@tanstack/react-router';
import 'react';
import './LagosTime-BkF40qTk.mjs';
import './HomeCta--NmQgw9L.mjs';
import './calendly-ow3Yvb14.mjs';
import '@tanstack/react-query';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

const problems = ["Student records scattered across Excel sheets and paper files", "Teachers spending hours on manual grading and attendance", "Parents calling constantly for updates on their child's progress", "No easy way to track performance trends or generate reports", "Systems that don't talk to each other\u2014enrollment, academics, communication all separate"];
const benefits = [{
  title: "Save time",
  body: "Automate manual tasks so teachers can focus on teaching, not paperwork."
}, {
  title: "Stay organized",
  body: "All student data, grades, and communications in one secure place."
}, {
  title: "Better communication",
  body: "Parents get real-time updates on their child's progress."
}, {
  title: "Better decisions",
  body: "Track trends, spot struggling students early, measure what's working."
}];
const features = [{
  n: "01",
  title: "Student management",
  body: "Manage enrollments, track attendance, store records, and access everything in seconds."
}, {
  n: "02",
  title: "Lesson planning",
  body: "Plan lessons, upload materials, and align with curriculum standards."
}, {
  n: "03",
  title: "Grades & reporting",
  body: "Enter grades, calculate averages, generate report cards, and export transcripts."
}, {
  n: "04",
  title: "Parent communication",
  body: "Send updates, share progress reports, and communicate with parents directly."
}, {
  n: "05",
  title: "Analytics",
  body: "Track performance trends, identify at-risk students, and make data-driven decisions."
}, {
  n: "06",
  title: "Mobile access",
  body: "Teachers, parents, and admins access Ile Eko from any device."
}];
const screens = [{
  caption: "Student dashboard \u2014 grades, attendance, and records in one view"
}, {
  caption: "Grade management \u2014 enter marks, calculate averages, export reports"
}, {
  caption: "Parent communication \u2014 send updates and share reports directly"
}];
const steps = [{
  n: "01",
  title: "Onboarding",
  body: "We set up your school's account, migrate data, and configure the system."
}, {
  n: "02",
  title: "Training",
  body: "We train your staff with live sessions, video tutorials, and documentation."
}, {
  n: "03",
  title: "Implementation",
  body: "You go live. Students enrolled, teachers using the platform, parents get access."
}, {
  n: "04",
  title: "Ongoing support",
  body: "Support, updates, and new features as we continue improving the platform."
}];
const faqs = [{
  q: "How long does setup take?",
  a: "Typically 2\u20134 weeks from contract signing to launch, depending on your school's size and data migration needs."
}, {
  q: "Do you provide training?",
  a: "Yes. We train your staff through live sessions, video tutorials, and written documentation. Support continues after launch."
}, {
  q: "What support do you offer?",
  a: "Email support for all plans, priority support for Professional, dedicated support for Enterprise."
}, {
  q: "Can we customize Ile Eko?",
  a: "Professional plans offer configuration options. Enterprise plans can include custom features and integrations."
}, {
  q: "Is our data secure?",
  a: "Yes. We use industry-standard encryption, regular backups, and secure hosting."
}, {
  q: "What if we need to cancel?",
  a: "We offer flexible terms. You can export your data at any time."
}];
function IleEko() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { section: "Ile Eko \xB7 Product", image: workIleEko, imageAlt: "Ile Eko learning platform", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Modern learning management for",
      " ",
      /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "Nigerian schools." })
    ] }), description: "Bridge traditional learning with digital tools. Manage students, track grades, communicate with parents, and scale your school \u2014 all in one platform." }),
    /* @__PURE__ */ jsxs(Section, { className: "!pt-10 md:!pt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-wrap gap-3 mb-10 md:mb-12", children: [
        /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Book a demo" }),
        /* @__PURE__ */ jsx(CtaButton, { to: "/ile-eko", hash: "pricing", variant: "secondary", children: "See pricing" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-foreground text-background rounded-[2.5rem] p-10 md:p-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-sm text-primary mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
            "The problem"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "Does this sound familiar?" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-8", children: /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: problems.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-4 text-background/80 border-b border-background/10 pb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "\xD7" }),
          /* @__PURE__ */ jsx("span", { children: p })
        ] }, p)) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Meet Ile Eko" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-16 max-w-3xl", children: "A complete LMS designed specifically for Nigerian schools." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: benefits.map((b, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 80, className: "rounded-3xl bg-surface p-8 hover-lift", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium tracking-tight mb-3", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed text-sm", children: b.body })
      ] }, b.title)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Features" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-16", children: "Everything you need, one platform." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: features.map((f, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i % 3 * 80, className: "rounded-3xl bg-surface p-8 hover-lift", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-primary mb-4", children: f.n }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium tracking-tight mb-3", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed text-sm", children: f.body })
      ] }, f.n)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "See it in action" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-16", children: "A look inside the platform." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: screens.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-surface border border-border overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-gradient-to-br from-background to-surface flex items-center justify-center border-b border-border", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-[0.15em] text-muted", children: "Screenshot coming soon" }) }),
        /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted leading-relaxed", children: s.caption }) })
      ] }) }, s.caption)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "How it works" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-16", children: "Simple setup, seamless implementation." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: steps.map((s, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 80, className: "rounded-3xl bg-surface p-8 hover-lift", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-primary mb-4", children: s.n }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium tracking-tight mb-3", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed text-sm", children: s.body })
      ] }, s.n)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { id: "pricing", className: "scroll-mt-24 bg-surface rounded-[2.5rem] p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Pricing" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight mb-4", children: "Pricing built for Nigerian schools." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-10 max-w-xl mx-auto", children: "Plans are structured per academic term and scale with your school's size. Book a demo and we'll walk you through the right plan for you." }),
      /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Book a demo" })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-medium tracking-tight", children: "Common questions." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-8 space-y-3", children: faqs.map((f) => /* @__PURE__ */ jsxs("details", { className: "group rounded-2xl bg-surface px-6 py-5", children: [
        /* @__PURE__ */ jsxs("summary", { className: "cursor-pointer list-none flex justify-between items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-base font-medium", children: f.q }),
          /* @__PURE__ */ jsx("span", { className: "text-primary text-xl transition-transform group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted leading-relaxed", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsx(PageCta, {})
  ] });
}

export { IleEko as component };
//# sourceMappingURL=ile-eko-CUVSiF9v.mjs.map
