import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { initGA, trackPageview } from "@/lib/analytics";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  const links = [
    { to: "/services", label: "Services", desc: "Brands, platforms & AI systems" },
    { to: "/work", label: "Work", desc: "Selected case studies" },
    { to: "/insights", label: "Insights", desc: "Field notes from the studio" },
    { to: "/contact", label: "Contact", desc: "Start a project" },
  ] as const;
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-6 py-24">
      <div className="max-w-2xl w-full text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">Error 404</p>
        <h1 className="mt-4 text-[clamp(4rem,12vw,9rem)] leading-none font-medium tracking-[-0.04em] text-foreground">
          Off the <span className="text-primary">slate.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted max-w-md mx-auto leading-relaxed">
          This page doesn't exist — or it's moved. Try one of the routes below, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-primary glow-primary transition-colors"
          >
            Go home
          </Link>
          <Link
            to="/insights"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface glow-subtle transition-colors"
          >
            Read Insights
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="block rounded-2xl border border-border bg-surface/40 px-5 py-4 hover:bg-surface hover:border-foreground/20 transition-colors"
              >
                <div className="text-sm font-medium text-foreground">{l.label}</div>
                <div className="text-xs text-muted mt-0.5">{l.desc}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-primary glow-primary transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface glow-subtle transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Slate Labs — Building brands & platforms on a clean slate" },
      {
        name: "description",
        content:
          "Slate Labs is a Lagos-based creative + technical agency building brands, digital platforms, and intelligent systems for businesses ready to grow exponentially.",
      },
      { name: "author", content: "Slate Labs" },
      { property: "og:site_name", content: "Slate Labs" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://slatelabshq.com/og-default.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://slatelabshq.com/og-default.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "Slate Labs",
          alternateName: "Slate Labs HQ",
          description:
            "Creative & Tech Agency in Lagos, Nigeria. Brand strategy, growth marketing, digital platforms, and AI automation.",
          url: "https://slatelabshq.com",
          logo: "https://slatelabshq.com/assets/slate-logo-wordmark.png",
          image: "https://slatelabshq.com/og-default.jpg",
          telephone: "+2347026036554",
          email: "hello@slatelabshq.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lekki Phase 1",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
          geo: { "@type": "GeoCoordinates", latitude: 6.4281, longitude: 3.4219 },
          areaServed: ["Lagos", "Nigeria", "Global"],
          sameAs: [
            "https://www.linkedin.com/company/slate-labs-hq",
            "https://instagram.com/slatelabs.hq",
            "https://tiktok.com/@slatelabs.hq",
          ],
          founder: [
            {
              "@type": "Person",
              name: "Joseph Awujoola-Kalohun",
              jobTitle: "Co-Founder & CEO",
            },
            {
              "@type": "Person",
              name: "Olasukanmi Adeyeye",
              jobTitle: "Co-Founder & CTO",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    initGA();
    // Initial pageview
    trackPageview(window.location.pathname + window.location.search);
    const unsub = router.subscribe("onResolved", ({ toLocation }) => {
      trackPageview((toLocation.pathname ?? "/") + (toLocation.searchStr ?? ""));
    });
    return () => unsub();
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:text-background focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main" className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <SiteFooter />
        <WhatsAppFab />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
