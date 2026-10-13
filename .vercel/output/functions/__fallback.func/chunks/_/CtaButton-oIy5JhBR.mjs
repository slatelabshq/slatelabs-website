import { jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';

function CtaButton({ to, href, hash, external, variant = "primary", className = "", children }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium active:translate-y-px focus-visible:outline-none cursor-pointer";
  const styles = variant === "primary" ? "bg-foreground text-background hover:bg-primary glow-primary" : variant === "inverse" ? "bg-ink-foreground text-ink hover:bg-primary hover:text-primary-foreground glow-primary" : variant === "ghost" ? "border border-white/20 text-ink-foreground hover:bg-white/10 hover:border-white/40" : "border border-border text-foreground hover:bg-surface hover:border-foreground/20 glow-subtle";
  if (to) {
    return /* @__PURE__ */ jsx(Link, { to, hash, className: `${base} ${styles} ${className}`, children });
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: `${base} ${styles} ${className}`,
      ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
      children
    }
  );
}

export { CtaButton as C };
//# sourceMappingURL=CtaButton-oIy5JhBR.mjs.map
