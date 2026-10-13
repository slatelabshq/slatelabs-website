import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  hash?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "inverse" | "ghost";
  className?: string;
  children: ReactNode;
};

export function CtaButton({ to, href, hash, external, variant = "primary", className = "", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium active:translate-y-px focus-visible:outline-none cursor-pointer";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-primary glow-primary"
      : variant === "inverse"
        ? "bg-ink-foreground text-ink hover:bg-primary hover:text-primary-foreground glow-primary"
        : variant === "ghost"
          ? "border border-white/20 text-ink-foreground hover:bg-white/10 hover:border-white/40"
          : "border border-border text-foreground hover:bg-surface hover:border-foreground/20 glow-subtle";

  if (to) {
    return (
      <Link to={to} hash={hash} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
