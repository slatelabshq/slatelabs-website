import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { WhatsAppFab } from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-medium tracking-tight text-primary">404</h1>
        <h2 className="mt-4 text-xl font-medium tracking-tight text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-primary glow-primary transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
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
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
