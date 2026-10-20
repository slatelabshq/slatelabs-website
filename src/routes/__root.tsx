import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import {
  NavSheet,
  SiteFoot,
  SiteHead,
  SlateScript,
  WhatsAppLink,
} from "@/components/slate/SiteChrome";
import { SlateMotionOutlet } from "@/components/slate/SlateMotionOutlet";
import { initGA, trackPageview } from "@/lib/analytics";
import { Toaster } from "@/components/ui/sonner";

const THEME_BOOTSTRAP = `window.__SLATE_SPA=1;document.documentElement.classList.add('js');
(function(){var t;try{t=localStorage.getItem('slate-theme')}catch(e){}
if(t!=='light'&&t!=='dark'){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}
document.documentElement.setAttribute('data-theme',t);
var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'#0C1413':'#FFFFFF');})();`;

function NotFoundComponent() {
  return (
    <section className="section" data-ground="page">
      <div className="shell">
        <p className="mono">Error 404</p>
        <h1 className="h2">Off the slate.</h1>
        <p className="lead">This page doesn&apos;t exist — or it&apos;s moved.</p>
        <div className="cta-row">
          <Link className="btn btn--primary" to="/">Go home</Link>
          <Link className="btn btn--ghost" to="/work">See the work</Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <section className="section" data-ground="page">
      <div className="shell">
        <h1 className="h2">This page didn&apos;t load</h1>
        <p className="lead">Something went wrong on our end. Try refreshing or head back home.</p>
        <div className="cta-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a className="btn btn--ghost" href="/">Go home</a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Slate Labs" },
      { property: "og:site_name", content: "Slate Labs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: "/assets/fonts/fonts.css" },
      { rel: "stylesheet", href: "/assets/css/slate.css" },
      { rel: "icon", type: "image/png", href: "/assets/img/logo/mark-teal.png" },
      { rel: "apple-touch-icon", href: "/assets/img/logo/mark-teal.png" },
    ],
    scripts: [
      { children: THEME_BOOTSTRAP },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "Slate Labs",
          alternateName: "Slate Labs HQ",
          description:
            "Creative & Tech Agency in Lagos, Nigeria. Brand strategy, growth marketing, digital platforms, and AI automation.",
          url: "https://www.slatelabshq.com.ng",
          logo: "https://www.slatelabshq.com.ng/assets/img/logo/lockup-teal.png",
          image: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
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
    <html lang="en" suppressHydrationWarning>
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
    trackPageview(window.location.pathname + window.location.search);
    const unsub = router.subscribe("onResolved", ({ toLocation }) => {
      trackPageview((toLocation.pathname ?? "/") + (toLocation.searchStr ?? ""));
    });
    return () => unsub();
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHead />
      <main id="main">
        <SlateMotionOutlet />
      </main>
      <SiteFoot />
      <WhatsAppLink />
      <NavSheet />
      <SlateScript />
      <Toaster />
    </QueryClientProvider>
  );
}
