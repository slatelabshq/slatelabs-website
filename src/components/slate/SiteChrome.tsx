import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { closeMobileNavSheet } from "@/lib/slate-mobile-nav";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/insights", label: "Insights" },
  { to: "/ile-eko", label: "Ile Eko" },
  { to: "/contact", label: "Contact" },
] as const;

function navIsCurrent(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHead() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="site-head" data-nav>
      <div className="site-head__inner">
        <Link className="brand" to="/" aria-label="Slate Labs — Home">
          <img
            className="brand__lockup brand__lockup--light"
            src="/assets/img/logo/lockup-teal.png"
            alt="Slate Labs"
            width={4186}
            height={999}
          />
          <img
            className="brand__lockup brand__lockup--dark"
            src="/assets/img/logo/lockup-white.png"
            alt=""
            aria-hidden={true}
            width={4186}
            height={999}
          />
        </Link>

        <nav className="primary" aria-label="Primary">
          <ul className="primary__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={navIsCurrent(pathname, item.to) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-head__tools">
          <div className="theme" role="group" aria-label="Colour theme">
            <button
              className="theme__btn"
              type="button"
              data-theme-set="light"
              aria-pressed="true"
              aria-label="Light theme"
            >
              <span className="theme__swatch" aria-hidden={true} />
              <span className="theme__word">Light</span>
            </button>
            <button
              className="theme__btn"
              type="button"
              data-theme-set="dark"
              aria-pressed="false"
              aria-label="Dark theme"
            >
              <span className="theme__swatch" aria-hidden={true} />
              <span className="theme__word">Dark</span>
            </button>
          </div>

          <Link className="btn btn--primary btn--sm site-head__cta" to="/contact">
            Start a project
          </Link>

          <button
            className="burger"
            type="button"
            data-nav-toggle
            aria-expanded="false"
            aria-controls="nav-sheet"
          >
            <span className="burger__box" aria-hidden={true}>
              <span />
              <span />
            </span>
            <span className="visually-hidden">Menu</span>
          </button>
        </div>
      </div>

      <span className="site-head__rail" aria-hidden={true} />
    </header>
  );
}

export function SiteFoot() {
  return (
    <footer className="site-foot">
      <div className="shell">
        <div className="site-foot__grid">
          <div className="site-foot__brand">
            <img
              className="site-foot__lockup site-foot__lockup--light"
              src="/assets/img/logo/lockup-teal.png"
              alt="Slate Labs"
              width={4186}
              height={999}
            />
            <img
              className="site-foot__lockup site-foot__lockup--dark"
              src="/assets/img/logo/lockup-white.png"
              alt=""
              aria-hidden={true}
              width={4186}
              height={999}
            />
            <p className="site-foot__note">
              Building brands &amp; platforms on a clean slate. Lagos, Nigeria.
            </p>
            <p>
              <Link className="btn btn--primary btn--sm" to="/contact">
                Start a project
              </Link>
            </p>
          </div>

          <div className="site-foot__col">
            <h2 className="mono">Company</h2>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="site-foot__col">
            <h2 className="mono">Product</h2>
            <ul>
              <li><Link to="/ile-eko">Ile Eko</Link></li>
              <li><Link to="/ile-eko" hash="pricing">Pricing</Link></li>
              <li><Link to="/contact">Book a demo</Link></li>
            </ul>
          </div>

          <div className="site-foot__col">
            <h2 className="mono">Connect</h2>
            <ul>
              <li>
                <a href="https://instagram.com/slatelabs.hq" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@slatelabs.hq" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/slate-labs-hq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li><a href="mailto:hello@slatelabshq.com">hello@slatelabshq.com</a></li>
              <li><a href="tel:+2347026036554">+234 702 603 6554</a></li>
            </ul>
          </div>
        </div>

        <div className="site-foot__bar">
          <p className="mono">© 2026 Slate Labs. All rights reserved.</p>
          <p className="mono">Building on a clean slate.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppLink() {
  return (
    <a
      className="wa"
      href="https://wa.me/2347026036554?text=Hi%20Slate%20Labs%2C%20I%20want%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Slate Labs on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
        <path
          d="M6.6 3h2.9l1.5 3.9-1.9 1.4a12.4 12.4 0 0 0 5.6 5.6l1.4-1.9L20 13.4v2.9a2.2 2.2 0 0 1-2.4 2.2A16.6 16.6 0 0 1 4.4 5.4 2.2 2.2 0 0 1 6.6 3Z"
        />
      </svg>
    </a>
  );
}

export function NavSheet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    closeMobileNavSheet();
  }, [pathname]);

  return (
    <div
      className="sheet"
      id="nav-sheet"
      data-nav-sheet
      data-open="false"
      aria-label="Site menu"
    >
      <div className="sheet__bar">
        <span className="mono">Menu</span>
        <button className="sheet__close" type="button" data-nav-close>
          Close
        </button>
      </div>

      <nav className="sheet__nav" aria-label="Mobile">
        <ol>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                aria-current={navIsCurrent(pathname, item.to) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <div className="sheet__foot">
        <Link className="btn btn--primary btn--block" to="/contact">
          Start a project
        </Link>
        <p className="mono">hello@slatelabshq.com · +234 702 603 6554</p>
      </div>
    </div>
  );
}

export function SlateScript() {
  useEffect(() => {
    const existing = document.querySelector('script[data-slate-js="1"]');
    if (existing) return;
    const s = document.createElement("script");
    s.src = "/assets/js/slate.js";
    s.defer = true;
    s.dataset.slateJs = "1";
    document.body.appendChild(s);
  }, []);
  return null;
}
