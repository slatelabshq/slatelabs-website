import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  hash?: string;
  external?: boolean;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function CtaButton({ to, href, hash, external, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium active:translate-y-px focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-primary glow-primary"
      : "border border-border text-foreground hover:bg-surface hover:border-foreground/20 glow-subtle";

  if (to) {
    return (
      <Link to={to} hash={hash} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
