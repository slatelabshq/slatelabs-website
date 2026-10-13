import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, useLocation, notFound } from '@tanstack/react-router';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Toaster as Toaster$1 } from 'sonner';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { verifyWebhookRequest, WebhookError } from '@lovable.dev/webhooks-js';
import { sendLovableEmail } from '@lovable.dev/email-js';
import { render, Html, Head, Preview, Body, Container, Text, Heading, Section } from '@react-email/components';

const appCss = "/assets/styles-au2CC2L-.css";
const logoWordmark = "/assets/slate-logo-wordmark-BEl-VUZ1.png";
const logoMark = "/assets/slate-logo-mark-1Y4g35jc.png";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/insights", label: "Insights" },
  { to: "/ile-eko", label: "Ile Eko" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none", children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        "aria-label": "Primary",
        className: "pointer-events-auto max-w-5xl mx-auto bg-background/80 backdrop-blur-md border border-border rounded-full px-3 py-2 md:py-2.5 flex items-center justify-between shadow-[0_1px_2px_rgba(17,17,17,0.04)]",
        children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "pl-4 pr-3 flex items-center", "aria-label": "Slate Labs \u2014 Home", children: [
            /* @__PURE__ */ jsx("img", { src: logoWordmark, alt: "Slate Labs", className: "hidden md:block h-6 lg:h-7 w-auto" }),
            /* @__PURE__ */ jsx("img", { src: logoMark, alt: "Slate Labs", className: "md:hidden h-7 w-auto" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:ml-2 items-center gap-1 text-sm", children: nav.slice(1).map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              className: "px-3 py-1.5 rounded-full text-muted hover:text-foreground hover:bg-surface transition-colors",
              activeProps: { className: "text-foreground bg-surface" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "hidden md:inline-flex rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary glow-primary transition-colors",
              children: "Get started"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Open menu",
              className: "md:hidden rounded-full px-4 py-2 text-sm font-medium bg-surface",
              onClick: () => setOpen((v) => !v),
              children: open ? "Close" : "Menu"
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsx("div", { className: "pointer-events-auto md:hidden max-w-5xl mx-auto mt-2 bg-background border border-border rounded-3xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 text-sm", children: [
      nav.map((n) => /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "px-3 py-2 rounded-xl hover:bg-surface",
          activeProps: { className: "bg-surface text-foreground" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:+2347026036554",
          onClick: () => setOpen(false),
          className: "mt-2 px-3 py-2 rounded-xl text-sm text-muted hover:bg-surface hover:text-foreground",
          children: "Call \u2014 +234 702 603 6554"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "mt-2 rounded-full bg-foreground text-background px-4 py-3 text-center text-sm font-medium",
          children: "Get started"
        }
      )
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { "aria-label": "Site footer", className: "px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto bg-surface rounded-[2.5rem] p-10 md:p-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center", "aria-label": "Slate Labs \u2014 Home", children: /* @__PURE__ */ jsx("img", { src: logoWordmark, alt: "Slate Labs", className: "h-7 md:h-9 w-auto" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted max-w-xs leading-relaxed", children: "Building brands & platforms on a clean slate. Lagos, Nigeria." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-4", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-primary", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/work", className: "hover:text-primary", children: "Work" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/insights", className: "hover:text-primary", children: "Insights" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-4", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ile-eko", className: "hover:text-primary", children: "Ile Eko" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ile-eko", hash: "pricing", className: "hover:text-primary", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Book a demo" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted mb-4", children: "Connect" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://instagram.com/slatelabs.hq", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: "Instagram" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://tiktok.com/@slatelabs.hq", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: "TikTok" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/slate-labs-hq", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary", children: "LinkedIn" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:hello@slatelabshq.com", className: "hover:text-primary", children: "hello@slatelabshq.com" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+2347026036554", className: "hover:text-primary", children: "+234 702 603 6554" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Slate Labs. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Building on a clean slate." })
    ] })
  ] }) });
}
function PageTransition({ children }) {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsx("div", { className: "page-enter", children }, pathname);
}
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setP(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": true,
      className: "fixed top-0 left-0 z-[60] h-[2px] w-full pointer-events-none",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full origin-left bg-primary",
          style: { transform: `scaleX(${p})` }
        }
      )
    }
  );
}
function trackPageview(path, title) {
  return;
}
function trackEvent(name, params) {
  return;
}
const WA_URL = "https://wa.me/2347026036554?text=Hi%20Slate%20Labs%2C%20I%20want%20to%20discuss%20a%20project";
function WhatsAppFab() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: WA_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: () => trackEvent(),
      "aria-label": "Chat with Slate Labs on WhatsApp",
      className: "md:hidden fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg active:scale-95 transition-transform",
      style: { backgroundColor: "#25D366" },
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          viewBox: "0 0 32 32",
          className: "w-7 h-7",
          fill: "white",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx("path", { d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.045 2.264v.114c-.015.99.405 1.976.832 2.834 1.36 2.493 3.864 4.795 6.616 5.798.717.288 2.044.66 2.832.66.99 0 2.176-.59 2.59-1.55.13-.297.187-.622.187-.95 0-.187 0-.348-.044-.516-.115-.387-1.504-.985-1.847-1.146-.215-.115-.402-.215-.616-.215zM16.32 0c-8.696 0-15.747 7.05-15.747 15.747 0 2.79.732 5.51 2.107 7.916L0 32l8.532-2.234a15.61 15.61 0 0 0 7.788 1.974c8.696 0 15.747-7.05 15.747-15.748C32.067 7.052 25.017 0 16.32 0z" })
        }
      )
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  const links = [
    { to: "/services", label: "Services", desc: "Brands, platforms & AI systems" },
    { to: "/work", label: "Work", desc: "Selected case studies" },
    { to: "/insights", label: "Insights", desc: "Field notes from the studio" },
    { to: "/contact", label: "Contact", desc: "Start a project" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[80vh] items-center justify-center bg-background px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl w-full text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium tracking-[0.2em] uppercase text-muted", children: "Error 404" }),
    /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-[clamp(4rem,12vw,9rem)] leading-none font-medium tracking-[-0.04em] text-foreground", children: [
      "Off the ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "slate." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg text-muted max-w-md mx-auto leading-relaxed", children: "This page doesn't exist \u2014 or it's moved. Try one of the routes below, or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-primary glow-primary transition-colors",
          children: "Go home"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/insights",
          className: "inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface glow-subtle transition-colors",
          children: "Read Insights"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: l.to,
        className: "block rounded-2xl border border-border bg-surface/40 px-5 py-4 hover:bg-surface hover:border-foreground/20 transition-colors",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-foreground", children: l.label }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted mt-0.5", children: l.desc })
        ]
      }
    ) }, l.to)) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-medium tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-primary glow-primary transition-colors",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface glow-subtle transition-colors",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$m = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Slate Labs \u2014 Building brands & platforms on a clean slate" },
      {
        name: "description",
        content: "Slate Labs is a Lagos-based creative + technical agency building brands, digital platforms, and intelligent systems for businesses ready to grow exponentially."
      },
      { name: "author", content: "Slate Labs" },
      { property: "og:site_name", content: "Slate Labs" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://slatelabshq.com/og-default.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://slatelabshq.com/og-default.jpg" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "Slate Labs",
          alternateName: "Slate Labs HQ",
          description: "Creative & Tech Agency in Lagos, Nigeria. Brand strategy, growth marketing, digital platforms, and AI automation.",
          url: "https://slatelabshq.com",
          logo: "https://slatelabshq.com/assets/slate-logo-wordmark.png",
          image: "https://slatelabshq.com/og-default.jpg",
          telephone: "+2347026036554",
          email: "hello@slatelabshq.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lekki Phase 1",
            addressLocality: "Lagos",
            addressCountry: "NG"
          },
          geo: { "@type": "GeoCoordinates", latitude: 6.4281, longitude: 3.4219 },
          areaServed: ["Lagos", "Nigeria", "Global"],
          sameAs: [
            "https://www.linkedin.com/company/slate-labs-hq",
            "https://instagram.com/slatelabs.hq",
            "https://tiktok.com/@slatelabs.hq"
          ],
          founder: [
            {
              "@type": "Person",
              name: "Joseph Awujoola-Kalohun",
              jobTitle: "Co-Founder & CEO"
            },
            {
              "@type": "Person",
              name: "Olasukanmi Adeyeye",
              jobTitle: "Co-Founder & CTO"
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$m.useRouteContext();
  const router2 = useRouter();
  useEffect(() => {
    const unsub = router2.subscribe("onResolved", ({ toLocation }) => {
      trackPageview((toLocation.pathname ?? "/") + (toLocation.searchStr ?? ""));
    });
    return () => unsub();
  }, [router2]);
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main",
        className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:text-background focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium",
        children: "Skip to content"
      }
    ),
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { id: "main", className: "flex-1", children: /* @__PURE__ */ jsx(PageTransition, { children: /* @__PURE__ */ jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(WhatsAppFab, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) });
}
const $$splitComponentImporter$f = () => import('./index-B_uIulyF.mjs');
const Route$l = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Slate Labs \u2014 Lagos Creative & Tech Agency"
    }, {
      name: "description",
      content: "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow."
    }, {
      property: "og:title",
      content: "Slate Labs \u2014 Lagos Creative & Tech Agency"
    }, {
      property: "og:description",
      content: "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import('./about-C8q6HsRY.mjs');
const Route$k = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About \u2014 Slate Labs"
    }, {
      name: "description",
      content: "Meet the team behind Slate Labs \u2014 a Lagos Creative & Tech Agency. Co-founders Joseph Awujoola-Kalohun (CEO) and SK Adeyeye (CTO) lead brand strategy, growth marketing, digital platforms, and AI automation."
    }, {
      property: "og:title",
      content: "About \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "Meet the team behind Slate Labs \u2014 Lagos's Creative & Tech Agency. Brand strategy, growth marketing, digital platforms, and AI automation."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import('./contact-bif7DIT3.mjs');
const Route$j = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact \u2014 Slate Labs"
    }, {
      name: "description",
      content: "Get in touch with Slate Labs, Lagos. We build brands, platforms, and intelligent systems. Email: hello@slatelabshq.com \xB7 WhatsApp: +234 702 603 6554. Based in Lekki Phase 1, Lagos, Nigeria."
    }, {
      property: "og:title",
      content: "Contact \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "Get in touch with Slate Labs, Lagos. Email hello@slatelabshq.com or WhatsApp +234 702 603 6554. Based in Lekki Phase 1, Lagos."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import('./ile-eko-CUVSiF9v.mjs');
const Route$i = createFileRoute("/ile-eko")({
  head: () => ({
    meta: [{
      title: "Ile Eko \u2014 Modern LMS for Nigerian Schools"
    }, {
      name: "description",
      content: "Ile Eko is a complete learning management system designed for Nigerian schools. Manage students, grades, parent communication, and analytics in one platform."
    }, {
      property: "og:title",
      content: "Ile Eko \u2014 Modern LMS for Nigerian Schools"
    }, {
      property: "og:description",
      content: "Bridge traditional learning with digital tools. Manage students, track grades, communicate with parents, and scale your school."
    }, {
      property: "og:url",
      content: "/ile-eko"
    }, {
      property: "og:type",
      content: "product"
    }],
    links: [{
      rel: "canonical",
      href: "/ile-eko"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Ile Eko",
        operatingSystem: "Web",
        applicationCategory: "EducationApplication",
        description: "A complete learning management system built specifically for Nigerian schools.",
        creator: {
          "@type": "Organization",
          name: "Slate Labs",
          url: "https://slatelabshq.com"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import('./insights-CtlX0tWP.mjs');
const Route$h = createFileRoute("/insights")({
  head: () => ({
    meta: [{
      title: "Insights \u2014 Slate Labs"
    }, {
      name: "description",
      content: "Essays and field notes from Slate Labs on brand, growth, digital platforms, and intelligent systems \u2014 written from the ground in Lagos."
    }, {
      property: "og:title",
      content: "Insights \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "Essays and field notes from Slate Labs on brand, growth, digital platforms, and intelligent systems."
    }, {
      property: "og:url",
      content: "/insights"
    }],
    links: [{
      rel: "canonical",
      href: "/insights"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import('./services-CSWlC02O.mjs');
const Route$g = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services \u2014 Slate Labs"
    }, {
      name: "description",
      content: "Brand strategy, growth marketing, custom web development, and AI automation from Slate Labs \u2014 Lagos's creative and tech agency for businesses building from scratch. Serving clients across Nigeria and globally."
    }, {
      property: "og:title",
      content: "Services \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "Brand strategy, growth marketing, custom web development, and AI automation from Slate Labs \u2014 Lagos's creative and tech agency."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Brand Strategy, Growth Marketing, Digital Platforms, AI Automation",
        provider: {
          "@type": "Organization",
          name: "Slate Labs",
          url: "https://slatelabshq.com"
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Slate Labs Services",
          itemListElement: [{
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Strategy",
              description: "Brand positioning, visual identity, and messaging for businesses starting fresh."
            }
          }, {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Growth Marketing",
              description: "Social media, paid ads, music marketing, and campaign strategy."
            }
          }, {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Platforms",
              description: "Custom websites, web applications, and SaaS products built to scale."
            }
          }, {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Intelligent Systems",
              description: "AI automation and workflow systems that multiply your team's capacity."
            }
          }]
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import('./unsubscribe-BziHzxG2.mjs');
const Route$f = createFileRoute("/unsubscribe")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      title: "Unsubscribe \u2014 Slate Labs"
    }, {
      name: "robots",
      content: "noindex"
    }]
  })
});
const $$splitComponentImporter$8 = () => import('./work-DqJtPKP_.mjs');
const Route$e = createFileRoute("/work")({
  head: () => ({
    meta: [{
      title: "Work \u2014 Slate Labs"
    }, {
      name: "description",
      content: "Slate Labs portfolio \u2014 brand identity, growth marketing, digital platforms, and intelligent systems for clients across music, automotive, aviation, education, and agriculture in Lagos, Nigeria."
    }, {
      property: "og:title",
      content: "Work \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "Brand identity, growth marketing, digital platforms, and intelligent systems for clients across music, automotive, aviation, education, and agriculture."
    }, {
      property: "og:url",
      content: "/work"
    }],
    links: [{
      rel: "canonical",
      href: "/work"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
function redactEmail$1(email) {
  if (!email) return "***";
  const [localPart, domain] = email.split("@");
  if (!localPart || !domain) return "***";
  return `${localPart[0]}***@${domain}`;
}
const Route$d = createFileRoute("/email/unsubscribe")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const supabaseUrl = "https://uyzmaupmdfntanjsknmb.supabase.co";
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseServiceKey) {
          return Response.json({ error: "Server configuration error" }, { status: 500 });
        }
        const url = new URL(request.url);
        const token = url.searchParams.get("token");
        if (!token) {
          return Response.json({ error: "Token is required" }, { status: 400 });
        }
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { data: tokenRecord, error: lookupError } = await supabase.from("email_unsubscribe_tokens").select("*").eq("token", token).maybeSingle();
        if (lookupError || !tokenRecord) {
          return Response.json({ error: "Invalid or expired token" }, { status: 404 });
        }
        if (tokenRecord.used_at) {
          return Response.json({ valid: false, reason: "already_unsubscribed" });
        }
        return Response.json({ valid: true });
      },
      POST: async ({ request }) => {
        const supabaseUrl = "https://uyzmaupmdfntanjsknmb.supabase.co";
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseServiceKey) {
          return Response.json({ error: "Server configuration error" }, { status: 500 });
        }
        const url = new URL(request.url);
        let token = url.searchParams.get("token");
        const contentType = request.headers.get("content-type") ?? "";
        if (contentType.includes("application/x-www-form-urlencoded")) {
          const formText = await request.text();
          const params = new URLSearchParams(formText);
          if (!params.get("List-Unsubscribe")) {
            const formToken = params.get("token");
            if (formToken) {
              token = formToken;
            }
          }
        } else {
          try {
            const body = await request.json();
            if (body.token) {
              token = body.token;
            }
          } catch {
          }
        }
        if (!token) {
          return Response.json({ error: "Token is required" }, { status: 400 });
        }
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { data: tokenRecord, error: lookupError } = await supabase.from("email_unsubscribe_tokens").select("*").eq("token", token).maybeSingle();
        if (lookupError || !tokenRecord) {
          return Response.json({ error: "Invalid or expired token" }, { status: 404 });
        }
        if (tokenRecord.used_at) {
          return Response.json({ success: false, reason: "already_unsubscribed" });
        }
        const { data: updated, error: updateError } = await supabase.from("email_unsubscribe_tokens").update({ used_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("token", token).is("used_at", null).select().maybeSingle();
        if (updateError) {
          console.error("Failed to mark token as used", { error: updateError, token });
          return Response.json({ error: "Failed to process unsubscribe" }, { status: 500 });
        }
        if (!updated) {
          return Response.json({ success: false, reason: "already_unsubscribed" });
        }
        const { error: suppressError } = await supabase.from("suppressed_emails").upsert(
          { email: tokenRecord.email.toLowerCase(), reason: "unsubscribe" },
          { onConflict: "email" }
        );
        if (suppressError) {
          console.error("Failed to suppress email", {
            error: suppressError,
            email_redacted: redactEmail$1(tokenRecord.email)
          });
          return Response.json({ error: "Failed to process unsubscribe" }, { status: 500 });
        }
        console.log("Email unsubscribed", {
          email_redacted: redactEmail$1(tokenRecord.email)
        });
        return Response.json({ success: true });
      }
    }
  }
});
const posts = [
  {
    slug: "why-most-lagos-brands-look-the-same",
    title: "Why most Lagos brands look the same",
    excerpt: "Sameness isn't a design problem \u2014 it's a positioning problem. A short essay on why differentiation doesn't come from a logo.",
    date: "2026-05-12",
    readMinutes: 4,
    author: { name: "Joseph Awujoola-Kalohun", role: "Co-Founder & CEO" },
    cover: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Brand designer working with color swatches and typography samples",
    tag: "Brand",
    body: [
      {
        type: "p",
        text: "Walk through Lekki on a Friday evening and count the brands. Same gradient. Same sans-serif. Same three lifestyle photos rotated across five Instagram grids. It feels deliberate \u2014 like there's a Lagos starter pack everyone bought from the same shop."
      },
      {
        type: "p",
        text: "There isn't. What there is, instead, is a deep aversion to risk dressed up as good taste. When a founder can't articulate what makes their business different in one sentence, the designer can't either. The brand defaults to whatever's safe. Safe looks like everyone else."
      },
      { type: "h2", text: "Differentiation is a positioning problem" },
      {
        type: "p",
        text: "We talk about brand as if it's a visual exercise. It isn't. Brand is the operating answer to one question: what do you do that nobody else does in quite the same way? Until that's settled, no amount of typography work will save you."
      },
      {
        type: "quote",
        text: "The best brands aren't the prettiest ones \u2014 they're the clearest. You can write down what they stand for on a napkin."
      },
      { type: "h2", text: "Three questions before you touch the logo" },
      {
        type: "ul",
        items: [
          "Who specifically are you for, and who are you not for?",
          "What would your most loyal customer say is the one thing you do that nobody else does?",
          "If a competitor copied your visuals tomorrow, would anything actually change for your customers?"
        ]
      },
      {
        type: "p",
        text: "If you can answer those, the visual identity almost designs itself. If you can't, the prettiest brand in Lagos is still going to look like the other prettiest brand in Lagos."
      }
    ]
  },
  {
    slug: "the-crm-your-team-will-actually-use",
    title: "The CRM your team will actually use",
    excerpt: "Most off-the-shelf CRMs force you to bend your workflow around someone else's idea of sales. Here's what we learned building one that doesn't.",
    date: "2026-04-22",
    readMinutes: 5,
    author: { name: "Olasukanmi Adeyeye (SK)", role: "Co-Founder & CTO" },
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Team reviewing analytics and workflow data on a large display",
    tag: "Systems",
    body: [
      {
        type: "p",
        text: "Every business we've worked with has a CRM story. They bought the popular one, the team filled it in for two months, then quietly went back to spreadsheets and WhatsApp. The tool wasn't broken \u2014 it just wasn't theirs."
      },
      { type: "h2", text: "Workflow first, software second" },
      {
        type: "p",
        text: "Before we wrote a line of code for Morgan Oxford, we sat with their advisors and admin staff and mapped the real journey from first enquiry to enrolment. Every status. Every handoff. Every edge case the off-the-shelf tools couldn't model."
      },
      {
        type: "p",
        text: "What came out wasn't a CRM. It was a system that spoke their language \u2014 students and programmes instead of leads and deals, advisor handoffs instead of pipeline stages, role-based screens instead of one cluttered dashboard for everyone."
      },
      { type: "h2", text: "Why teams quietly stop using software" },
      {
        type: "ul",
        items: [
          "It asks for data the team doesn't naturally have at that step.",
          "It has fields, tabs, or modules they don't use \u2014 but can't hide.",
          "It doesn't model the one handoff that actually matters to their day.",
          "It replaces a fast informal flow (a WhatsApp message) with a slow formal one."
        ]
      },
      {
        type: "quote",
        text: "The right system disappears. The wrong system makes you think about itself."
      },
      {
        type: "p",
        text: "Custom isn't always the answer. Sometimes a well-configured off-the-shelf tool is exactly right. But when your workflow is genuinely specific \u2014 and a lot of Lagos businesses' workflows are \u2014 bending it to fit generic software costs more in lost time than the software ever saved."
      }
    ]
  }
];
function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
function getRelatedPosts(slug, limit = 2) {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
function getLatestPosts(limit = 3) {
  return [...posts].sort((a, b) => a.date < b.date ? 1 : -1).slice(0, limit);
}
function formatPostDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
const $$splitComponentImporter$7 = () => import('./insights._slug-SgU5yWLT.mjs');
const $$splitNotFoundComponentImporter = () => import('./insights._slug-DaV4Meg8.mjs');
const Route$c = createFileRoute("/insights/$slug")({
  loader: ({
    params
  }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return {
      post,
      related: getRelatedPosts(params.slug)
    };
  },
  head: ({
    params,
    loaderData
  }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{
          title: "Insight \u2014 Slate Labs"
        }],
        links: [{
          rel: "canonical",
          href: `/insights/${params.slug}`
        }]
      };
    }
    return {
      meta: [{
        title: `${post.title} \u2014 Slate Labs Insights`
      }, {
        name: "description",
        content: post.excerpt
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:title",
        content: post.title
      }, {
        property: "og:description",
        content: post.excerpt
      }, {
        property: "og:image",
        content: post.cover
      }, {
        property: "og:url",
        content: `/insights/${params.slug}`
      }, {
        property: "article:published_time",
        content: post.date
      }, {
        property: "article:author",
        content: post.author.name
      }],
      links: [{
        rel: "canonical",
        href: `/insights/${params.slug}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.cover,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
            jobTitle: post.author.role
          },
          publisher: {
            "@type": "Organization",
            name: "Slate Labs",
            logo: {
              "@type": "ImageObject",
              url: "https://slatelabshq.com/assets/slate-logo-wordmark.png"
            }
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://slatelabshq.com/insights/${params.slug}`
          }
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const work44db = "/assets/work-44db-CrSnYcVy.jpg";
const workVidaRosa = "/assets/work-vidarosa-Cz12SB5J.jpg";
const workIleEko = "/assets/work-ileeko-Duw6pnIe.jpg";
const workMorgan = "/assets/work-morgan-oxford-CdWEZtEg.jpg";
const workFly = "/assets/work-fly-trinity-Cs_we848.jpg";
const workBrillanta = "/assets/work-brillanta-Bn8P9O7k.jpg";
const workNelly = "/assets/work-nelly-baradi-CGna_7zv.jpg";
const projects = [
  {
    slug: "44db",
    color: "#3a1a6b",
    client: "44DB",
    title: "44DB \u2014 Music Collective Branding",
    category: "Brand Foundations",
    oneLiner: "Transforming a music collective into a cultural movement.",
    image: work44db,
    tags: ["Brand Strategy", "Visual Identity", "Social Media"],
    badge: "74.6% reach",
    detail: {
      industry: "Music",
      date: "Ongoing",
      services: ["Brand Strategy", "Visual Identity", "Content Strategy", "Social Media Management"],
      metrics: [
        { value: "69,526", label: "Instagram views in one month" },
        { value: "74.6%", label: "Views from non-followers" },
        { value: "6,900%", label: "Growth from baseline" }
      ],
      challenge: "44DB had talent\u2014world-class producers creating incredible music. But their brand presence didn't match their artistic excellence. Social media was inconsistent, their visual identity was fragmented, and they were averaging just 1,000 views per month on Instagram. They needed a cohesive brand that could turn their music collective into a recognized movement\u2014something that commanded attention and respect in the industry.",
      solution: [
        {
          heading: "Brand Strategy",
          body: "Positioned 44DB not as just another music group, but as a cultural force\u2014a collective that defines sound, not follows trends."
        },
        {
          heading: "Visual Identity",
          body: "Created a bold, cohesive visual language\u2014distinctive graphics, consistent color palette, and a look that matched their sonic excellence."
        },
        {
          heading: "Content Strategy",
          body: "Developed a content calendar that balanced music releases with behind-the-scenes storytelling, creating emotional connection beyond just the tracks."
        },
        {
          heading: "Social Media Management",
          body: "Managed their Instagram, TikTok, and X (Twitter) daily\u2014posting content that sparked conversation and drove discovery."
        }
      ],
      results: "August was a breakout month. With their community event BREAKTIME at the center of cultural buzz, 44DB didn't just drive engagement, they became a movement.",
      numbers: [
        "Instagram: 69,526 views, 1,856 interactions, 68 new followers in 30 days",
        "X (Twitter): 310,700 impressions, 10,100 engagements, 3.2% engagement rate",
        "TikTok: 9,331 views (+240%), 948 likes (+133%), breakout video hit 16,100 views",
        "74.6% of Instagram views came from non-followers"
      ],
      deliverables: [
        "Brand strategy document",
        "Visual identity system (logo variations, color palette, typography)",
        "Social media content templates",
        "30+ pieces of custom content (graphics, videos, captions)",
        "Campaign strategy for BREAKTIME single launch",
        "Ongoing social media management (Instagram, TikTok, X)"
      ]
    }
  },
  {
    slug: "vida-rosa",
    color: "#7a1f3d",
    client: "Vida Rosa",
    title: "Vida Rosa \u2014 Luxury Automotive Marketing",
    category: "Brand Foundations",
    oneLiner: "Luxury automotive marketing for one of Lagos's most exclusive dealerships.",
    image: workVidaRosa,
    tags: ["Luxury Marketing", "Paid Media", "Creative Direction"],
    badge: "Featured engagement"
  },
  {
    slug: "ile-eko",
    color: "#1f4d3a",
    client: "Ile Eko",
    title: "Ile Eko \u2014 Learning Management System",
    category: "Digital Platforms",
    oneLiner: "Modern education technology for Nigerian schools.",
    image: workIleEko,
    tags: ["SaaS", "Product Design", "EdTech"]
  },
  {
    slug: "morgan-oxford",
    color: "#142850",
    client: "Morgan Oxford Education",
    title: "Morgan Oxford \u2014 Education CRM",
    category: "Intelligent Systems",
    oneLiner: "A custom CRM built around how their staff actually work.",
    image: workMorgan,
    tags: ["Custom CRM", "Workflow Automation", "Internal Tools"],
    badge: "8hrs+ saved / wk",
    detail: {
      industry: "Education",
      date: "Ongoing",
      services: ["Discovery & Workflow Mapping", "Product Design", "Custom CRM Build", "Staff Onboarding"],
      metrics: [
        { value: "1", label: "Unified system replacing scattered tools" },
        { value: "<2 wks", label: "Average staff onboarding time" },
        { value: "100%", label: "Coverage of their real workflow" }
      ],
      challenge: "Morgan Oxford's team runs an education-specific workflow \u2014 student enquiries, advisor handoffs, application tracking, follow-ups across multiple programmes. Off-the-shelf CRMs forced them to bend that workflow around generic sales pipelines, so the team fell back on spreadsheets, email threads, and disconnected tools. Information lived in too many places, handoffs slipped, and leadership had no clean view of the pipeline.",
      solution: [
        {
          heading: "Workflow Discovery",
          body: "We sat with advisors and admin staff and mapped the real journey from first enquiry to enrolment \u2014 every status, every handoff, every edge case \u2014 before writing a line of code."
        },
        {
          heading: "Custom Data Model",
          body: "Built around students, programmes, and advisor relationships instead of generic 'leads' and 'deals' \u2014 so the system speaks the team's language out of the box."
        },
        {
          heading: "Role-Based Interface",
          body: "Each staff role gets a screen designed for their job. No clutter, no unused fields, no hunting through tabs that don't apply to them."
        },
        {
          heading: "Automation Layer",
          body: "Automated reminders, status changes, and handoffs run quietly in the background so nothing falls between teams and advisors spend their time on students, not admin."
        }
      ],
      results: "Morgan Oxford now runs on one source of truth. Advisors spend less time on admin and more time with students, new staff are productive in under two weeks, and leadership finally has visibility into the full pipeline.",
      numbers: [
        "One unified system replaced spreadsheets, email threads, and disconnected tools",
        "Role-based dashboards for advisors, admin, and leadership",
        "Automated handoffs and reminders across the enquiry-to-enrolment journey",
        "Full audit trail of every student interaction",
        "New staff onboarded and productive in under two weeks"
      ],
      deliverables: [
        "Workflow audit and process map",
        "Custom data model for students, programmes, and advisors",
        "Full custom CRM application",
        "Role-based dashboards and views",
        "Automation rules for reminders, status changes, and handoffs",
        "Staff training sessions and internal documentation"
      ]
    }
  },
  {
    slug: "fly-trinity",
    color: "#3C096C",
    client: "Fly Trinity Airways",
    title: "Fly Trinity Airways \u2014 Brand Identity",
    category: "Brand Foundations",
    oneLiner: "Crafting a premium airline brand identity from ground to sky.",
    image: workFly,
    tags: ["Brand Strategy", "Visual Identity", "Collateral"]
  },
  {
    slug: "brillanta",
    color: "#1F4D2B",
    client: "Brillanta Afrique",
    title: "Brillanta Afrique \u2014 Brand & Web Identity",
    category: "Brand Foundations",
    oneLiner: "A premium identity for an Africa-rooted agriculture & energy trader.",
    image: workBrillanta,
    tags: ["Brand Identity", "Website Design", "Collateral"]
  },
  {
    slug: "nelly-baradi",
    color: "#0a1a3a",
    client: "Nelly Baradi",
    title: "Nelly Baradi \u2014 Artist Campaign & Creative Direction",
    category: "Brand Foundations",
    oneLiner: "The voice behind the voice \u2014 now centre stage.",
    image: workNelly,
    tags: ["Creative Direction", "Music Marketing", "Social Media"],
    badge: "250K+ views",
    detail: {
      industry: "Music \u2014 Afropop / R&B",
      date: "March \u2013 April 2026",
      services: ["Creative Direction", "Social Media Management", "Music Marketing", "Content Production"],
      metrics: [
        { value: "250K+", label: "YouTube views in 11 days" },
        { value: "+436%", label: "Instagram organic views (28d)" },
        { value: "+41%", label: "Spotify monthly listener growth" }
      ],
      challenge: "Nelly Baradi spent years as the best-kept secret in Nigerian music \u2014 the voice behind records by Seyi Vibez, Mohbad, Peruzzi, Timaya, Oxlade, Fola, and Bella Shmurda. With her solo single 'High Me' (March 2026), she was ready to step into her own light. The challenge: reintroduce a uniquely talented artist to industry and audience alike, build a coherent voice and visual world from scratch, and turn a release moment into a movement.",
      solution: [
        {
          heading: "Creative Direction",
          body: "Defined how Nelly looks and sounds to the world \u2014 artist identity, aesthetic direction, and the content strategy that governs every touchpoint."
        },
        {
          heading: "Social Media Management",
          body: "Built her full brand voice guide \u2014 conversational, understated, lowercase, Nigerian cadence \u2014 and executed across Instagram, X, and TikTok in active collaboration with the artist."
        },
        {
          heading: "Music Marketing \u2014 High Me",
          body: "End-to-end release campaign in partnership with The 7th Management: 4-phase X rollout, press release, Meta and YouTube paid media, DSP editorial coordination, and influencer activations."
        },
        {
          heading: "Content Production",
          body: "Multiple rounds of lifestyle and performance content, designed to feel intimate, authentic, and worth watching twice."
        }
      ],
      results: "11 days post-release, 'High Me' had crossed 250K+ YouTube views and 300K+ Instagram views across the promotional period. Her X account grew from 3 followers to 136 \u2014 entirely from Slate Labs\u2013written copy \u2014 and Spotify monthly listeners climbed 41% with the campaign still in active phase.",
      numbers: [
        "YouTube: 250K+ total views on visualizer",
        "Instagram: 300K+ views (promo), +436% organic views, +590% interactions, +184% new follows (28d)",
        "Meta Paid: 230K reach, 210K engagements, 334K total post views",
        "X (Twitter): 3 \u2192 136 followers (+4,433%), 50K+ views in 14 days",
        "Spotify: 2,394 \u2192 3,382 monthly listeners (+41%)",
        "1,300+ link clicks to streaming platforms"
      ],
      deliverables: [
        "Full campaign strategy, narrative, and artist brief",
        "Brand voice guide and tone-of-voice system",
        "4-phase X (Twitter) rollout \u2014 all copy written in-house",
        "Press release written and distributed on release day",
        "Paid media campaigns across Meta and YouTube",
        "Playlist pitching and DSP editorial coordination",
        "Influencer and media activations (AlbumTalks, HypeTrybe, DebutHub)",
        "Lifestyle and performance content production",
        "Live event activations \u2014 Mainland Block Party, Tempo Lagos, Play with MIA"
      ]
    }
  }
];
const featuredSlugs = ["nelly-baradi", "44db", "vida-rosa", "fly-trinity"];
const featuredProjects = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);
const $$splitComponentImporter$6 = () => import('./work._slug-DzSTyiaJ.mjs');
const Route$b = createFileRoute("/work/$slug")({
  loader: ({
    params
  }) => {
    const project2 = projects.find((p) => p.slug === params.slug);
    if (!project2 || !project2.detail) throw notFound();
    return {
      project: project2
    };
  },
  head: ({
    params,
    loaderData
  }) => {
    const title = loaderData?.project.title ?? "Case Study";
    const desc = loaderData?.project.oneLiner ?? "Slate Labs case study.";
    const image = loaderData?.project.image;
    return {
      meta: [{
        title: `${title} \u2014 Slate Labs`
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: `${title} \u2014 Slate Labs`
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/work/${params.slug}`
      }, ...image ? [{
        property: "og:image",
        content: image
      }] : []],
      links: [{
        rel: "canonical",
        href: `/work/${params.slug}`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const project$4 = projects.find((p) => p.slug === "44db");
const $$splitComponentImporter$5 = () => import('./work.44db-lMNAyvM4.mjs');
const Route$a = createFileRoute("/work/44db")({
  head: () => ({
    meta: [{
      title: "44DB \u2014 Music Collective Branding \u2014 Slate Labs"
    }, {
      name: "description",
      content: "From under 1,000 monthly views to 300K+ in 30 days. How Slate Labs built the brand behind Nigeria's #1 rap song with 44DB."
    }, {
      property: "og:title",
      content: "44DB \u2014 Music Collective Branding \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "From under 1,000 monthly views to 300K+ in 30 days. How Slate Labs built the brand behind Nigeria's #1 rap song with 44DB."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/work/44db"
    }, {
      property: "og:image",
      content: project$4.image
    }],
    links: [{
      rel: "canonical",
      href: "/work/44db"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const project$3 = projects.find((p) => p.slug === "brillanta");
const $$splitComponentImporter$4 = () => import('./work.brillanta-CgonG2Ww.mjs');
const Route$9 = createFileRoute("/work/brillanta")({
  head: () => ({
    meta: [{
      title: "Brillanta Afrique \u2014 Brand & Web Identity \u2014 Slate Labs"
    }, {
      name: "description",
      content: project$3.oneLiner
    }, {
      property: "og:title",
      content: "Brillanta Afrique \u2014 Brand & Web Identity \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: project$3.oneLiner
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/work/brillanta"
    }, {
      property: "og:image",
      content: project$3.image
    }],
    links: [{
      rel: "canonical",
      href: "/work/brillanta"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const project$2 = projects.find((p) => p.slug === "fly-trinity");
const $$splitComponentImporter$3 = () => import('./work.fly-trinity-Y8ZQouOS.mjs');
const Route$8 = createFileRoute("/work/fly-trinity")({
  head: () => ({
    meta: [{
      title: "Fly Trinity Airways \u2014 Brand Identity \u2014 Slate Labs"
    }, {
      name: "description",
      content: project$2.oneLiner
    }, {
      property: "og:title",
      content: "Fly Trinity Airways \u2014 Brand Identity \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: project$2.oneLiner
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/work/fly-trinity"
    }, {
      property: "og:image",
      content: project$2.image
    }],
    links: [{
      rel: "canonical",
      href: "/work/fly-trinity"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import('./work.morgan-oxford-Cp02ujzY.mjs');
const project$1 = projects.find((p) => p.slug === "morgan-oxford");
const Route$7 = createFileRoute("/work/morgan-oxford")({
  head: () => ({
    meta: [{
      title: "Morgan Oxford Education \u2014 Custom CRM \u2014 Slate Labs"
    }, {
      name: "description",
      content: "Bespoke CRM built to orchestrate global student recruitment at scale for Morgan Oxford Education, paired with a full website revamp."
    }, {
      property: "og:title",
      content: "Morgan Oxford Education \u2014 Custom CRM \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "Bespoke CRM built to orchestrate global student recruitment at scale, paired with a full website revamp."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/work/morgan-oxford"
    }, {
      property: "og:image",
      content: project$1.image
    }],
    links: [{
      rel: "canonical",
      href: "/work/morgan-oxford"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const project = projects.find((p) => p.slug === "nelly-baradi");
const $$splitComponentImporter$1 = () => import('./work.nelly-baradi-CBuVXThe.mjs');
const Route$6 = createFileRoute("/work/nelly-baradi")({
  head: () => ({
    meta: [{
      title: "Nelly Baradi \u2014 Artist Campaign & Creative Direction \u2014 Slate Labs"
    }, {
      name: "description",
      content: project.oneLiner
    }, {
      property: "og:title",
      content: "Nelly Baradi \u2014 Artist Campaign \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: project.oneLiner
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/work/nelly-baradi"
    }, {
      property: "og:image",
      content: project.image
    }],
    links: [{
      rel: "canonical",
      href: "/work/nelly-baradi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import('./work.vida-rosa-D6srpm-4.mjs');
const Route$5 = createFileRoute("/work/vida-rosa")({
  head: () => ({
    meta: [{
      title: "Vida Rosa \u2014 Luxury Automotive Marketing \u2014 Slate Labs"
    }, {
      name: "description",
      content: "Luxury marketing for one of Lagos's most exclusive dealerships. How Slate Labs reaches Nigeria's HNW automotive buyers through precision content and paid media."
    }, {
      property: "og:title",
      content: "Vida Rosa \u2014 Luxury Automotive Marketing \u2014 Slate Labs"
    }, {
      property: "og:description",
      content: "Luxury marketing for one of Lagos's most exclusive dealerships. Precision content and paid media for Nigeria's executive class."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/work/vida-rosa"
    }, {
      property: "og:image",
      content: workVidaRosa
    }],
    links: [{
      rel: "canonical",
      href: "/work/vida-rosa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  projectType: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(5e3),
  // Honeypot — bots fill this. Must be empty.
  website: z.string().max(0).optional().or(z.literal(""))
});
const LOG_PREFIX = "contact-endpoint:";
async function enqueueEmail(appOrigin, serviceKey, body) {
  const res = await fetch(`${appOrigin}/lovable/email/transactional/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${serviceKey}`
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text2 = await res.text().catch(() => "<unreadable>");
    throw new Error(`send route ${res.status}: ${text2}`);
  }
}
const Route$4 = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = "https://uyzmaupmdfntanjsknmb.supabase.co";
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!serviceKey) {
          console.error(LOG_PREFIX, "missing env vars");
          return Response.json(
            { error: "Server configuration error" },
            { status: 500 }
          );
        }
        let raw;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = ContactSchema.safeParse(raw);
        if (!parsed.success) {
          const honeypotIssue = parsed.error.issues.find(
            (i) => i.path[0] === "website"
          );
          if (honeypotIssue) {
            console.warn(LOG_PREFIX, "honeypot triggered");
            return Response.json({ ok: true });
          }
          return Response.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid input" },
            { status: 400 }
          );
        }
        const data = parsed.data;
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? request.headers.get("cf-connecting-ip") ?? null;
        const userAgent = request.headers.get("user-agent") ?? null;
        const supabase = createClient(supabaseUrl, serviceKey);
        const { data: inserted, error: insertError } = await supabase.from("contact_submissions").insert({
          name: data.name,
          email: data.email,
          company: data.company || null,
          project_type: data.projectType || null,
          budget: data.budget || null,
          message: data.message,
          ip,
          user_agent: userAgent
        }).select("id, created_at").single();
        if (insertError || !inserted) {
          console.error(LOG_PREFIX, "insert failed", insertError);
          return Response.json(
            { error: "Could not save submission" },
            { status: 500 }
          );
        }
        const submissionId = inserted.id;
        const origin = new URL(request.url).origin;
        try {
          await enqueueEmail(origin, serviceKey, {
            templateName: "contact-confirmation",
            recipientEmail: data.email,
            idempotencyKey: `contact-confirm-${submissionId}`,
            templateData: {
              name: data.name,
              projectType: data.projectType || void 0,
              message: data.message
            }
          });
        } catch (err) {
          console.error(LOG_PREFIX, "confirmation enqueue failed", err);
        }
        try {
          await enqueueEmail(origin, serviceKey, {
            templateName: "contact-internal-notification",
            // recipient is overridden by template `to`, but pass for clarity
            recipientEmail: "hello@slatelabshq.com",
            idempotencyKey: `contact-internal-${submissionId}`,
            templateData: {
              name: data.name,
              email: data.email,
              company: data.company || void 0,
              projectType: data.projectType || void 0,
              budget: data.budget || void 0,
              message: data.message,
              ip: ip ?? void 0,
              userAgent: userAgent ?? void 0,
              submissionId,
              receivedAt: inserted.created_at
            }
          });
        } catch (err) {
          console.error(LOG_PREFIX, "internal notification enqueue failed", err);
        }
        return Response.json({ ok: true, id: submissionId });
      },
      OPTIONS: async () => new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      })
    }
  }
});
function parseSuppressionPayload(body) {
  const parsed = JSON.parse(body);
  if (!parsed.data) {
    throw new Error("Missing data field in payload");
  }
  const data = parsed.data;
  if (!data.email || !data.reason) {
    throw new Error("Missing required fields: email, reason");
  }
  return data;
}
function mapReasonToStatus(reason) {
  switch (reason) {
    case "bounce":
      return "bounced";
    case "complaint":
      return "complained";
    default:
      return "suppressed";
  }
}
function mapReasonToMessage(reason) {
  switch (reason) {
    case "bounce":
      return "Permanent bounce \u2014 email address is invalid or rejected";
    case "complaint":
      return "Spam complaint \u2014 recipient marked email as spam";
    case "unsubscribe":
      return "Recipient unsubscribed";
    default:
      return "Email suppressed";
  }
}
const Route$3 = createFileRoute("/lovable/email/suppression")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        const supabaseUrl = "https://uyzmaupmdfntanjsknmb.supabase.co";
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!apiKey || !supabaseUrl || !supabaseServiceKey) {
          console.error("Missing required environment variables");
          return Response.json({ error: "Server configuration error" }, { status: 500 });
        }
        let payload;
        try {
          const verified = await verifyWebhookRequest({
            req: request,
            secret: apiKey,
            parser: parseSuppressionPayload
          });
          payload = verified.payload;
        } catch (error) {
          if (error instanceof WebhookError) {
            switch (error.code) {
              case "invalid_signature":
                console.error("Invalid webhook signature");
                return Response.json({ error: "Invalid signature" }, { status: 401 });
              case "stale_timestamp":
                console.error("Stale webhook timestamp");
                return Response.json({ error: "Stale timestamp" }, { status: 401 });
              case "invalid_payload":
              case "invalid_json":
                console.error("Invalid payload", { code: error.code });
                return Response.json({ error: "Invalid payload" }, { status: 400 });
              default:
                console.error("Webhook verification failed", {
                  code: error.code,
                  message: error.message
                });
                return Response.json({ error: "Verification failed" }, { status: 401 });
            }
          }
          console.error("Unexpected error during verification", { error });
          return Response.json({ error: "Internal error" }, { status: 500 });
        }
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const normalizedEmail = payload.email.toLowerCase();
        const { error: suppressError } = await supabase.from("suppressed_emails").upsert(
          {
            email: normalizedEmail,
            reason: payload.reason,
            metadata: payload.metadata ?? null
          },
          { onConflict: "email" }
        );
        if (suppressError) {
          console.error("Failed to upsert suppressed email", {
            error: suppressError,
            email_redacted: normalizedEmail[0] + "***@" + normalizedEmail.split("@")[1]
          });
          return Response.json({ error: "Failed to write suppression" }, { status: 500 });
        }
        const sendLogStatus = mapReasonToStatus(payload.reason);
        const sendLogMessage = mapReasonToMessage(payload.reason);
        const { error: insertError } = await supabase.from("email_send_log").insert({
          message_id: payload.message_id ?? null,
          template_name: "system",
          recipient_email: normalizedEmail,
          status: sendLogStatus,
          error_message: sendLogMessage,
          metadata: payload.metadata ?? null
        });
        if (insertError) {
          console.warn("Failed to insert email_send_log", {
            error: insertError
          });
        }
        console.log("Suppression processed", {
          email_redacted: normalizedEmail[0] + "***@" + normalizedEmail.split("@")[1],
          reason: payload.reason,
          is_retry: payload.is_retry,
          retry_count: payload.retry_count,
          has_message_id: !!payload.message_id
        });
        return Response.json({ success: true });
      }
    }
  }
});
const MAX_RETRIES = 5;
const DEFAULT_BATCH_SIZE = 10;
const DEFAULT_SEND_DELAY_MS = 200;
const DEFAULT_AUTH_TTL_MINUTES = 15;
const DEFAULT_TRANSACTIONAL_TTL_MINUTES = 60;
function isRateLimited(error) {
  if (error && typeof error === "object" && "status" in error) {
    return error.status === 429;
  }
  return error instanceof Error && error.message.includes("429");
}
function isForbidden(error) {
  if (error && typeof error === "object" && "status" in error) {
    return error.status === 403;
  }
  return error instanceof Error && error.message.includes("403");
}
function getRetryAfterSeconds(error) {
  if (error && typeof error === "object" && "retryAfterSeconds" in error) {
    return error.retryAfterSeconds ?? 60;
  }
  return 60;
}
async function moveToDlq(supabase, queue, msg, reason) {
  const payload = msg.message;
  await supabase.from("email_send_log").insert({
    message_id: payload.message_id,
    template_name: payload.label || queue,
    recipient_email: payload.to,
    status: "dlq",
    error_message: reason
  });
  const { error } = await supabase.rpc("move_to_dlq", {
    source_queue: queue,
    dlq_name: `${queue}_dlq`,
    message_id: msg.msg_id,
    payload
  });
  if (error) {
    console.error("Failed to move message to DLQ", { queue, msg_id: msg.msg_id, reason, error });
  }
}
const Route$2 = createFileRoute("/lovable/email/queue/process")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        const supabaseUrl = "https://uyzmaupmdfntanjsknmb.supabase.co";
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!apiKey || !supabaseUrl || !supabaseServiceKey) {
          console.error("Missing required environment variables");
          return Response.json(
            { error: "Server configuration error" },
            { status: 500 }
          );
        }
        const authHeader = request.headers.get("Authorization");
        if (!authHeader?.startsWith("Bearer ")) {
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }
        const token = authHeader.slice("Bearer ".length).trim();
        if (token !== supabaseServiceKey) {
          return Response.json({ error: "Forbidden" }, { status: 403 });
        }
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { data: state } = await supabase.from("email_send_state").select("retry_after_until, batch_size, send_delay_ms, auth_email_ttl_minutes, transactional_email_ttl_minutes").single();
        if (state?.retry_after_until && new Date(state.retry_after_until) > /* @__PURE__ */ new Date()) {
          return Response.json({ skipped: true, reason: "rate_limited" });
        }
        const batchSize = state?.batch_size ?? DEFAULT_BATCH_SIZE;
        const sendDelayMs = state?.send_delay_ms ?? DEFAULT_SEND_DELAY_MS;
        const ttlMinutes = {
          auth_emails: state?.auth_email_ttl_minutes ?? DEFAULT_AUTH_TTL_MINUTES,
          transactional_emails: state?.transactional_email_ttl_minutes ?? DEFAULT_TRANSACTIONAL_TTL_MINUTES
        };
        let totalProcessed = 0;
        for (const queue of ["auth_emails", "transactional_emails"]) {
          const { data: messages, error: readError } = await supabase.rpc("read_email_batch", {
            queue_name: queue,
            batch_size: batchSize,
            vt: 30
          });
          if (readError) {
            console.error("Failed to read email batch", { queue, error: readError });
            continue;
          }
          if (!messages?.length) continue;
          const messageIds = Array.from(
            new Set(
              messages.map(
                (msg) => msg?.message?.message_id && typeof msg.message.message_id === "string" ? msg.message.message_id : null
              ).filter((id) => Boolean(id))
            )
          );
          const failedAttemptsByMessageId = /* @__PURE__ */ new Map();
          if (messageIds.length > 0) {
            const { data: failedRows, error: failedRowsError } = await supabase.from("email_send_log").select("message_id").in("message_id", messageIds).eq("status", "failed");
            if (failedRowsError) {
              console.error("Failed to load failed-attempt counters", {
                queue,
                error: failedRowsError
              });
            } else {
              for (const row2 of failedRows ?? []) {
                const messageId = row2?.message_id;
                if (typeof messageId !== "string" || !messageId) continue;
                failedAttemptsByMessageId.set(
                  messageId,
                  (failedAttemptsByMessageId.get(messageId) ?? 0) + 1
                );
              }
            }
          }
          for (let i = 0; i < messages.length; i++) {
            const msg = messages[i];
            const payload = msg.message;
            const failedAttempts = payload?.message_id && typeof payload.message_id === "string" ? failedAttemptsByMessageId.get(payload.message_id) ?? 0 : msg.read_ct ?? 0;
            const queuedAt = payload.queued_at ?? msg.enqueued_at;
            if (queuedAt) {
              const ageMs = Date.now() - new Date(queuedAt).getTime();
              const maxAgeMs = ttlMinutes[queue] * 60 * 1e3;
              if (ageMs > maxAgeMs) {
                console.warn("Email expired (TTL exceeded)", {
                  queue,
                  msg_id: msg.msg_id,
                  queued_at: queuedAt,
                  ttl_minutes: ttlMinutes[queue]
                });
                await moveToDlq(supabase, queue, msg, `TTL exceeded (${ttlMinutes[queue]} minutes)`);
                continue;
              }
            }
            if (failedAttempts >= MAX_RETRIES) {
              await moveToDlq(supabase, queue, msg, `Max retries (${MAX_RETRIES}) exceeded (attempted ${failedAttempts} times)`);
              continue;
            }
            if (payload.message_id) {
              const { data: alreadySent } = await supabase.from("email_send_log").select("id").eq("message_id", payload.message_id).eq("status", "sent").maybeSingle();
              if (alreadySent) {
                console.warn("Skipping duplicate send (already sent)", {
                  queue,
                  msg_id: msg.msg_id,
                  message_id: payload.message_id
                });
                const { error: dupDelError } = await supabase.rpc("delete_email", {
                  queue_name: queue,
                  message_id: msg.msg_id
                });
                if (dupDelError) {
                  console.error("Failed to delete duplicate message from queue", { queue, msg_id: msg.msg_id, error: dupDelError });
                }
                continue;
              }
            }
            try {
              await sendLovableEmail(
                {
                  run_id: payload.run_id,
                  to: payload.to,
                  from: payload.from,
                  sender_domain: payload.sender_domain,
                  subject: payload.subject,
                  html: payload.html,
                  text: payload.text,
                  purpose: payload.purpose,
                  label: payload.label,
                  idempotency_key: payload.idempotency_key,
                  unsubscribe_token: payload.unsubscribe_token,
                  message_id: payload.message_id
                },
                { apiKey, sendUrl: process.env.LOVABLE_SEND_URL }
              );
              await supabase.from("email_send_log").insert({
                message_id: payload.message_id,
                template_name: payload.label || queue,
                recipient_email: payload.to,
                status: "sent"
              });
              const { error: delError } = await supabase.rpc("delete_email", {
                queue_name: queue,
                message_id: msg.msg_id
              });
              if (delError) {
                console.error("Failed to delete sent message from queue", { queue, msg_id: msg.msg_id, error: delError });
              }
              totalProcessed++;
            } catch (error) {
              const errorMsg = error instanceof Error ? error.message : String(error);
              console.error("Email send failed", {
                queue,
                msg_id: msg.msg_id,
                read_ct: msg.read_ct,
                failed_attempts: failedAttempts,
                error: errorMsg
              });
              if (isRateLimited(error)) {
                await supabase.from("email_send_log").insert({
                  message_id: payload.message_id,
                  template_name: payload.label || queue,
                  recipient_email: payload.to,
                  status: "failed",
                  error_message: errorMsg.slice(0, 1e3)
                });
                const retryAfterSecs = getRetryAfterSeconds(error);
                await supabase.from("email_send_state").update({
                  retry_after_until: new Date(
                    Date.now() + retryAfterSecs * 1e3
                  ).toISOString(),
                  updated_at: (/* @__PURE__ */ new Date()).toISOString()
                }).eq("id", 1);
                return Response.json({ processed: totalProcessed, stopped: "rate_limited" });
              }
              if (isForbidden(error)) {
                await moveToDlq(supabase, queue, msg, errorMsg.slice(0, 1e3));
                return Response.json({ processed: totalProcessed, stopped: "forbidden" });
              }
              await supabase.from("email_send_log").insert({
                message_id: payload.message_id,
                template_name: payload.label || queue,
                recipient_email: payload.to,
                status: "failed",
                error_message: errorMsg.slice(0, 1e3)
              });
              if (payload?.message_id && typeof payload.message_id === "string") {
                failedAttemptsByMessageId.set(payload.message_id, failedAttempts + 1);
              }
            }
            if (i < messages.length - 1) {
              await new Promise((r) => setTimeout(r, sendDelayMs));
            }
          }
        }
        return Response.json({ processed: totalProcessed });
      }
    }
  }
});
const SITE_NAME$1 = "Slate Labs";
const ContactConfirmationEmail = ({
  name,
  projectType,
  message
}) => /* @__PURE__ */ jsxs(Html, { lang: "en", dir: "ltr", children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsxs(Preview, { children: [
    "Thanks for reaching out to ",
    SITE_NAME$1,
    " \u2014 we'll reply within 24 hours."
  ] }),
  /* @__PURE__ */ jsx(Body, { style: main$1, children: /* @__PURE__ */ jsxs(Container, { style: container$1, children: [
    /* @__PURE__ */ jsx(Text, { style: brand$1, children: "SLATE LABS" }),
    /* @__PURE__ */ jsx(Heading, { style: h1$1, children: name ? `Thanks, ${name}.` : "Thanks for reaching out." }),
    /* @__PURE__ */ jsxs(Text, { style: text, children: [
      "We've received your message and a real human at ",
      SITE_NAME$1,
      " will get back to you within 24 hours."
    ] }),
    (projectType || message) && /* @__PURE__ */ jsxs(Section, { style: card$1, children: [
      /* @__PURE__ */ jsx(Text, { style: cardLabel, children: "Your enquiry" }),
      projectType && /* @__PURE__ */ jsxs(Text, { style: cardLine, children: [
        /* @__PURE__ */ jsx("strong", { style: strong, children: "Project type:" }),
        " ",
        projectType
      ] }),
      message && /* @__PURE__ */ jsxs(Text, { style: cardLine, children: [
        /* @__PURE__ */ jsx("strong", { style: strong, children: "Message:" }),
        " ",
        message
      ] })
    ] }),
    /* @__PURE__ */ jsx(Text, { style: text, children: "In the meantime, feel free to reply directly to this email if you'd like to share more context \u2014 or book a 20-minute intro call from our contact page." }),
    /* @__PURE__ */ jsxs(Text, { style: footer$1, children: [
      "\u2014 The ",
      SITE_NAME$1,
      " team \xB7 Lagos, Nigeria"
    ] })
  ] }) })
] });
const template$1 = {
  component: ContactConfirmationEmail,
  subject: "Thanks for reaching out \u2014 Slate Labs",
  displayName: "Contact confirmation",
  previewData: {
    name: "Jane",
    projectType: "Digital Platforms",
    message: "We're rebuilding our marketing site and want to start in Q3."
  }
};
const main$1 = {
  backgroundColor: "#ffffff",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
};
const container$1 = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 24px"
};
const brand$1 = {
  fontSize: "11px",
  letterSpacing: "0.2em",
  color: "#0099BF",
  fontWeight: 600,
  margin: "0 0 24px"
};
const h1$1 = {
  fontSize: "28px",
  lineHeight: "1.15",
  letterSpacing: "-0.02em",
  fontWeight: 500,
  color: "#111111",
  margin: "0 0 20px"
};
const text = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#3f3f3d",
  margin: "0 0 18px"
};
const card$1 = {
  backgroundColor: "#F2F1EC",
  borderRadius: "16px",
  padding: "20px 22px",
  margin: "8px 0 22px"
};
const cardLabel = {
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#6B6B68",
  margin: "0 0 10px",
  fontWeight: 600
};
const cardLine = {
  fontSize: "14px",
  lineHeight: "1.55",
  color: "#111111",
  margin: "0 0 8px"
};
const strong = { color: "#111111", fontWeight: 600 };
const footer$1 = {
  fontSize: "13px",
  color: "#6B6B68",
  margin: "32px 0 0"
};
const Row = ({ label, value }) => value ? /* @__PURE__ */ jsxs(Text, { style: row, children: [
  /* @__PURE__ */ jsx("strong", { style: rowLabel, children: label }),
  /* @__PURE__ */ jsx("span", { style: rowValue, children: value })
] }) : null;
const InternalNotificationEmail = (p) => /* @__PURE__ */ jsxs(Html, { lang: "en", dir: "ltr", children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsxs(Preview, { children: [
    "New enquiry from ",
    p.name ?? "someone",
    p.projectType ? ` (${p.projectType})` : ""
  ] }),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx(Text, { style: brand, children: "SLATE LABS \xB7 NEW ENQUIRY" }),
    /* @__PURE__ */ jsxs(Heading, { style: h1, children: [
      p.name ?? "New enquiry",
      p.projectType ? ` \u2014 ${p.projectType}` : ""
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: card, children: [
      /* @__PURE__ */ jsx(Row, { label: "Name", value: p.name }),
      /* @__PURE__ */ jsx(Row, { label: "Email", value: p.email }),
      /* @__PURE__ */ jsx(Row, { label: "Company", value: p.company }),
      /* @__PURE__ */ jsx(Row, { label: "Project type", value: p.projectType }),
      /* @__PURE__ */ jsx(Row, { label: "Budget", value: p.budget })
    ] }),
    p.message && /* @__PURE__ */ jsxs(Section, { style: messageCard, children: [
      /* @__PURE__ */ jsx(Text, { style: msgLabel, children: "Message" }),
      /* @__PURE__ */ jsx(Text, { style: msgBody, children: p.message })
    ] }),
    /* @__PURE__ */ jsxs(Section, { style: metaCard, children: [
      /* @__PURE__ */ jsx(Row, { label: "Submission ID", value: p.submissionId }),
      /* @__PURE__ */ jsx(Row, { label: "Received at", value: p.receivedAt }),
      /* @__PURE__ */ jsx(Row, { label: "IP", value: p.ip }),
      /* @__PURE__ */ jsx(Row, { label: "User agent", value: p.userAgent })
    ] }),
    /* @__PURE__ */ jsxs(Text, { style: footer, children: [
      "Reply directly to this email to respond to ",
      p.name ?? "the sender",
      "."
    ] })
  ] }) })
] });
const template = {
  component: InternalNotificationEmail,
  subject: (d) => `New enquiry \u2014 ${d.name ?? "anonymous"}${d.projectType ? ` (${d.projectType})` : ""}`,
  to: "hello@slatelabshq.com",
  displayName: "Internal contact notification",
  previewData: {
    name: "Jane Doe",
    email: "jane@example.com",
    company: "Acme Co.",
    projectType: "Digital Platforms",
    budget: "\u20A61M\u2013\u20A63M",
    message: "We're rebuilding our marketing site and want to start in Q3.",
    ip: "203.0.113.42",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)",
    submissionId: "00000000-0000-0000-0000-000000000000",
    receivedAt: (/* @__PURE__ */ new Date()).toISOString()
  }
};
const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
};
const container = { maxWidth: "600px", margin: "0 auto", padding: "40px 24px" };
const brand = {
  fontSize: "11px",
  letterSpacing: "0.2em",
  color: "#0099BF",
  fontWeight: 600,
  margin: "0 0 16px"
};
const h1 = {
  fontSize: "24px",
  lineHeight: "1.2",
  letterSpacing: "-0.02em",
  fontWeight: 500,
  color: "#111111",
  margin: "0 0 24px"
};
const card = {
  backgroundColor: "#F2F1EC",
  borderRadius: "16px",
  padding: "18px 22px",
  margin: "0 0 16px"
};
const messageCard = {
  backgroundColor: "#FAFAF7",
  borderLeft: "3px solid #0099BF",
  borderRadius: "8px",
  padding: "16px 20px",
  margin: "0 0 16px"
};
const metaCard = {
  backgroundColor: "#FAFAF7",
  borderRadius: "12px",
  padding: "14px 20px",
  margin: "0 0 16px",
  fontSize: "12px"
};
const row = { fontSize: "14px", lineHeight: "1.6", color: "#111111", margin: "0 0 6px" };
const rowLabel = {
  display: "inline-block",
  minWidth: "120px",
  color: "#6B6B68",
  fontWeight: 600
};
const rowValue = { color: "#111111" };
const msgLabel = {
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#6B6B68",
  margin: "0 0 8px",
  fontWeight: 600
};
const msgBody = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#111111",
  whiteSpace: "pre-wrap",
  margin: 0
};
const footer = { fontSize: "13px", color: "#6B6B68", margin: "20px 0 0" };
const TEMPLATES = {
  "contact-confirmation": template$1,
  "contact-internal-notification": template
};
const Route$1 = createFileRoute("/lovable/email/transactional/preview")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return Response.json(
            { error: "Server configuration error" },
            { status: 500 }
          );
        }
        const authHeader = request.headers.get("Authorization");
        const token = authHeader?.replace(/^Bearer\s+/i, "");
        if (token !== apiKey) {
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }
        const templateNames = Object.keys(TEMPLATES);
        const results = [];
        for (const name of templateNames) {
          const entry = TEMPLATES[name];
          const displayName = entry.displayName || name;
          if (!entry.previewData) {
            results.push({
              templateName: name,
              displayName,
              subject: "",
              html: "",
              status: "preview_data_required"
            });
            continue;
          }
          try {
            const html = await render(
              React.createElement(entry.component, entry.previewData)
            );
            const resolvedSubject = typeof entry.subject === "function" ? entry.subject(entry.previewData) : entry.subject;
            results.push({
              templateName: name,
              displayName,
              subject: resolvedSubject,
              html,
              status: "ready"
            });
          } catch (err) {
            console.error("Failed to render template for preview", {
              template: name,
              error: err
            });
            results.push({
              templateName: name,
              displayName,
              subject: "",
              html: "",
              status: "render_failed",
              errorMessage: err instanceof Error ? err.message : String(err)
            });
          }
        }
        return Response.json({ templates: results });
      }
    }
  }
});
const SITE_NAME = "Slatelabs Launchpad";
const SENDER_DOMAIN = "notify.www.slatelabshq.com";
const FROM_DOMAIN = "www.slatelabshq.com";
function redactEmail(email) {
  if (!email) return "***";
  const [localPart, domain] = email.split("@");
  if (!localPart || !domain) return "***";
  return `${localPart[0]}***@${domain}`;
}
function generateToken() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
const Route = createFileRoute("/lovable/email/transactional/send")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = "https://uyzmaupmdfntanjsknmb.supabase.co";
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseServiceKey) {
          console.error("Missing required environment variables");
          return Response.json(
            { error: "Server configuration error" },
            { status: 500 }
          );
        }
        const authHeader = request.headers.get("Authorization");
        if (!authHeader?.startsWith("Bearer ")) {
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }
        const token = authHeader.slice("Bearer ".length).trim();
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        if (token !== supabaseServiceKey) {
          const { data: { user }, error: authError } = await supabase.auth.getUser(token);
          if (authError || !user) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
          }
        }
        let templateName;
        let recipientEmail;
        let idempotencyKey;
        let messageId;
        let templateData = {};
        try {
          const body = await request.json();
          templateName = body.templateName || body.template_name;
          recipientEmail = body.recipientEmail || body.recipient_email;
          messageId = crypto.randomUUID();
          idempotencyKey = body.idempotencyKey || body.idempotency_key || messageId;
          if (body.templateData && typeof body.templateData === "object") {
            templateData = body.templateData;
          }
        } catch {
          return Response.json(
            { error: "Invalid JSON in request body" },
            { status: 400 }
          );
        }
        if (!templateName) {
          return Response.json(
            { error: "templateName is required" },
            { status: 400 }
          );
        }
        const template2 = TEMPLATES[templateName];
        if (!template2) {
          console.error("Template not found in registry", { templateName });
          return Response.json(
            {
              error: `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(", ")}`
            },
            { status: 404 }
          );
        }
        const effectiveRecipient = template2.to || recipientEmail;
        if (!effectiveRecipient) {
          return Response.json(
            {
              error: "recipientEmail is required (unless the template defines a fixed recipient)"
            },
            { status: 400 }
          );
        }
        const { data: suppressed, error: suppressionError } = await supabase.from("suppressed_emails").select("id").eq("email", effectiveRecipient.toLowerCase()).maybeSingle();
        if (suppressionError) {
          console.error("Suppression check failed \u2014 refusing to send", {
            error: suppressionError,
            recipient_redacted: redactEmail(effectiveRecipient)
          });
          return Response.json(
            { error: "Failed to verify suppression status" },
            { status: 500 }
          );
        }
        if (suppressed) {
          await supabase.from("email_send_log").insert({
            message_id: messageId,
            template_name: templateName,
            recipient_email: effectiveRecipient,
            status: "suppressed"
          });
          console.log("Email suppressed", {
            templateName,
            recipient_redacted: redactEmail(effectiveRecipient)
          });
          return Response.json({ success: false, reason: "email_suppressed" });
        }
        const normalizedEmail = effectiveRecipient.toLowerCase();
        let unsubscribeToken;
        const { data: existingToken, error: tokenLookupError } = await supabase.from("email_unsubscribe_tokens").select("token, used_at").eq("email", normalizedEmail).maybeSingle();
        if (tokenLookupError) {
          console.error("Token lookup failed", {
            error: tokenLookupError,
            email_redacted: redactEmail(normalizedEmail)
          });
          await supabase.from("email_send_log").insert({
            message_id: messageId,
            template_name: templateName,
            recipient_email: effectiveRecipient,
            status: "failed",
            error_message: "Failed to look up unsubscribe token"
          });
          return Response.json(
            { error: "Failed to prepare email" },
            { status: 500 }
          );
        }
        if (existingToken && !existingToken.used_at) {
          unsubscribeToken = existingToken.token;
        } else if (!existingToken) {
          unsubscribeToken = generateToken();
          const { error: tokenError } = await supabase.from("email_unsubscribe_tokens").upsert(
            { token: unsubscribeToken, email: normalizedEmail },
            { onConflict: "email", ignoreDuplicates: true }
          );
          if (tokenError) {
            console.error("Failed to create unsubscribe token", {
              error: tokenError
            });
            await supabase.from("email_send_log").insert({
              message_id: messageId,
              template_name: templateName,
              recipient_email: effectiveRecipient,
              status: "failed",
              error_message: "Failed to create unsubscribe token"
            });
            return Response.json(
              { error: "Failed to prepare email" },
              { status: 500 }
            );
          }
          const { data: storedToken, error: reReadError } = await supabase.from("email_unsubscribe_tokens").select("token").eq("email", normalizedEmail).maybeSingle();
          if (reReadError || !storedToken) {
            console.error("Failed to read back unsubscribe token after upsert", {
              error: reReadError,
              email_redacted: redactEmail(normalizedEmail)
            });
            await supabase.from("email_send_log").insert({
              message_id: messageId,
              template_name: templateName,
              recipient_email: effectiveRecipient,
              status: "failed",
              error_message: "Failed to confirm unsubscribe token storage"
            });
            return Response.json(
              { error: "Failed to prepare email" },
              { status: 500 }
            );
          }
          unsubscribeToken = storedToken.token;
        } else {
          console.warn("Unsubscribe token already used but email not suppressed", {
            email_redacted: redactEmail(normalizedEmail)
          });
          await supabase.from("email_send_log").insert({
            message_id: messageId,
            template_name: templateName,
            recipient_email: effectiveRecipient,
            status: "suppressed",
            error_message: "Unsubscribe token used but email missing from suppressed list"
          });
          return Response.json({ success: false, reason: "email_suppressed" });
        }
        const element = React.createElement(template2.component, templateData);
        const html = await render(element);
        const plainText = await render(element, { plainText: true });
        const resolvedSubject = typeof template2.subject === "function" ? template2.subject(templateData) : template2.subject;
        await supabase.from("email_send_log").insert({
          message_id: messageId,
          template_name: templateName,
          recipient_email: effectiveRecipient,
          status: "pending"
        });
        const { error: enqueueError } = await supabase.rpc("enqueue_email", {
          queue_name: "transactional_emails",
          payload: {
            message_id: messageId,
            to: effectiveRecipient,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            sender_domain: SENDER_DOMAIN,
            subject: resolvedSubject,
            html,
            text: plainText,
            purpose: "transactional",
            label: templateName,
            idempotency_key: idempotencyKey,
            unsubscribe_token: unsubscribeToken,
            queued_at: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
        if (enqueueError) {
          console.error("Failed to enqueue email", {
            error: enqueueError,
            templateName,
            recipient_redacted: redactEmail(effectiveRecipient)
          });
          await supabase.from("email_send_log").insert({
            message_id: messageId,
            template_name: templateName,
            recipient_email: effectiveRecipient,
            status: "failed",
            error_message: "Failed to enqueue email"
          });
          return Response.json(
            { error: "Failed to enqueue email" },
            { status: 500 }
          );
        }
        console.log("Transactional email enqueued", {
          templateName,
          recipient_redacted: redactEmail(effectiveRecipient)
        });
        return Response.json({ success: true, queued: true });
      }
    }
  }
});
const IndexRoute = Route$l.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$m
});
const AboutRoute = Route$k.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$m
});
const ContactRoute = Route$j.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$m
});
const IleEkoRoute = Route$i.update({
  id: "/ile-eko",
  path: "/ile-eko",
  getParentRoute: () => Route$m
});
const InsightsRoute = Route$h.update({
  id: "/insights",
  path: "/insights",
  getParentRoute: () => Route$m
});
const ServicesRoute = Route$g.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$m
});
const UnsubscribeRoute = Route$f.update({
  id: "/unsubscribe",
  path: "/unsubscribe",
  getParentRoute: () => Route$m
});
const WorkRoute = Route$e.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$m
});
const EmailUnsubscribeRoute = Route$d.update({
  id: "/email/unsubscribe",
  path: "/email/unsubscribe",
  getParentRoute: () => Route$m
});
const InsightsSlugRoute = Route$c.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => InsightsRoute
});
const WorkSlugRoute = Route$b.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => WorkRoute
});
const Work44dbRoute = Route$a.update({
  id: "/44db",
  path: "/44db",
  getParentRoute: () => WorkRoute
});
const WorkBrillantaRoute = Route$9.update({
  id: "/brillanta",
  path: "/brillanta",
  getParentRoute: () => WorkRoute
});
const WorkFlyTrinityRoute = Route$8.update({
  id: "/fly-trinity",
  path: "/fly-trinity",
  getParentRoute: () => WorkRoute
});
const WorkMorganOxfordRoute = Route$7.update({
  id: "/morgan-oxford",
  path: "/morgan-oxford",
  getParentRoute: () => WorkRoute
});
const WorkNellyBaradiRoute = Route$6.update({
  id: "/nelly-baradi",
  path: "/nelly-baradi",
  getParentRoute: () => WorkRoute
});
const WorkVidaRosaRoute = Route$5.update({
  id: "/vida-rosa",
  path: "/vida-rosa",
  getParentRoute: () => WorkRoute
});
const ApiPublicContactRoute = Route$4.update({
  id: "/api/public/contact",
  path: "/api/public/contact",
  getParentRoute: () => Route$m
});
const LovableEmailSuppressionRoute = Route$3.update({
  id: "/lovable/email/suppression",
  path: "/lovable/email/suppression",
  getParentRoute: () => Route$m
});
const LovableEmailQueueProcessRoute = Route$2.update({
  id: "/lovable/email/queue/process",
  path: "/lovable/email/queue/process",
  getParentRoute: () => Route$m
});
const LovableEmailTransactionalPreviewRoute = Route$1.update({
  id: "/lovable/email/transactional/preview",
  path: "/lovable/email/transactional/preview",
  getParentRoute: () => Route$m
});
const LovableEmailTransactionalSendRoute = Route.update({
  id: "/lovable/email/transactional/send",
  path: "/lovable/email/transactional/send",
  getParentRoute: () => Route$m
});
const InsightsRouteChildren = {
  InsightsSlugRoute
};
const InsightsRouteWithChildren = InsightsRoute._addFileChildren(
  InsightsRouteChildren
);
const WorkRouteChildren = {
  WorkSlugRoute,
  Work44dbRoute,
  WorkBrillantaRoute,
  WorkFlyTrinityRoute,
  WorkMorganOxfordRoute,
  WorkNellyBaradiRoute,
  WorkVidaRosaRoute
};
const WorkRouteWithChildren = WorkRoute._addFileChildren(WorkRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  IleEkoRoute,
  InsightsRoute: InsightsRouteWithChildren,
  ServicesRoute,
  UnsubscribeRoute,
  WorkRoute: WorkRouteWithChildren,
  EmailUnsubscribeRoute,
  ApiPublicContactRoute,
  LovableEmailSuppressionRoute,
  LovableEmailQueueProcessRoute,
  LovableEmailTransactionalPreviewRoute,
  LovableEmailTransactionalSendRoute
};
const routeTree = Route$m._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));

export { Route$c as R, workVidaRosa as a, workIleEko as b, workMorgan as c, formatPostDate as d, workBrillanta as e, featuredProjects as f, getLatestPosts as g, posts as h, work44db as i, workFly as j, Route$b as k, logoWordmark as l, project$4 as m, project$3 as n, project$2 as o, projects as p, project as q, router as r, trackEvent as t, workNelly as w };
//# sourceMappingURL=router-Pw5mFUwk.mjs.map
