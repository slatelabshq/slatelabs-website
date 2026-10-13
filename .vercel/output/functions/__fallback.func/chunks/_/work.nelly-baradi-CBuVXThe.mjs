import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { q as project } from './router-Pw5mFUwk.mjs';
import { Link } from '@tanstack/react-router';
import { Sparkles, MessageCircle, Megaphone, Video, Headphones, ExternalLink, Newspaper, Radio, Music, Calendar } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaTiktok, FaSpotify, FaApple } from 'react-icons/fa6';
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

const scope = [{
  icon: Sparkles,
  title: "Creative Direction",
  desc: "Artist identity and aesthetic direction shaping how Nelly looks and sounds across every touchpoint."
}, {
  icon: MessageCircle,
  title: "Social Media Management",
  desc: "Full brand voice guide executed across Instagram, X, and TikTok in active collaboration with the artist."
}, {
  icon: Megaphone,
  title: "Music Marketing",
  desc: "End-to-end release campaigns \u2014 strategy, narrative, paid media, and editorial coordination."
}, {
  icon: Video,
  title: "Content Production",
  desc: "Lifestyle and performance content captured in her element \u2014 intimate, authentic, worth watching twice."
}];
const resultGroups = [{
  platform: "YouTube",
  items: [{
    value: "250K+",
    label: "Total views (visualizer)"
  }]
}, {
  platform: "Instagram",
  items: [{
    value: "300K+",
    label: "Views \u2014 promo period"
  }, {
    value: "94.3K",
    label: "Organic views (28d) \u2014 +436%"
  }, {
    value: "7.1K",
    label: "Content interactions \u2014 +590%"
  }, {
    value: "1,300+",
    label: "Link clicks to streaming"
  }, {
    value: "28K",
    label: "Top reel (BTS)"
  }]
}, {
  platform: "Meta Paid",
  items: [{
    value: "230K",
    label: "Post reach"
  }, {
    value: "210K",
    label: "Post engagements"
  }, {
    value: "334K",
    label: "Total post views"
  }]
}, {
  platform: "X (Twitter)",
  items: [{
    value: "+4,433%",
    label: "Follower growth (3 \u2192 136)"
  }, {
    value: "50K+",
    label: "Views in 14 days"
  }]
}, {
  platform: "Spotify",
  items: [{
    value: "+41%",
    label: "Monthly listeners (2,394 \u2192 3,382)"
  }]
}];
const deliverables = [{
  icon: Sparkles,
  title: "Campaign Strategy",
  desc: "Full strategy, narrative, and artist brief for the 'High Me' rollout."
}, {
  icon: MessageCircle,
  title: "Brand Voice Guide",
  desc: "Conversational, understated, lowercase, Nigerian cadence \u2014 built into a repeatable system."
}, {
  icon: Megaphone,
  title: "4-Phase X Rollout",
  desc: "Every line of copy written in-house, built from 3 followers up."
}, {
  icon: Newspaper,
  title: "Press Release",
  desc: "Written and distributed on release day across music press and editorial contacts."
}, {
  icon: Radio,
  title: "Paid Media",
  desc: "Meta (Instagram/Facebook) and YouTube campaigns engineered for reach and engagement."
}, {
  icon: Music,
  title: "DSP & Playlist Pitching",
  desc: "Editorial coordination with Apple Music and Spotify."
}, {
  icon: Video,
  title: "Content Production",
  desc: "Multiple rounds of lifestyle and performance content across her socials."
}, {
  icon: Calendar,
  title: "Live Activations",
  desc: "Mainland Block Party, Tempo Lagos, Play with MIA \u2014 the music as the handshake."
}];
function NellyBaradiCaseStudy() {
  const d = project.detail;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "px-6 pt-32 pb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/work", className: "text-sm text-muted hover:text-primary", children: "\u2190 All work" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase", children: project.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance", children: "Nelly Baradi." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto italic", children: "\u201CThe voice behind the voice. Now, centre stage.\u201D" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 max-w-2xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] overflow-hidden rounded-[2.5rem]", children: /* @__PURE__ */ jsx("img", { src: project.image, alt: "Nelly Baradi \u2014 portrait", width: 1024, height: 1280, className: "w-full h-full object-cover object-top" }) }) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsx(Eyebrow, { children: "The brief" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-balance", children: [
            "From the credits to ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "centre stage." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 space-y-6 text-lg text-muted leading-relaxed", children: [
          /* @__PURE__ */ jsx("p", { children: "Nelly Baradi spent years as the best-kept secret in Nigerian music \u2014 the voice behind records by Seyi Vibez, Mohbad, Peruzzi, Timaya, Oxlade, Fola, and Bella Shmurda. Never announced. Never needed to be." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Born in Sapele and based in Lagos, Nelly is a singer-songwriter whose sound lives where Afropop meets R&B \u2014 warm, melodic, emotionally precise. Signed to Troniq Music Inc., she has spent two years quietly building a solo catalogue. Her 2025 debut ",
            /* @__PURE__ */ jsx("em", { children: "Wake Up" }),
            " announced her arrival. ",
            /* @__PURE__ */ jsx("em", { children: "High Me" }),
            ", released March 2026, confirmed it."
          ] }),
          /* @__PURE__ */ jsx("p", { children: d.challenge })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-4", children: [{
        v: "35K+",
        l: "Instagram followers"
      }, {
        v: "60K+",
        l: "TikTok followers"
      }, {
        v: "92K+",
        l: "Total social reach"
      }, {
        v: "2.3K+",
        l: "Spotify monthly listeners"
      }].map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-surface p-6 border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-medium tracking-[-0.03em]", children: m.v }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted mt-2 uppercase tracking-[0.15em]", children: m.l })
      ] }, m.l)) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted mt-4", children: "Pre-campaign reach across platforms." })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Scope of work" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance", children: [
        "Ongoing creative ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "partners." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: scope.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-3xl p-8 border border-border", children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-primary mb-6", strokeWidth: 1.75 }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium tracking-tight mb-3", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: desc })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "bg-foreground text-background rounded-[2.5rem] p-10 md:p-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-medium text-primary mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
        /* @__PURE__ */ jsx("span", { children: "The results \xB7 High Me campaign" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-6 text-balance", children: [
        "The numbers, ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "11 days in." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-background/60 mb-16 max-w-2xl", children: "Data window: March 27 \u2013 April 7, 2026. Campaign remains in active phase." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: resultGroups.map((g) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4", children: g.platform }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: g.items.map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-primary/20 bg-[#111111] p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-medium tracking-[-0.03em] text-primary", children: m.value }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-background/80 mt-3", children: m.label })
        ] }, m.label)) })
      ] }, g.platform)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-12 text-lg md:text-xl text-background/70 leading-relaxed max-w-3xl", children: d.results }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-12 border-t border-primary/15", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6", children: "Follow the artist" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [{
          href: "https://www.instagram.com/nellybaradi",
          label: "Nelly Baradi on Instagram",
          Icon: FaInstagram
        }, {
          href: "https://x.com/nellybaradii",
          label: "Nelly Baradi on X",
          Icon: FaXTwitter
        }, {
          href: "https://www.tiktok.com/@nellybaradi_",
          label: "Nelly Baradi on TikTok",
          Icon: FaTiktok
        }, {
          href: "https://open.spotify.com/artist/77bRctbyJcjkQcyEa5wrQr",
          label: "Nelly Baradi on Spotify",
          Icon: FaSpotify
        }, {
          href: "https://music.apple.com/us/artist/nelly-baradi/1494289729",
          label: "Nelly Baradi on Apple Music",
          Icon: FaApple
        }, {
          href: "https://audiomack.com/nelly-baradi",
          label: "Nelly Baradi on Audiomack",
          Icon: Headphones
        }, {
          href: "https://hypalabs.lnk.to/HighMe",
          label: "Stream 'High Me' on all platforms",
          Icon: ExternalLink
        }].map(({
          href,
          label,
          Icon
        }) => /* @__PURE__ */ jsx("a", { href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, className: "w-12 h-12 rounded-full border border-primary/20 bg-[#111111] flex items-center justify-center text-primary transition-colors hover:bg-primary/10 hover:border-primary/40", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5", "aria-hidden": "true" }) }, href)) })
      ] })
    ] }) }),
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
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance", children: [
        "Working with an artist who deserves ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "this kind of attention?" })
      ] }),
      /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "primary", children: "Let's talk" })
    ] }) })
  ] });
}

export { NellyBaradiCaseStudy as component };
//# sourceMappingURL=work.nelly-baradi-CBuVXThe.mjs.map
