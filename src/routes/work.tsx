import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Slate Labs" },
      {
        name: "description",
        content:
          "Selected work from Slate Labs: 44DB music collective, Vida Rosa luxury auto, and Ile Eko learning platform.",
      },
      { property: "og:title", content: "Work — Slate Labs" },
      {
        property: "og:description",
        content: "Building brands and platforms on a clean slate—one successful project at a time.",
      },
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
      <header className="px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="text-5xl md:text-[120px] font-extrabold leading-[0.9] tracking-tighter mb-12">
            Our <span className="font-serif italic font-medium text-primary">Work.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Building brands and platforms on a clean slate—one successful project at a time.
          </p>
        </div>
      </header>

      <Section className="bg-card border-y border-border !py-10">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
                active === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visible.map((p) => (
            <Link
              key={p.slug}
              to={p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug"}
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden border border-border mb-6">
                <img
                  src={p.image}
                  alt={p.client}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted mb-2">{p.category}</div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-2">
                {p.title}
              </h2>
              <p className="text-muted">{p.oneLiner}</p>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest group-hover:text-primary">
                {p.slug === "ile-eko" ? "Learn more" : "View case study"} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground text-background">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
            Want to be our next <br />
            <span className="font-serif italic text-primary">success story?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's Build Together</CtaButton>
        </div>
      </Section>
    </>
  );
}
