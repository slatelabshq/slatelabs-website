import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoWordmark from "@/assets/slate-logo-wordmark.png";
import logoMark from "@/assets/slate-logo-mark.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/insights", label: "Insights" },
  { to: "/ile-eko", label: "Ile Eko" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="max-w-5xl mx-auto bg-background/80 backdrop-blur-md border border-border rounded-full px-3 py-2 md:py-2.5 flex items-center justify-between shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
        <Link to="/" className="pl-4 pr-3 flex items-center" aria-label="Slate Labs — Home">
          <img src={logoWordmark} alt="Slate Labs" className="hidden md:block h-6 lg:h-7 w-auto" />
          <img src={logoMark} alt="Slate Labs" className="md:hidden h-7 w-auto" />
        </Link>
        <div className="hidden md:flex md:ml-2 items-center gap-1 text-sm">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-1.5 rounded-full text-muted hover:text-foreground hover:bg-surface transition-colors"
              activeProps={{ className: "text-foreground bg-surface" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden md:inline-flex rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary glow-primary transition-colors"
        >
          Get started
        </Link>
        <button
          aria-label="Open menu"
          className="md:hidden rounded-full px-4 py-2 text-sm font-medium bg-surface"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 bg-background border border-border rounded-3xl p-4">
          <div className="flex flex-col gap-1 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-surface"
                activeProps={{ className: "bg-surface text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+2347026036554"
              onClick={() => setOpen(false)}
              className="mt-2 px-3 py-2 rounded-xl text-sm text-muted hover:bg-surface hover:text-foreground"
            >
              Call — +234 702 603 6554
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-foreground text-background px-4 py-3 text-center text-sm font-medium"
            >
              Get started
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
