import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Palette, LayoutTemplate, Music, TrendingUp, BarChart3 } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";
import logo44db from "@/assets/44db-logo.png";

const project = projects.find((p) => p.slug === "44db")!;

export const Route = createFileRoute("/work/44db")({
  head: () => ({
    meta: [
      { title: "44DB — Music Collective Branding — Slate Labs" },
      { name: "description", content: project.oneLiner },
      { property: "og:title", content: "44DB — Music Collective Branding — Slate Labs" },
      { property: "og:description", content: project.oneLiner },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/44db" },
      { property: "og:image", content: project.image },
    ],
    links: [{ rel: "canonical", href: "/work/44db" }],
  }),
  component: FortyFourDBCaseStudy,
});

const palette = [
  { name: "Midnight", hex: "#0A0A0A" },
  { name: "Cyan", hex: "#00D9FF" },
  { name: "Deep Cyan", hex: "#0099BF" },
  { name: "Carbon", hex: "#1A1A1A" },
  { name: "Bone", hex: "#F2F1EC" },
];

const deliverables = [
  { icon: FileText, title: "Brand Strategy Document", desc: "Comprehensive brand positioning and voice guidelines tailored for the music collective scene." },
  { icon: Palette, title: "Visual Identity System", desc: "Logo, color palette, typography, and visual language capturing 44DB's raw creative energy." },
  { icon: LayoutTemplate, title: "Content Templates", desc: "Reusable templates for social posts, stories, and promotional materials across platforms." },
  { icon: Music, title: "30 Pieces of Content", desc: "Original content spanning video, graphics, and copy — all designed to build cultural presence." },
  { icon: TrendingUp, title: "Campaign Strategy", desc: "Multi-platform campaign framework driving engagement and audience growth." },
  { icon: BarChart3, title: "Ongoing Social Management", desc: "Continuous content creation, community management, and performance optimization." },
];

function FortyFourDBCaseStudy() {
  const d = project.detail!;

  return (
    <>
      {/* Hero */}
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/work" className="text-sm text-muted hover:text-primary">← All work</Link>

          <div className="mt-12 text-center">
            <div className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
              {project.category}
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance">
              {project.title}
            </h1>
          </div>
        </div>
      </header>

      {/* The Brief */}
      <Section>
        <div className="max-w-4xl">
          <Eyebrow>The brief</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance">
            From underground sound to <span className="text-primary">mainstream presence.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">{d.challenge}</p>
        </div>
      </Section>

      {/* Hero reel */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-surface aspect-video">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/media/44db-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="44DB hero reel"
            />
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <Section>
        <Eyebrow>Color palette</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          The colours of <span className="text-primary">culture.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {palette.map((c) => (
            <div key={c.hex} className="bg-surface rounded-3xl p-4">
              <div
                className="aspect-square rounded-2xl border border-border"
                style={{ backgroundColor: c.hex }}
              />
              <div className="px-2 pt-4 pb-2">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-muted mt-1 font-mono">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Results — black band */}
      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>The results</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-16 text-balance">
            Numbers that speak <span className="text-primary">volumes.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.metrics.map((m) => (
              <div key={m.label} className="rounded-3xl border border-primary/20 bg-[#111111] p-8">
                <div className="text-5xl md:text-6xl font-medium tracking-[-0.03em] text-primary">{m.value}</div>
                <div className="text-base font-medium text-background mt-4">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-lg md:text-xl text-background/70 leading-relaxed max-w-3xl">{d.results}</p>
        </div>
      </Section>

      {/* What we delivered */}
      <Section>
        <Eyebrow>The work</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          What we <span className="text-primary">delivered.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliverables.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface rounded-3xl p-8 border border-border">
              <Icon className="w-7 h-7 text-primary mb-6" strokeWidth={1.75} />
              <h3 className="text-xl font-medium tracking-tight mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance">
            Ready for your <span className="text-primary">clean slate?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's talk</CtaButton>
        </div>
      </Section>
    </>
  );
}
