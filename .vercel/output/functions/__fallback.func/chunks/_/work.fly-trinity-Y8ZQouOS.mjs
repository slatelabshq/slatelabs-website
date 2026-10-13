import { jsxs, jsx } from 'react/jsx-runtime';
import { o as project$2 } from './router-Pw5mFUwk.mjs';
import { Link } from '@tanstack/react-router';
import { Plane, Palette, Type, LayoutTemplate, Image } from 'lucide-react';
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

const flyTrinityBusinessCard = "/assets/fly-trinity-business-card-BNnuhWEn.png";
const flyTrinitySocial = "/assets/fly-trinity-social-Dm0So14J.jpg";
const palette = [{
  name: "Deep Purple",
  hex: "#3C096C"
}, {
  name: "Lavender",
  hex: "#DAB6FC"
}, {
  name: "Off-White",
  hex: "#F4F4F2"
}, {
  name: "Royal Violet",
  hex: "#5A189A"
}, {
  name: "Orchid",
  hex: "#9D4EDD"
}];
const deliverables = [{
  icon: Palette,
  title: "Brand Identity",
  desc: "Complete color palette and brand guidelines defining the visual language of Fly Trinity."
}, {
  icon: Type,
  title: "Typography System",
  desc: "Custom type hierarchy pairing elegant display fonts with functional body text."
}, {
  icon: LayoutTemplate,
  title: "Collateral Design",
  desc: "Boarding passes, signage, uniforms, and in-flight materials all on-brand."
}, {
  icon: Image,
  title: "Digital Presence",
  desc: "Website, app UI, and social media templates designed for seamless brand consistency."
}];
const designs = [{
  label: "Staff ID Card",
  kind: "gradient",
  gradient: "linear-gradient(135deg, #3C096C 0%, #5A189A 60%, #9D4EDD 100%)"
}, {
  label: "Social Media",
  kind: "image",
  src: flyTrinitySocial
}, {
  label: "Business Card",
  kind: "image",
  src: flyTrinityBusinessCard
}];
const purpleScope = {
  // @ts-expect-error - CSS custom properties
  "--primary": "#5A189A",
  "--primary-foreground": "#FFFFFF",
  "--primary-glow": "#9D4EDD"
};
function FlyTrinityCaseStudy() {
  return /* @__PURE__ */ jsxs("div", { style: purpleScope, children: [
    /* @__PURE__ */ jsx("header", { className: "px-6 pt-32 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/work", className: "text-sm text-muted hover:text-primary", children: "\u2190 All work" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-3xl border border-border flex items-center justify-center", style: {
        background: "linear-gradient(135deg, #DAB6FC22, #9D4EDD15)"
      }, children: /* @__PURE__ */ jsx(Plane, { className: "w-14 h-14 text-primary", strokeWidth: 1.5 }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase", children: "Brand Foundations \xB7 Airline" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance", children: [
        "Fly Trinity ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Airways" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed", children: "Crafting a premium airline brand identity from ground to sky" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] overflow-hidden rounded-[2.5rem]", children: /* @__PURE__ */ jsx("img", { src: project$2.image, alt: project$2.client, width: 1280, height: 720, className: "w-full h-full object-cover" }) }) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "The brief" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance", children: [
        "Elevating air travel ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "through identity." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted leading-relaxed", children: "Fly Trinity needed a brand that felt as premium as its service \u2014 modern yet timeless, bold yet refined. We built an identity system spanning every passenger touchpoint, from the moment they book a flight to the second they land." })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Color palette" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "The colours ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "of flight." })
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
      /* @__PURE__ */ jsx(Eyebrow, { children: "The work" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "What we ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "delivered." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: deliverables.map(({
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
      /* @__PURE__ */ jsx(Eyebrow, { children: "The designs" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "Bringing the brand ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "to life." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: designs.map((d) => /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-3xl p-4 border border-border", children: [
        d.kind === "image" ? /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: d.src, alt: d.label, loading: "lazy", width: 800, height: 1e3, className: "w-full h-full object-cover" }) }) : /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-2xl flex items-end p-6", style: {
          background: d.gradient
        }, children: /* @__PURE__ */ jsx("div", { className: "text-background/90 text-xs font-medium tracking-[0.2em] uppercase", children: "Preview" }) }),
        /* @__PURE__ */ jsx("div", { className: "px-2 pt-4 pb-2 text-center", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: d.label }) })
      ] }, d.label)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance", children: [
        "Ready for your ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "clean slate?" })
      ] }),
      /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Let's talk" })
    ] }) })
  ] });
}

export { FlyTrinityCaseStudy as component };
//# sourceMappingURL=work.fly-trinity-Y8ZQouOS.mjs.map
