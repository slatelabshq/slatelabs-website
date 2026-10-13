import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { projects, type Project } from "@/lib/work-data";
import workFly from "@/assets/work-fly-trinity.jpg";

function WorkCard({ p }: { p: Project }) {
  const title = p.title.includes("—") ? p.title.split("—")[1].trim() : p.title;
  return (
    <div className="relative isolate flex min-h-[420px] md:min-h-[520px] flex-col justify-end overflow-hidden rounded-sm p-8 md:p-10 text-white">
      <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover img-zoom" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25"
        style={{ backgroundColor: `${p.color}22` }}
      />
      {p.badge ? (
        <span className="absolute top-6 right-6 z-10 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm">
          {p.badge}
        </span>
      ) : null}
      <div className="relative z-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/65 mb-4">{p.category}</p>
        <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[0.95] mb-3">{p.client}</h2>
        <p className="text-sm md:text-base text-white/75 max-w-md mb-2">{title}</p>
        <p className="text-white/60 text-sm max-w-md mb-8">{p.oneLiner}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
          {p.slug === "ile-eko" ? "Learn more" : "View case study"}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Slate Labs" },
      {
        name: "description",
        content:
          "Slate Labs portfolio — brand identity, growth marketing, digital platforms, and intelligent systems for clients across music, automotive, aviation, education, and agriculture in Lagos, Nigeria.",
      },
      { property: "og:title", content: "Work — Slate Labs" },
      {
        property: "og:description",
        content:
          "Brand identity, growth marketing, digital platforms, and intelligent systems for clients across music, automotive, aviation, education, and agriculture.",
      },
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
      <PageHero
        section="Portfolio"
        image={workFly}
        imageAlt="Fly Trinity Airways brand work"
        title={
          <>
            Our <span className="italic text-primary">work.</span>
          </>
        }
        description="Building brands and platforms on a clean slate — one successful project at a time."
      />

      <Section className="!pt-10 md:!pt-12">
        <div className="relative z-10 flex flex-wrap gap-2 mb-10 md:mb-12">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-foreground text-background"
                  : "border border-border bg-background text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
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
              ) : p.slug === "fly-trinity" ? (
                <Link to="/work/fly-trinity" className="group block">
                  <WorkCard p={p} />
                </Link>
              ) : p.slug === "nelly-baradi" ? (
                <Link to="/work/nelly-baradi" className="group block">
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

      <PageCta />
    </>
  );
}
