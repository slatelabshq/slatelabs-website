import { useRouter, useRouterState } from "@tanstack/react-router";
import { useLayoutEffect, useState } from "react";

function inViewport(el: Element, margin = 0) {
  const r = el.getBoundingClientRect();
  const h = window.innerHeight || document.documentElement.clientHeight;
  const w = window.innerWidth || document.documentElement.clientWidth;
  return r.bottom >= -margin && r.top <= h + margin && r.right >= -margin && r.left <= w + margin;
}

/** Initialise ktype + reveal for whatever is currently inside #main. */
export function runSlatePageMotion(root: ParentNode = document) {
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const main = root.querySelector("#main") ?? root;

  function splitWords(el: HTMLElement) {
    let i = 0;
    function walk(node: Node) {
      Array.from(node.childNodes).forEach((n) => {
        if (n.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          (n.textContent ?? "").split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(" "));
              return;
            }
            const w = document.createElement("span");
            const inner = document.createElement("span");
            w.className = "kw";
            inner.className = "kw-i";
            inner.style.setProperty("--i", String(i++));
            inner.textContent = part;
            w.appendChild(inner);
            frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === Node.ELEMENT_NODE && (n as Element).tagName !== "BR") {
          walk(n);
        }
      });
    }
    walk(el);
  }

  const heads = main.querySelectorAll<HTMLElement>("[data-ktype]");
  if (calm || !("IntersectionObserver" in window)) {
    heads.forEach((el) => el.classList.add("is-in"));
  } else {
    heads.forEach((el) => {
      if (el.getAttribute("data-kt") === "on") return;
      splitWords(el);
      el.setAttribute("data-kt", "on");
    });

    const show = (el: HTMLElement) => el.classList.add("is-in");
    heads.forEach((el) => {
      if (inViewport(el, 80)) show(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target as HTMLElement);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    );
    heads.forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });
    window.setTimeout(() => heads.forEach(show), 4000);
  }

  const targets = main.querySelectorAll<HTMLElement>("[data-reveal], .media--reveal");
  if (calm || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
  } else {
    const show = (el: HTMLElement, stagger: number) => {
      const own = el.style.getPropertyValue("--reveal-delay");
      if (!own) {
        el.style.setProperty("--reveal-delay", `${Math.min(stagger, 5) * 90}ms`);
        window.setTimeout(() => el.style.removeProperty("--reveal-delay"), 2600);
      }
      el.classList.add("is-in");
    };

    let stagger = 0;
    targets.forEach((el) => {
      if (inViewport(el, 120)) {
        show(el, stagger++);
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        const hits = entries.filter((e) => e.isIntersecting);
        hits.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        hits.forEach((entry, n) => {
          const el = entry.target as HTMLElement;
          show(el, n);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    targets.forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });
    window.setTimeout(() => targets.forEach((el) => el.classList.add("is-in")), 4000);
  }

  const hero = main.querySelector(".hero");
  if (hero && !calm) {
    requestAnimationFrame(() => hero.classList.add("is-live"));
  }

  const clocks = main.querySelectorAll("[data-clock]");
  if (clocks.length) {
    try {
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const tick = () => clocks.forEach((n) => (n.textContent = fmt.format(new Date())));
      tick();
    } catch {
      /* ignore */
    }
  }
}

/**
 * Re-run motion after each client navigation once the new route has actually rendered
 * (pathname alone fires too early when route chunks load asynchronously).
 */
export function useSlatePageMotion() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [resolved, setResolved] = useState(0);

  useLayoutEffect(() => {
    return router.subscribe("onResolved", () => {
      setResolved((n) => n + 1);
    });
  }, [router]);

  useLayoutEffect(() => {
    let cancelled = false;
    let outer = 0;
    let inner = 0;

    outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        if (!cancelled) runSlatePageMotion();
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [pathname, resolved]);
}
