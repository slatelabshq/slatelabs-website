import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";

const project = projects.find((p) => p.slug === "44db")!;

export const Route = createFileRoute("/work/44db")({
  head: () => ({
    meta: [
      { title: "44DB — Music Collective Branding — Slate Labs" },
      {
        name: "description",
        content:
          "From under 1,000 monthly views to 300K+ in 30 days. How Slate Labs built the brand behind Nigeria's #1 rap song with 44DB.",
      },
      { property: "og:title", content: "44DB — Music Collective Branding — Slate Labs" },
      {
        property: "og:description",
        content:
          "From under 1,000 monthly views to 300K+ in 30 days. How Slate Labs built the brand behind Nigeria's #1 rap song with 44DB.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/44db" },
      { property: "og:image", content: project.image },
    ],
    links: [{ rel: "canonical", href: "/work/44db" }],
  }),
  component: FortyFourDBCaseStudy,
});

const credits = [
  {
    title: "Declan Rice — Odumodublvck",
    label: "Hip-Hop / Drill",
    copy:
      "Produced by Trill Xoe and JohnWav of 44DB. One of the fastest-streaming Nigerian songs at release. #1 on TCL Radio Nigeria. The record that announced a new era for Nigerian rap — made by 44DB members.",
  },
  {
    title: "Idanski — Zaylevelten",
    label: "Alternative Rap",
    copy:
      "Produced by Trill Xoe of 44DB. One of the biggest records from Nigeria's rising underground scene. ZayLevelten and 44DB — building the next wave from the ground up.",
  },
  {
    title: "Chanel — Blaqbonez ft. Asake",
    label: "Afro-Fusion",
    copy:
      "Co-produced by Johnson IP of 44DB. Released May 2026. One of the most anticipated Nigerian releases of the year — 2.5M+ pre-release views. Nigeria's #1 rap song.",
  },
];

const servicesDelivered = [
  "Brand platform & visual identity",
  "Social media strategy & management",
  "Content production & art direction",
  "Music marketing",
  "Digital campaign strategy",
  "Community growth & audience development",
];

const metrics = [
  { v: "1K → 300K+", l: "Organic monthly views growth" },
  { v: "300K+", l: "Views in 7 days — Chanel campaign" },
  { v: "4K+", l: "Interactions in campaign period" },
  { v: "500+", l: "New followers in 72 hours" },
];

function FortyFourDBCaseStudy() {
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
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              The producers behind Nigeria's biggest records across every genre.
            </p>
          </div>
        </div>
      </header>

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

      {/* The Brief */}
      <Section>
        <div className="max-w-4xl">
          <Eyebrow>The Brief</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance">
            The people making your favourite songs <span className="text-primary">finally getting the platform they deserve.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              44DB is Nigeria's premier producer collective, a 9+ member team of producers whose credits span rap, alternative R&amp;B, Afro-fusion, trap, and beyond. Founded by Tochi Bedford in 2018, the collective was built on a simple but radical idea: producers deserve credit, community, and a platform that reflects the weight of their work.
            </p>
            <p>
              When Slate Labs came in, 44DB had the credits. What they didn't have was a brand infrastructure that matched. Under 1,000 monthly Instagram views. An identity that lived in the background... even as their music dominated the foreground.
            </p>
          </div>
        </div>
      </Section>

      {/* The Credits */}
      <Section>
        <Eyebrow>The Credits</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          Three records. <span className="text-primary">Three moments that defined Nigerian music.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credits.map((c) => (
            <div key={c.title} className="bg-surface rounded-3xl p-8 border border-border flex flex-col">
              <div className="text-xs font-mono uppercase tracking-[0.15em] text-primary mb-4">{c.label}</div>
              <h3 className="text-2xl font-medium tracking-tight mb-4">{c.title}</h3>
              <p className="text-muted leading-relaxed">{c.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Delivered + Stats */}
      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20">
          <Eyebrow>What We Delivered</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-10 text-balance text-background">
            From 1,000 views a month to <span className="text-primary">300,000.</span>
          </h2>
          <div className="space-y-6 text-lg text-background/70 leading-relaxed max-w-3xl mb-16">
            <p>
              When Slate Labs took on 44DB, the brief was clear: build the platform that matches the cultural weight these producers carry. That meant brand architecture, content strategy, community management, and when the moment came — full music marketing campaign execution.
            </p>
            <p>
              In May 2026, when Chanel dropped and became the #1 rap song in the country, 44DB's platform was ready for the moment. 300,000+ organic views in 14 days. 4,000+ interactions. 500+ new followers in 72 hours.
            </p>
            <p>
              But the Chanel campaign is one chapter. The real story is a collective that now has a brand as powerful as their catalogue. And with their next project on the way — Slate Labs is handling the full creative direction and music marketing rollout.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-sm font-medium text-primary mb-6 uppercase tracking-[0.15em]">Services delivered</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-background/80">
              {servicesDelivered.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="text-primary">—</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div key={m.l} className="rounded-3xl border border-primary/20 bg-[#111111] p-6">
                <div className="text-3xl md:text-4xl font-medium tracking-[-0.03em] text-primary">{m.v}</div>
                <div className="text-sm text-background/70 mt-3 leading-snug">{m.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-primary/30 bg-[#0d0d0d] p-8 flex flex-col md:flex-row items-baseline gap-4">
            <div className="text-5xl md:text-6xl font-medium tracking-[-0.03em] text-primary">74.6%</div>
            <div className="text-base md:text-lg text-background/80">Of views from non-followers</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
            Ready to build your <span className="text-primary">movement?</span>
          </h2>
          <p className="text-lg text-muted mb-10">
            Whether you're a solo artist, a collective, or the label behind the scenes — your music deserves a platform that works as hard as you do.
          </p>
          <CtaButton to="/contact" variant="primary">Let's talk</CtaButton>
        </div>
      </Section>
    </>
  );
}
