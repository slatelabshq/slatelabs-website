import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/work-data";

function WorkCard({ p }: { p: Project }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-10 min-h-[420px] md:min-h-[480px] flex flex-col justify-end text-white transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 bg-[#0A0A0A] shadow-[0_0_0_0_rgba(0,217,255,0)] group-hover:shadow-[0_0_60px_-5px_rgba(0,217,255,0.45)]">
      <svg className="absolute top-8 left-8 w-8 h-8 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
      </svg>
      <svg className="absolute top-10 right-10 w-10 h-10 text-primary/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 15a4 4 0 014-4 5 5 0 019.9 1A3 3 0 0119 18H7a3 3 0 01-3-3z" />
      </svg>
      <svg className="absolute bottom-24 right-12 w-8 h-8 text-primary/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
      <div className="relative">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">{p.category}</div>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] mb-4">{p.client}</h2>
        <p className="text-white/60 text-base md:text-lg max-w-md mb-8">{p.oneLiner}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
          {p.slug === "ile-eko" ? "Learn more" : "View case study"}
          <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Slate Labs" },
      { name: "description", content: "Selected work from Slate Labs: 44DB music collective, Vida Rosa luxury auto, and Ile Eko learning platform." },
      { property: "og:title", content: "Work — Slate Labs" },
      { property: "og:description", content: "Building brands and platforms on a clean slate—one successful project at a time." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const filters = ["All", "Brand Foundations", "Digital Platforms", "Intelligent Systems"] as const;

function Work() {
  const { pathname } = useLocation();
  const isIndex = pathname === "/work" || pathname === "/work/";
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  if (!isIndex) return <Outlet />;


  return (
    <>
      <header className="px-6 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
            Our <span className="text-primary">work.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted leading-relaxed">
            Building brands and platforms on a clean slate—one successful project at a time.
          </p>
        </div>
      </header>

      <div className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? "bg-foreground text-background"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 120}>
              {p.slug === "ile-eko" ? (
                <Link to="/ile-eko" className="group block">
                  <WorkCard p={p} />
                </Link>
              ) : p.slug === "44db" ? (
                <Link to="/work/44db" className="group block">
                  <WorkCard p={p} />
                </Link>
              ) : p.slug === "morgan-oxford" ? (
                <Link to="/work/morgan-oxford" className="group block">
                  <WorkCard p={p} />
                </Link>
              ) : (
                <Link to="/work/$slug" params={{ slug: p.slug }} className="group block">
                  <WorkCard p={p} />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance">
            Want to be our next <span className="text-primary">success story?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's build together</CtaButton>
        </div>
      </Section>
    </>
  );
}
