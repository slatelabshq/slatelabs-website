import { jsxs, jsx } from 'react/jsx-runtime';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';
import { useState, useEffect, useRef } from 'react';
import { C as CALENDLY_URL } from './calendly-ow3Yvb14.mjs';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}
function Magnetic({
  children,
  strength = 0.28,
  className = ""
}) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `inline-block will-change-transform ${className}`,
      onMouseMove: (e) => {
        if (reduced) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      },
      onMouseLeave: () => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "translate3d(0, 0, 0)";
        window.setTimeout(() => {
          if (el) el.style.transition = "";
        }, 500);
      },
      children
    }
  );
}
function HomeCta() {
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden bg-ink text-ink-foreground px-6 lg:px-10 py-28 md:py-40", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" }),
    /* @__PURE__ */ jsx("div", { className: "grain-overlay absolute inset-0 opacity-35" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-[90rem] mx-auto text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/45 mb-8", children: "08 \u2014 Start" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.04em] text-balance", children: [
        "Ready for your",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "clean slate?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-ink-foreground/65 text-lg max-w-xl mx-auto leading-relaxed", children: "Fresh start. Clear vision. Exponential growth. Let's build something the market hasn't seen yet." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Magnetic, { children: /* @__PURE__ */ jsx(CtaButton, { to: "/contact", variant: "inverse", children: "Get started" }) }),
        /* @__PURE__ */ jsx(Magnetic, { strength: 0.18, children: /* @__PURE__ */ jsx(CtaButton, { href: CALENDLY_URL, external: true, variant: "ghost", children: "Book a 20-min call" }) })
      ] })
    ] })
  ] });
}

export { HomeCta as H, Magnetic as M, usePrefersReducedMotion as u };
//# sourceMappingURL=HomeCta--NmQgw9L.mjs.map
