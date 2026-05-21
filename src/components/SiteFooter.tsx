import { Link } from "@tanstack/react-router";
import logoWordmark from "@/assets/slate-logo-wordmark.png";

export function SiteFooter() {
  return (
    <footer className="px-6 py-20">
      <div className="max-w-7xl mx-auto bg-surface rounded-[2.5rem] p-10 md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center" aria-label="Slate Labs — Home">
              <img src={logoWordmark} alt="Slate Labs" className="h-7 md:h-9 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted max-w-xs leading-relaxed">
              Building brands & platforms on a clean slate. Lagos, Nigeria.
            </p>
          </div>
          <div>
            <div className="text-xs font-medium text-muted mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/work" className="hover:text-primary">Work</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium text-muted mb-4">Product</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ile-eko" className="hover:text-primary">Ile Eko</Link></li>
              <li><Link to="/ile-eko" hash="pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Book a demo</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium text-muted mb-4">Connect</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com/slatelabs.co" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
              <li><a href="mailto:hello@slatelabs.co" className="hover:text-primary">hello@slatelabs.co</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} Slate Labs. All rights reserved.</span>
          <span>Building on a clean slate.</span>
        </div>
      </div>
    </footer>
  );
}
