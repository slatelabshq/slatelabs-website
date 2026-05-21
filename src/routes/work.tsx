import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/work-data";

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
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

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
              <Link
                to={p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug"}
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
                  <img
                    src={p.image}
                    alt={p.client}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                </div>
                <div className="text-xs text-muted mb-2">{p.category}</div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">{p.title}</h2>
                <p className="text-muted">{p.oneLiner}</p>
                <span className="mt-4 inline-block text-sm font-medium group-hover:text-primary story-link">
                  {p.slug === "ile-eko" ? "Learn more" : "View case study"} →
                </span>
              </Link>
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
