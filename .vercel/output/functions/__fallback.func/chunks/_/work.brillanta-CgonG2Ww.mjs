import { jsxs, jsx } from 'react/jsx-runtime';
import { n as project$3 } from './router-Pw5mFUwk.mjs';
import { Link } from '@tanstack/react-router';
import { Leaf, Palette, Globe, LayoutTemplate, Sprout } from 'lucide-react';
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

const brillantaBusinessCard = "/assets/brillanta-business-card-BXyhyVvt.png";
const brillantaIdCard = "/assets/brillanta-id-card-Sk9nBqIh.png";
const brillantaSocial = "/assets/brillanta-social-BXFv2kl6.jpg";
const brillantaWebsite = "/assets/brillanta-website-D_o6naFo.png";
const palette = [{
  name: "Forest",
  hex: "#1F4D2B"
}, {
  name: "Harvest Gold",
  hex: "#C9A24C"
}, {
  name: "Cocoa",
  hex: "#4A2C18"
}, {
  name: "Savanna Cream",
  hex: "#F2E8D5"
}, {
  name: "Ink",
  hex: "#0F1A14"
}];
const deliverables = [{
  icon: Palette,
  title: "Brand Identity",
  desc: "A refined visual system \u2014 logo, colour, type and rules \u2014 that reflects Brillanta's heritage in African agriculture and energy."
}, {
  icon: Globe,
  title: "Website Design & Build",
  desc: "A modern marketing site connecting Brillanta to global buyers, partners and investors, with clear pathways into every service line."
}, {
  icon: LayoutTemplate,
  title: "Marketing Collateral",
  desc: "Company profile, stationery and pitch templates engineered to land in boardrooms across Africa, Europe, Asia and the Middle East."
}, {
  icon: Sprout,
  title: "Sustainability Storytelling",
  desc: "Narrative and visuals that put Brillanta's smallholder impact and circular-economy commitments at the centre of the brand."
}];
const designs = [{
  label: "Staff ID Card",
  kind: "image",
  src: brillantaIdCard
}, {
  label: "Social Media",
  kind: "image",
  src: brillantaSocial
}, {
  label: "Business Card",
  kind: "image",
  src: brillantaBusinessCard
}, {
  label: "Website",
  kind: "image",
  src: brillantaWebsite
}];
const brillantaScope = {
  // @ts-expect-error - CSS custom properties
  "--primary": "#1F4D2B",
  "--primary-foreground": "#FFFFFF",
  "--primary-glow": "#C9A24C"
};
function BrillantaCaseStudy() {
  return /* @__PURE__ */ jsxs("div", { style: brillantaScope, children: [
    /* @__PURE__ */ jsx("header", { className: "px-6 pt-32 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "/work", className: "text-sm text-muted hover:text-primary", children: "\u2190 All work" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-3xl border border-border flex items-center justify-center", style: {
        background: "linear-gradient(135deg, #1F4D2B22, #C9A24C20)"
      }, children: /* @__PURE__ */ jsx(Leaf, { className: "w-14 h-14 text-primary", strokeWidth: 1.5 }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase", children: "Brand Foundations \xB7 Agriculture & Energy" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance", children: [
        "Brillanta ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Afrique" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed", children: project$3.oneLiner })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-surface", children: /* @__PURE__ */ jsx("video", { src: "/brillanta-banner.mp4", poster: project$3.image, autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", className: "w-full h-full object-cover" }) }) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "The brief" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance", children: [
        "From African soil ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "to global markets." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted leading-relaxed", children: "Brillanta Afrique Limited has traded in African agriculture and energy since 1998 \u2014 premium cocoa, ginger, sesame, groundnuts and grains alongside AGO, DPK, LPG and PMS. The business had the network and the track record; what it needed was a brand and a digital presence that matched the ambition. We built an identity system and a marketing site that lets Brillanta speak to smallholders, regional traders, and global buyers with the same confident voice." })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Color palette" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "Rooted in ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "the land." })
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
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: designs.map((d) => /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-3xl p-4 border border-border", children: [
        d.kind === "image" ? /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: d.src, alt: d.label, loading: "lazy", width: 800, height: 1e3, className: "w-full h-full object-cover" }) }) : /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-2xl flex items-end p-6", style: {
          background: d.gradient
        }, children: /* @__PURE__ */ jsx("div", { className: "text-background/90 text-xs font-medium tracking-[0.2em] uppercase", children: "Placeholder" }) }),
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

export { BrillantaCaseStudy as component };
//# sourceMappingURL=work.brillanta-CgonG2Ww.mjs.map
