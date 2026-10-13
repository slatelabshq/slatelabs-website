import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';
import { H as HomeCta, u as usePrefersReducedMotion, M as Magnetic } from './HomeCta--NmQgw9L.mjs';
import { L as LagosTime } from './LagosTime-BkF40qTk.mjs';
import { p as projects, f as featuredProjects, w as workNelly, a as workVidaRosa, b as workIleEko, c as workMorgan, g as getLatestPosts, d as formatPostDate } from './router-Pw5mFUwk.mjs';
import { Link } from '@tanstack/react-router';
import { R as Reveal } from './Reveal-Bc5rEVPq.mjs';
import './calendly-ow3Yvb14.mjs';
import '@tanstack/react-query';
import 'sonner';
import '@supabase/supabase-js';
import 'zod';
import '@lovable.dev/webhooks-js';
import '@lovable.dev/email-js';
import '@react-email/components';

const frames = [
  {
    slug: "nelly-baradi",
    rot: "-7deg",
    className: "top-[18%] right-[6%] w-[38%] max-w-[280px] z-20"
  },
  {
    slug: "fly-trinity",
    rot: "5deg",
    className: "bottom-[12%] right-[2%] w-[44%] max-w-[340px] z-10"
  },
  {
    slug: "44db",
    rot: "3deg",
    className: "top-[42%] right-[34%] w-[26%] max-w-[200px] z-30 hidden md:block"
  }
];
function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "relative isolate z-[1] flex min-h-[100svh] min-h-[100dvh] flex-col overflow-hidden bg-ink text-ink-foreground -mt-px max-lg:overflow-visible max-lg:after:pointer-events-none max-lg:after:absolute max-lg:after:inset-x-0 max-lg:after:top-full max-lg:after:h-6 max-lg:after:bg-ink max-lg:after:content-['']",
      onMouseMove: (e) => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: ((e.clientX - r.left) / r.width - 0.5) * 24,
          y: ((e.clientY - r.top) / r.height - 0.5) * 16
        });
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-24 left-[10%] h-[22rem] w-[22rem] rounded-full bg-primary/25 blur-[130px]" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-[-4rem] right-[-2rem] h-[20rem] w-[20rem] rounded-full bg-[#7a1f3d]/45 blur-[110px]" }),
        /* @__PURE__ */ jsx("div", { className: "grain-overlay absolute inset-0 z-[1] opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 z-[5] hidden lg:block", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-ink via-ink/85 to-transparent z-40" }),
          frames.map((frame, i) => {
            const project = projects.find((p) => p.slug === frame.slug);
            if (!project) return null;
            const mx = mouse.x * (i === 1 ? 1.05 : i === 2 ? -0.65 : 0.5);
            const my = mouse.y * (i === 0 ? 0.85 : 0.4);
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: `absolute overflow-hidden rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] animate-float-y ${frame.className}`,
                style: {
                  "--rot": frame.rot,
                  "--mx": `${mx}px`,
                  "--my": `${my}px`,
                  animationDelay: `${i * 0.55}s`,
                  animationDuration: `${7 + i * 1.3}s`
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: project.image,
                      alt: project.client,
                      className: "aspect-[4/5] w-full object-cover animate-ken-slow",
                      style: { animationDelay: `${i * -4}s` }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/75 to-transparent", children: /* @__PURE__ */ jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-white/85", children: project.client }) })
                ]
              },
              frame.slug
            );
          })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-20 flex w-full max-w-[90rem] flex-1 flex-col px-6 lg:px-10 pt-[7.5rem] pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:pb-8 mx-auto lg:min-h-0 lg:justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col justify-center lg:flex-none lg:justify-start max-w-xl lg:max-w-3xl lg:pt-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8 lg:mb-7 animate-reveal", children: [
                  /* @__PURE__ */ jsx(LagosTime, {}),
                  /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-white/20" }),
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/50", children: "Creative & Tech" })
                ] }),
                /* @__PURE__ */ jsxs("h1", { className: "font-display text-[clamp(3.15rem,12vw,7.6rem)] leading-[0.9] tracking-[-0.04em] text-balance lg:leading-[0.88]", children: [
                  /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "block animate-clip-up", style: { animationDelay: "60ms" }, children: "Building brands" }) }),
                  /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "block animate-clip-up", style: { animationDelay: "160ms" }, children: "& platforms on a" }) }),
                  /* @__PURE__ */ jsx("span", { className: "block overflow-hidden italic text-primary", children: /* @__PURE__ */ jsx("span", { className: "block animate-clip-up", style: { animationDelay: "260ms" }, children: "clean slate." }) })
                ] }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "mt-7 lg:mt-6 max-w-md text-[1.0625rem] leading-[1.65] text-ink-foreground/70 md:text-lg md:leading-relaxed animate-reveal",
                    style: { animationDelay: "380ms" },
                    children: "A Lagos studio for businesses ready to start fresh \u2014 brand, growth, platforms, and AI systems, built as one piece of work."
                  }
                ),
                /* @__PURE__ */ jsx(
                  "ul",
                  {
                    className: "mt-8 lg:hidden flex flex-wrap gap-2 animate-reveal",
                    style: { animationDelay: "420ms" },
                    "aria-label": "What we do",
                    children: ["Brand", "Growth", "Platforms", "AI systems"].map((label) => /* @__PURE__ */ jsx(
                      "li",
                      {
                        className: "rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/75",
                        children: label
                      },
                      label
                    ))
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "mt-10 lg:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center animate-reveal",
                    style: { animationDelay: "480ms" },
                    children: [
                      /* @__PURE__ */ jsx(Magnetic, { className: "block w-full sm:inline-block sm:w-auto", children: /* @__PURE__ */ jsx(CtaButton, { to: "/work", variant: "inverse", className: "w-full sm:w-auto min-h-[3.25rem] px-8 text-[0.9375rem]", children: "See the work" }) }),
                      /* @__PURE__ */ jsx(Magnetic, { strength: 0.18, className: "block w-full sm:inline-block sm:w-auto", children: /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "ghost", className: "w-full sm:w-auto min-h-[3.25rem] px-8 text-[0.9375rem]", children: "Start a project" }) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto shrink-0 pt-6 max-lg:border-t max-lg:border-white/10 lg:mt-8 lg:border-0 lg:pt-0", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#work",
                  className: "inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] text-ink-foreground/50 hover:text-ink-foreground",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "relative h-10 w-px bg-white/15 overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-primary animate-scroll-line" }) }),
                    "Scroll",
                    /* @__PURE__ */ jsx(ArrowDown, { className: "h-3.5 w-3.5" })
                  ]
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
function shortTitle(title) {
  return title.includes("\u2014") ? title.split("\u2014")[1].trim() : title;
}
function HomeWork() {
  return /* @__PURE__ */ jsxs("section", { id: "work", className: "relative -mt-px bg-background", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-[90rem] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-8", children: /* @__PURE__ */ jsxs(Reveal, { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "02 \u2014 Selected work" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.92] tracking-[-0.03em] max-w-3xl", children: [
          "Work that has to ",
          /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "speak" }),
          " for itself."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/work",
          className: "group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]",
          children: [
            "Full archive",
            /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-border group-hover:bg-foreground group-hover:text-background", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: featuredProjects.map((p, i) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/work/$slug",
        params: { slug: p.slug },
        className: "group relative isolate block min-h-[72vh] overflow-hidden text-ink-foreground",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: p.image,
              alt: p.client,
              className: "absolute inset-0 h-full w-full object-cover img-zoom"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 flex min-h-[72vh] flex-col justify-end px-6 py-12 lg:px-10 lg:py-16", children: /* @__PURE__ */ jsxs(Reveal, { delay: 80, className: "reveal-deep max-w-4xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-white/70", children: [
                String(i + 1).padStart(2, "0"),
                " / ",
                p.client
              ] }),
              p.badge ? /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] backdrop-blur-sm", children: p.badge }) : null
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.03em]", children: shortTitle(p.title) }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-white/75 leading-relaxed", children: p.oneLiner }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-x-4 gap-y-2", children: [
              p.tags.slice(0, 3).map((t) => /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-white/55", children: t }, t)),
              /* @__PURE__ */ jsxs("span", { className: "ml-auto inline-flex items-center gap-2 text-sm font-medium", children: [
                "View case",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
              ] })
            ] })
          ] }) })
        ]
      },
      p.slug
    )) })
  ] });
}
const services = [
  {
    n: "01",
    title: "Brand Strategy",
    body: "Identity, positioning, and messaging that build brands people remember. We start from what makes you different and build outward from there.",
    hash: "brand-strategy",
    image: workNelly,
    caption: "Nelly Baradi"
  },
  {
    n: "02",
    title: "Growth Marketing",
    body: "Social, paid, music marketing, and campaign strategy. We don't just post \u2014 we build audiences and drive measurable results.",
    hash: "growth-marketing",
    image: workVidaRosa,
    caption: "Vida Rosa"
  },
  {
    n: "03",
    title: "Digital Platforms",
    body: "Custom websites, web apps, and SaaS products built to scale. Every platform is tailored to the problem it's solving.",
    hash: "digital-platforms",
    image: workIleEko,
    caption: "Ile Eko"
  },
  {
    n: "04",
    title: "Intelligent Systems",
    body: "AI automation and workflow design that give your team their time back. We find what's draining you and build systems that handle it.",
    hash: "intelligent-systems",
    image: workMorgan,
    caption: "Morgan Oxford"
  }
];
function HomeServices() {
  const [active, setActive] = useState(0);
  const current = services[active];
  return /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24 md:py-32 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[90rem] mx-auto", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "mb-16 md:mb-20", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "03 \u2014 Practices" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[0.94] tracking-[-0.03em] max-w-3xl", children: [
        "Four practices. ",
        /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "One studio." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-6 xl:col-span-7", children: services.map((s, i) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/services",
          hash: s.hash,
          onMouseEnter: () => setActive(i),
          onFocus: () => setActive(i),
          className: "group grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-start border-t border-border py-7 md:py-9 last:border-b",
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `font-mono text-sm pt-2 ${i === active ? "text-primary" : "text-muted"}`,
                children: s.n
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: `font-display text-3xl md:text-5xl tracking-[-0.03em] leading-none transition-colors ${i === active ? "text-foreground" : "text-foreground/45 group-hover:text-foreground"}`,
                  children: s.title
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `text-muted leading-relaxed max-w-xl overflow-hidden transition-all duration-500 ${i === active ? "mt-4 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0"}`,
                  children: s.body
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              ArrowUpRight,
              {
                className: `h-5 w-5 mt-2 transition-all duration-400 ${i === active ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-muted/50"}`
              }
            )
          ]
        },
        s.n
      )) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block lg:col-span-6 xl:col-span-5 sticky top-28", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-sm aspect-[4/5] bg-surface", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: current.image,
            alt: current.caption,
            className: "h-full w-full object-cover animate-scale-in"
          },
          current.n
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white", children: [
          /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-white/70", children: "In practice" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-2xl italic", children: current.caption })
        ] })
      ] }) })
    ] })
  ] }) });
}
const stats = [
  { v: "300K+", l: "Organic views in 30 days", sub: "44DB \u2014 May 2026" },
  { v: "#1", l: "Rap song in Nigeria, co-produced by our client", sub: "Blaqbonez ft. Asake" },
  { v: "8hrs+", l: "Operational time saved weekly", sub: "Morgan Oxford Education" },
  { v: "250K+", l: "YouTube views in 11 days", sub: "Nelly Baradi \u2014 High Me" }
];
function HomeProof() {
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden bg-ink text-ink-foreground px-6 lg:px-10 py-24 md:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" }),
    /* @__PURE__ */ jsx("div", { className: "grain-overlay absolute inset-0 opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-[90rem] mx-auto", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "mb-16 md:mb-20 max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/45 mb-4", children: "04 \u2014 Proof" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.03em]", children: "Numbers from the work, not from a pitch deck." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/10", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
        Reveal,
        {
          delay: i * 90,
          className: "bg-ink px-6 py-10 md:p-10",
          children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "font-display text-5xl md:text-6xl tracking-[-0.04em] text-primary tabular-nums",
                "aria-label": s.v,
                children: s.v
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-ink-foreground/85 leading-snug", children: s.l }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-foreground/40", children: s.sub })
          ]
        },
        s.l
      )) })
    ] })
  ] });
}
const differentiators = [
  {
    n: "01",
    title: "A fresh perspective",
    body: "We don't do quick fixes or generic templates. Every project starts with a clean slate \u2014 we understand what's not working, then build for your specific goals."
  },
  {
    n: "02",
    title: "Creative meets technical",
    body: "Most agencies are either creative or technical. We're both. Brand strategy and platform development are aligned from day one."
  },
  {
    n: "03",
    title: "Proven track record",
    body: "From a producer collective that became the brand behind Nigeria's #1 rap song to saving an education team 8+ hours a week, we deliver measurable results."
  },
  {
    n: "04",
    title: "We listen, we don't judge",
    body: "Your challenges are opportunities. You get direct access to the founders \u2014 no scripts, no account managers."
  }
];
function HomePhilosophy() {
  return /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24 md:py-32 bg-background", children: /* @__PURE__ */ jsx("div", { className: "max-w-[90rem] mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-5 lg:sticky lg:top-28 self-start", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "05 \u2014 Why Slate" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.9] tracking-[-0.035em]", children: [
        "We don't renovate.",
        /* @__PURE__ */ jsx("br", {}),
        "We build from ",
        /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "zero." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted leading-relaxed max-w-md", children: "Most agencies try to fix what's broken. We believe in the power of the blank page to unlock true growth." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border", children: differentiators.map((d, i) => /* @__PURE__ */ jsxs(
      Reveal,
      {
        delay: i * 80,
        className: "bg-background p-8 md:p-10 hover:bg-surface transition-colors",
        children: [
          /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-6", children: d.n }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium tracking-tight mb-3", children: d.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted leading-relaxed", children: d.body })
        ]
      },
      d.n
    )) })
  ] }) }) });
}
const quotes = [
  {
    quote: "They didn't just manage our socials \u2014 they rebuilt how the world sees us. The month BREAKTIME dropped, we stopped feeling like a collective and started feeling like a movement.",
    name: "44DB",
    role: "Production Collective, Lagos"
  },
  {
    quote: "The CRM Slate Labs built fits how we actually work. New advisors are productive in under two weeks and I finally have visibility across every programme.",
    name: "Morgan Oxford Education",
    role: "Leadership, Lagos"
  },
  {
    quote: "Working with Slate Labs feels less like hiring an agency and more like adding a brand and tech team to our own. Strategy, creative, and engineering \u2014 one conversation.",
    name: "Vida Rosa",
    role: "Luxury Automotive, Lagos"
  }
];
function HomeQuotes() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % quotes.length);
    }, 7e3);
    return () => window.clearInterval(id);
  }, []);
  const q = quotes[i];
  return /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24 md:py-32 bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[90rem] mx-auto", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-10", children: "06 \u2014 Clients" }) }),
    /* @__PURE__ */ jsxs("figure", { className: "max-w-5xl", children: [
      /* @__PURE__ */ jsxs(
        "blockquote",
        {
          className: "font-display italic text-[clamp(1.7rem,3.6vw,3.4rem)] leading-[1.15] tracking-[-0.025em] animate-reveal",
          children: [
            "\u201C",
            q.quote,
            "\u201D"
          ]
        },
        q.name
      ),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: q.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted mt-1", children: q.role })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: quotes.map((item, idx) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": `Show quote from ${item.name}`,
            onClick: () => setI(idx),
            className: `h-1.5 rounded-full transition-all cursor-pointer ${idx === i ? "w-10 bg-foreground" : "w-3 bg-foreground/20 hover:bg-foreground/40"}`
          },
          item.name
        )) })
      ] })
    ] })
  ] }) });
}
function HomeInsights() {
  const latest = getLatestPosts(3);
  if (latest.length === 0) return null;
  const [featured, ...rest] = latest;
  return /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24 md:py-32 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[90rem] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4", children: "07 \u2014 Field notes" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-[-0.03em]", children: "Latest from the studio." })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/insights",
          className: "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted hover:text-foreground",
          children: [
            "All insights ",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-7", children: /* @__PURE__ */ jsxs(Link, { to: "/insights/$slug", params: { slug: featured.slug }, className: "group block", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden rounded-sm bg-surface mb-6", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: featured.cover,
            alt: featured.coverAlt,
            className: "h-full w-full object-cover img-zoom"
          }
        ) }),
        /* @__PURE__ */ jsxs("p", { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3", children: [
          featured.tag,
          " \xB7 ",
          formatPostDate(featured.date),
          " \xB7 ",
          featured.readMinutes,
          " min"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] group-hover:text-primary", children: featured.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted max-w-xl leading-relaxed", children: featured.excerpt })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 flex flex-col divide-y divide-border", children: rest.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 90, className: "py-6 first:pt-0", children: /* @__PURE__ */ jsxs(Link, { to: "/insights/$slug", params: { slug: p.slug }, className: "group block", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-2", children: [
          p.tag,
          " \xB7 ",
          formatPostDate(p.date)
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-medium tracking-tight group-hover:text-primary", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted leading-relaxed", children: p.excerpt })
      ] }) }, p.slug)) })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(HomeHero, {}),
    /* @__PURE__ */ jsx(HomeWork, {}),
    /* @__PURE__ */ jsx(HomeServices, {}),
    /* @__PURE__ */ jsx(HomeProof, {}),
    /* @__PURE__ */ jsx(HomePhilosophy, {}),
    /* @__PURE__ */ jsx(HomeQuotes, {}),
    /* @__PURE__ */ jsx(HomeInsights, {}),
    /* @__PURE__ */ jsx(HomeCta, {})
  ] });
}

export { Home as component };
//# sourceMappingURL=index-B_uIulyF.mjs.map
