import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Palette, Type, LayoutTemplate, Image as ImageIcon } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";
import flyTrinityBusinessCard from "@/assets/fly-trinity-business-card.png";

const project = projects.find((p) => p.slug === "fly-trinity")!;

export const Route = createFileRoute("/work/fly-trinity")({
  head: () => ({
    meta: [
      { title: "Fly Trinity Airways — Brand Identity — Slate Labs" },
      { name: "description", content: project.oneLiner },
      { property: "og:title", content: "Fly Trinity Airways — Brand Identity — Slate Labs" },
      { property: "og:description", content: project.oneLiner },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/fly-trinity" },
      { property: "og:image", content: project.image },
    ],
    links: [{ rel: "canonical", href: "/work/fly-trinity" }],
  }),
  component: FlyTrinityCaseStudy,
});

const palette = [
  { name: "Deep Purple", hex: "#3C096C" },
  { name: "Lavender", hex: "#DAB6FC" },
  { name: "Off-White", hex: "#F4F4F2" },
  { name: "Royal Violet", hex: "#5A189A" },
  { name: "Orchid", hex: "#9D4EDD" },
];

const deliverables = [
  { icon: Palette, title: "Brand Identity", desc: "Complete color palette and brand guidelines defining the visual language of Fly Trinity." },
  { icon: Type, title: "Typography System", desc: "Custom type hierarchy pairing elegant display fonts with functional body text." },
  { icon: LayoutTemplate, title: "Collateral Design", desc: "Boarding passes, signage, uniforms, and in-flight materials all on-brand." },
  { icon: ImageIcon, title: "Digital Presence", desc: "Website, app UI, and social media templates designed for seamless brand consistency." },
];

const designs = [
  { label: "Staff ID Card", gradient: "linear-gradient(135deg, #3C096C 0%, #5A189A 60%, #9D4EDD 100%)" },
  { label: "Social Media", gradient: "linear-gradient(135deg, #5A189A 0%, #9D4EDD 50%, #DAB6FC 100%)" },
  { label: "Business Card", gradient: "linear-gradient(135deg, #1A1024 0%, #3C096C 60%, #5A189A 100%)" },
];

// Scope the purple accent to this page only — overrides --primary/--primary-glow
// for everything rendered inside the wrapper, so text-primary, bg-primary, etc.
// pick up the airline palette without touching global tokens.
const purpleScope: CSSProperties = {
  // @ts-expect-error - CSS custom properties
  "--primary": "#5A189A",
  "--primary-foreground": "#FFFFFF",
  "--primary-glow": "#9D4EDD",
};

function FlyTrinityCaseStudy() {
  return (
    <div style={purpleScope}>
      {/* Hero */}
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <Link to="/work" className="text-sm text-muted hover:text-primary">← All work</Link>

          <div className="mt-12 flex justify-center">
            <div
              className="w-32 h-32 rounded-3xl border border-border flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #DAB6FC22, #9D4EDD15)" }}
            >
              <Plane className="w-14 h-14 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            Brand Foundations · Airline
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance">
            Fly Trinity <br />
            <span className="text-primary">Airways</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Crafting a premium airline brand identity from ground to sky
          </p>
        </div>
      </header>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem]">
            <img
              src={project.image}
              alt={project.client}
              width={1280}
              height={720}
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
            Elevating air travel <span className="text-primary">through identity.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Fly Trinity needed a brand that felt as premium as its service — modern yet timeless, bold yet refined. We built an identity system spanning every passenger touchpoint, from the moment they book a flight to the second they land.
          </p>
        </div>
      </Section>

      {/* Color Palette */}
      <Section>
        <Eyebrow>Color palette</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          The colours <span className="text-primary">of flight.</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {designs.map((d) => (
            <div key={d.label} className="bg-surface rounded-3xl p-4 border border-border">
              <div
                className="aspect-[4/5] rounded-2xl flex items-end p-6"
                style={{ background: d.gradient }}
              >
                <div className="text-background/90 text-xs font-medium tracking-[0.2em] uppercase">
                  Preview
                </div>
              </div>
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
