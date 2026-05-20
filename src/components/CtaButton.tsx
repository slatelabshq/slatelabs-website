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
    "group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-primary"
      : "border border-foreground text-foreground hover:bg-foreground hover:text-background";

  const content = (
    <>
      {children}
      {variant === "primary" && (
        <div className="absolute -bottom-1 -right-1 w-full h-full border border-foreground -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} hash={hash} className={`${base} ${styles}`}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={`${base} ${styles}`}>
      {content}
    </a>
  );
}
