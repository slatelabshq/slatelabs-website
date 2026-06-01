// GA4 analytics — Measurement ID is public (visible in gtag.js requests), safe to inline.
// Disabled in dev to avoid polluting analytics with local traffic.

const GA_ID = "G-B1DBF35GW9";
const ENABLED = !!GA_ID && import.meta.env.PROD;

let initialized = false;

export function initGA(): void {
  if (!ENABLED || initialized || typeof window === "undefined") return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // We send page_view manually on route change to avoid double counting SPA navs.
  window.gtag("config", GA_ID, { send_page_view: false });
}

export function trackPageview(path: string, title?: string): void {
  if (!ENABLED || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title ?? document.title,
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (!ENABLED || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params ?? {});
}
