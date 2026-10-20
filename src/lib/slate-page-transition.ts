const EXIT_MS = 900;
const ENTER_MS = 1100;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let activeLayers: HTMLElement[] | null = null;

function clearVeils() {
  activeLayers?.forEach((l) => l.remove());
  activeLayers = null;
}

/** Drop the two-layer curtain (matches slate.js leaving animation). */
export function slateCurtainDown(): Promise<void> {
  if (prefersReducedMotion()) return Promise.resolve();
  if (activeLayers) return Promise.resolve();

  activeLayers = ["a", "b"].map((key) => {
    const el = document.createElement("div");
    el.className = `veil veil--${key}`;
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
    return el;
  });

  void activeLayers[0].offsetWidth;
  activeLayers.forEach((l) => l.classList.add("is-on"));

  return new Promise((resolve) => window.setTimeout(resolve, EXIT_MS));
}

/** Lift the curtain and remove veil nodes (arrival). */
export function slateCurtainUp(): Promise<void> {
  if (prefersReducedMotion() || !activeLayers) {
    clearVeils();
    return Promise.resolve();
  }

  const layers = activeLayers;
  layers.forEach((l) => l.classList.remove("is-on"));

  return new Promise((resolve) => {
    const finish = () => {
      clearVeils();
      resolve();
    };
    const fallback = window.setTimeout(finish, ENTER_MS);
    const onEnd = () => {
      window.clearTimeout(fallback);
      finish();
    };
    layers[1]?.addEventListener("transitionend", onEnd, { once: true });
  });
}

export function isInternalNavAnchor(anchor: HTMLAnchorElement): boolean {
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  let url: URL;
  try {
    url = new URL(anchor.href, window.location.href);
  } catch {
    return false;
  }

  if (url.origin !== window.location.origin) return false;
  const protocol = url.protocol;
  if (protocol !== "http:" && protocol !== "https:" && protocol !== "file:") return false;

  const samePath =
    url.pathname === window.location.pathname && url.search === window.location.search;
  if (samePath) return false;

  return true;
}

export function pathFromAnchor(anchor: HTMLAnchorElement): string {
  const url = new URL(anchor.href, window.location.href);
  return `${url.pathname}${url.search}${url.hash}`;
}
