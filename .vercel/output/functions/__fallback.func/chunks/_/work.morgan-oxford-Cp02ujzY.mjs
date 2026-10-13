import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { GraduationCap, Database, Users, Globe, BarChart3, Network, ShieldCheck } from 'lucide-react';
import { S as Section, E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';

const websiteHero = "/assets/morgan-oxford-website-hero-D5lud1ah.png";
const websiteStats = "/assets/morgan-oxford-website-stats-BZXdI1hI.png";
const websiteFramework = "/assets/morgan-oxford-website-framework-3Gxm6FDh.png";
const websiteDestinations = "/assets/morgan-oxford-website-destinations-WbWVc7eC.png";
const crmWelcome = "/assets/morgan-oxford-crm-welcome-Cra-FULV.png";
const palette = [{
  name: "Slate Dark",
  hex: "#2A3347"
}, {
  name: "Steel Grey",
  hex: "#5B6E8A"
}, {
  name: "System Cyan",
  hex: "#00D9FF"
}, {
  name: "Cloud White",
  hex: "#F2F4F8"
}, {
  name: "Deep Navy",
  hex: "#1A2235"
}];
const solutions = [{
  icon: Database,
  title: "Custom CRM Architecture",
  desc: "Designed and built a fully bespoke CRM system tailored to the unique workflows of an international student recruitment agency \u2014 no off-the-shelf compromise."
}, {
  icon: Users,
  title: "Student Pipeline Management",
  desc: "End-to-end tracking of every student from initial enquiry through consultation, application, and final enrolment \u2014 with status visibility at every stage."
}, {
  icon: Globe,
  title: "Global University Placement Engine",
  desc: "Intelligent matching logic that aligns student profiles with university requirements across multiple countries and intake windows."
}, {
  icon: BarChart3,
  title: "Operations Dashboard",
  desc: "Real-time analytics covering recruitment conversion rates, counsellor workloads, and regional performance \u2014 giving leadership full operational visibility."
}, {
  icon: Network,
  title: "Automated Workflow System",
  desc: "Smart automations handle follow-up reminders, document checklists, and application deadlines \u2014 reducing manual overhead and human error significantly."
}, {
  icon: ShieldCheck,
  title: "Data Security & Compliance",
  desc: "GDPR-compliant data handling with role-based access controls, audit trails, and encrypted storage to protect sensitive student and university data."
}, {
  icon: Globe,
  title: "Website Revamp",
  desc: "A full rebuild of MorganOxford.com \u2014 a modern, fast, conversion-focused site that mirrors the consultancy's premium positioning and routes prospective students straight into the CRM pipeline."
}];
function MorganOxfordCaseStudy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "px-6 pt-32 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/work", className: "text-sm text-muted hover:text-primary", children: "\u2190 All work" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-28 h-32 rounded-3xl border border-border bg-surface/60 backdrop-blur flex items-center justify-center", children: /* @__PURE__ */ jsx(GraduationCap, { className: "w-12 h-12 text-primary", strokeWidth: 1.75 }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase", children: "Intelligent Systems \xB7 CRM" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance", children: [
        "Morgan Oxford ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Education" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed", children: "Bespoke CRM built to orchestrate global student recruitment at scale" })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "The brief" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance", children: [
        "International education deserves ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "intelligent infrastructure." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted leading-relaxed", children: "Morgan Oxford Education is a global consultancy guiding students from initial enquiry all the way to successful university enrolment across multiple countries. Their existing tooling \u2014 a patchwork of spreadsheets and generic CRMs \u2014 couldn't handle the complexity of multi-region student data, university placement logic, or counsellor workflows. They needed a system built entirely around their process, not the other way around." })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "System palette" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "Built for clarity, ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "built for scale." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: palette.map((c) => /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-3xl p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-2xl border border-border", style: {
          backgroundColor: c.hex
        } }),
        /* @__PURE__ */ jsxs("div", { className: "px-2 pt-4 pb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: c.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted mt-1 font-mono", children: c.hex })
        ] })
      ] }, c.hex)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mb-16", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "The solution" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance", children: [
          "A CRM that thinks ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "the way they work." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted leading-relaxed", children: "We developed a fully bespoke CRM system to streamline international student recruitment, university placement tracking, and academic consultancy workflows. The system optimises Morgan Oxford's global operations \u2014 managing complex student data from initial enquiry to successful enrolment." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: solutions.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-3xl p-8 border border-border", children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-primary mb-6", strokeWidth: 1.75 }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium tracking-tight mb-3", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: desc })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "The CRM" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "One workspace, ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "every student." })
      ] }),
      /* @__PURE__ */ jsxs("figure", { className: "bg-surface rounded-3xl p-4 border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "block aspect-video rounded-2xl overflow-hidden border border-border/40 bg-background", children: /* @__PURE__ */ jsx("img", { src: crmWelcome, alt: "Morgan Oxford CRM welcome screen \u2014 internal platform for authorised users.", loading: "lazy", className: "w-full h-full object-cover object-top" }) }),
        /* @__PURE__ */ jsx("figcaption", { className: "px-2 pt-4 pb-2 text-center text-sm font-medium", children: "Morgan Oxford CRM \u2014 Welcome" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "The website" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "A new front door for ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "global students." })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-website-mockup": true, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("figure", { className: "bg-surface rounded-3xl p-4 border border-border", children: [
          /* @__PURE__ */ jsx("a", { href: "https://moe-website-beta.vercel.app/", className: "block aspect-video rounded-2xl overflow-hidden border border-border/40 bg-muted hover:opacity-90 transition-opacity", children: /* @__PURE__ */ jsx("img", { src: websiteHero, alt: "Morgan Oxford website hero \u2014 Placed with purpose, supported all the way.", loading: "lazy", className: "w-full h-full object-cover object-top" }) }),
          /* @__PURE__ */ jsx("figcaption", { className: "px-2 pt-4 pb-2 text-center text-sm font-medium", children: "morganoxford.com \u2014 Hero" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [{
          src: websiteStats,
          alt: "Morgan Oxford proof points \u2014 2,000+ students placed, 13+ years of expertise, ICEF accredited, worldwide destinations served.",
          caption: "Proof points"
        }, {
          src: websiteFramework,
          alt: "Morgan Oxford service framework \u2014 school and university placement cards.",
          caption: "Service framework"
        }, {
          src: websiteDestinations,
          alt: "Morgan Oxford study destinations \u2014 United Kingdom, United States, Canada.",
          caption: "Study destinations"
        }].map((tile) => /* @__PURE__ */ jsxs("figure", { className: "bg-surface rounded-3xl p-4 border border-border", children: [
          /* @__PURE__ */ jsx("a", { href: "https://moe-website-beta.vercel.app/", className: "block aspect-video rounded-2xl overflow-hidden border border-border/40 bg-muted hover:opacity-90 transition-opacity", children: /* @__PURE__ */ jsx("img", { src: tile.src, alt: tile.alt, loading: "lazy", className: "w-full h-full object-cover object-top" }) }),
          /* @__PURE__ */ jsx("figcaption", { className: "px-2 pt-4 pb-2 text-center text-sm font-medium", children: tile.caption })
        ] }, tile.caption)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", { className: "bg-surface border border-border rounded-[2.5rem] p-10 md:p-14", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 md:divide-x md:divide-border", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:pr-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4", children: "Sector" }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight", children: "International Education Agency & Consultancy" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:px-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4", children: "Service Delivered" }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight", children: "Custom CRM System + Website Revamp" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:pl-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4", children: "Category" }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight", children: "Intelligent Systems" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted mb-8", children: "Need a custom intelligent system for your business?" }),
      /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Start Your Mission" })
    ] }) })
  ] });
}

export { MorganOxfordCaseStudy as component };
//# sourceMappingURL=work.morgan-oxford-Cp02ujzY.mjs.map
