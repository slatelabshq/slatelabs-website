import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  hash?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function CtaButton({ to, href, hash, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium active:translate-y-px focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-primary"
      : "border border-border text-foreground hover:bg-surface hover:border-foreground/20";

  if (to) {
    return (
      <Link to={to} hash={hash} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
