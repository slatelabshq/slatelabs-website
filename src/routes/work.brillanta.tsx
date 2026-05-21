import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Palette, Globe, LayoutTemplate, Sprout } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";
import brillantaBusinessCard from "@/assets/brillanta-business-card.png";
import brillantaIdCard from "@/assets/brillanta-id-card.png";
import brillantaSocial from "@/assets/brillanta-social.jpg";
import brillantaWebsite from "@/assets/brillanta-website.png";

const project = projects.find((p) => p.slug === "brillanta")!;

export const Route = createFileRoute("/work/brillanta")({
  head: () => ({
    meta: [
      { title: "Brillanta Afrique — Brand & Web Identity — Slate Labs" },
      { name: "description", content: project.oneLiner },
      { property: "og:title", content: "Brillanta Afrique — Brand & Web Identity — Slate Labs" },
      { property: "og:description", content: project.oneLiner },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/brillanta" },
      { property: "og:image", content: project.image },
    ],
    links: [{ rel: "canonical", href: "/work/brillanta" }],
  }),
  component: BrillantaCaseStudy,
});

const palette = [
  { name: "Forest", hex: "#1F4D2B" },
  { name: "Harvest Gold", hex: "#C9A24C" },
  { name: "Cocoa", hex: "#4A2C18" },
  { name: "Savanna Cream", hex: "#F2E8D5" },
  { name: "Ink", hex: "#0F1A14" },
];

const deliverables = [
  { icon: Palette, title: "Brand Identity", desc: "A refined visual system — logo, colour, type and rules — that reflects Brillanta's heritage in African agriculture and energy." },
  { icon: Globe, title: "Website Design & Build", desc: "A modern marketing site connecting Brillanta to global buyers, partners and investors, with clear pathways into every service line." },
  { icon: LayoutTemplate, title: "Marketing Collateral", desc: "Company profile, stationery and pitch templates engineered to land in boardrooms across Africa, Europe, Asia and the Middle East." },
  { icon: Sprout, title: "Sustainability Storytelling", desc: "Narrative and visuals that put Brillanta's smallholder impact and circular-economy commitments at the centre of the brand." },
];

type Design =
  | { label: string; kind: "gradient"; gradient: string }
  | { label: string; kind: "image"; src: string };

const designs: Design[] = [
  { label: "Staff ID Card", kind: "image", src: brillantaIdCard },
  { label: "Social Media", kind: "image", src: brillantaSocial },
  { label: "Business Card", kind: "image", src: brillantaBusinessCard },
  { label: "Website", kind: "image", src: brillantaWebsite },
];

// Scope the green/gold accent to this page only — does not touch global tokens.
const brillantaScope: CSSProperties = {
  // @ts-expect-error - CSS custom properties
  "--primary": "#1F4D2B",
  "--primary-foreground": "#FFFFFF",
  "--primary-glow": "#C9A24C",
};

function BrillantaCaseStudy() {
  return (
    <div style={brillantaScope}>
      {/* Hero */}
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <Link to="/work" className="text-sm text-muted hover:text-primary">← All work</Link>

          <div className="mt-12 flex justify-center">
            <div
              className="w-32 h-32 rounded-3xl border border-border flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1F4D2B22, #C9A24C20)" }}
            >
              <Leaf className="w-14 h-14 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            Brand Foundations · Agriculture & Energy
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance">
            Brillanta <br />
            <span className="text-primary">Afrique</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {project.oneLiner}
          </p>
        </div>
      </header>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-surface">
            <video
              src="/brillanta-banner.mp4"
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* The Brief */}
      <Section>
        <div className="max-w-4xl">
          <Eyebrow>The brief</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance">
            From African soil <span className="text-primary">to global markets.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Brillanta Afrique Limited has traded in African agriculture and energy since 1998 — premium cocoa, ginger, sesame, groundnuts and grains alongside AGO, DPK, LPG and PMS. The business had the network and the track record; what it needed was a brand and a digital presence that matched the ambition. We built an identity system and a marketing site that lets Brillanta speak to smallholders, regional traders, and global buyers with the same confident voice.
          </p>
        </div>
      </Section>

      {/* Color Palette */}
      <Section>
        <Eyebrow>Color palette</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          Rooted in <span className="text-primary">the land.</span>
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

      {/* Bringing the brand to life */}
      <Section>
        <Eyebrow>The designs</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          Bringing the brand <span className="text-primary">to life.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {designs.map((d) => (
            <div key={d.label} className="bg-surface rounded-3xl p-4 border border-border">
              {d.kind === "image" ? (
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={d.src}
                    alt={d.label}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="aspect-[4/5] rounded-2xl flex items-end p-6"
                  style={{ background: d.gradient }}
                >
                  <div className="text-background/90 text-xs font-medium tracking-[0.2em] uppercase">
                    Placeholder
                  </div>
                </div>
              )}
              <div className="px-2 pt-4 pb-2 text-center">
                <div className="text-sm font-medium">{d.label}</div>
              </div>
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
    </div>
  );
}
