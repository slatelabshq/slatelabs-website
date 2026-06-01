import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { featuredProjects } from "@/lib/work-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Slate Labs — Lagos Creative & Tech Agency" },
      {
        name: "description",
        content:
          "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow.",
      },
      { property: "og:title", content: "Slate Labs — Lagos Creative & Tech Agency" },
      {
        property: "og:description",
        content:
          "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const differentiators = [
  { n: "01", title: "A fresh perspective", body: "We don't do quick fixes or generic templates. Every project starts with a clean slate—we understand what's not working, then build for your specific goals." },
  { n: "02", title: "Creative meets technical", body: "Most agencies are either creative or technical. We're both. Brand strategy and platform development are aligned from day one." },
  { n: "03", title: "Proven track record", body: "From a producer collective that became the brand behind Nigeria's #1 rap song to saving an education team 8+ hours a week, we deliver measurable results." },
  { n: "04", title: "We listen, we don't judge", body: "Your challenges are opportunities. You get direct access to the founders—no scripts, no account managers." },
];

const services = [
  { n: "01", title: "Brand Strategy", body: "Identity, positioning, and messaging that build brands people remember. We start from what makes you different and build outward from there.", hash: "brand-strategy" },
  { n: "02", title: "Growth Marketing", body: "Social media management, paid ads, music marketing, and campaign strategy. We don't just post — we build audiences and drive measurable results.", hash: "growth-marketing" },
  { n: "03", title: "Digital Platforms", body: "Custom websites, web apps, and SaaS products built to scale. Every platform is tailored to the problem it's solving.", hash: "digital-platforms" },
  { n: "04", title: "Intelligent Systems", body: "AI automation and workflow design that give your team their time back. We find what's draining you and build systems that handle it.", hash: "intelligent-systems" },
];

const logos = [
  "44DB",
  "Morgan Oxford Education",
  "Fly Trinity Airways",
  "Brillanta Afrique",
  "Rita's Bakehouse",
  "Nelly Baradi",
];

const stats = [
  { v: "300K+", l: "Organic views in 30 days", sub: "44DB — May, 2026" },
  { v: "#1", l: "Rap song in Nigeria, co-produced by our client", sub: "Blaqbonez ft. Asake" },
  { v: "8hrs+", l: "Operational time saved weekly", sub: "Morgan Oxford Education" },
  { v: "Lagos", l: "HQ base", sub: "Nigeria" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <header className="px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <Eyebrow>Lagos, Nigeria</Eyebrow>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-[-0.03em] text-balance mb-8 animate-reveal" style={{ animationDelay: "0ms" }}>
            Building brands & platforms on a{" "}
            <span className="text-primary">clean slate.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted leading-relaxed mb-6 animate-reveal" style={{ animationDelay: "140ms" }}>
            Creative and technical excellence for businesses ready to start fresh and grow exponentially.
          </p>
          <p className="max-w-2xl mx-auto text-sm text-muted/80 leading-relaxed mb-10 animate-reveal" style={{ animationDelay: "200ms" }}>
            From music collectives and luxury automotive to education and aviation — if you're building something real in Lagos and beyond, we're for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-reveal" style={{ animationDelay: "280ms" }}>
            <CtaButton to="/work" variant="primary">See our work</CtaButton>
            <CtaButton to="/contact" variant="secondary">Let's talk</CtaButton>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto bg-surface rounded-[2.5rem] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((m, i) => (
              <Reveal key={m.l} delay={i * 90} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-medium tracking-tight">{m.v}</div>
                <div className="text-sm text-foreground/80 mt-2 leading-snug">{m.l}</div>
                <div className="text-xs text-muted mt-1">{m.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Eyebrow>What we build</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
              Four integrated practices. One team.
            </h2>
          </div>
          <span className="text-sm text-muted">01 — 04</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <Link
                to="/services"
                hash={s.hash}
                className="group block rounded-3xl bg-surface p-8 hover:bg-foreground hover:text-background hover-lift h-full"
              >
                <div className="text-sm text-primary mb-6">{s.n}</div>
                <h3 className="text-2xl font-medium mb-3 tracking-tight">{s.title}</h3>
                <p className="text-muted group-hover:text-background/60 leading-relaxed mb-8">{s.body}</p>
                <span className="text-sm font-medium">Learn more →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured work */}
      <Section>
        <div className="mb-20">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight max-w-2xl">
            Work that speaks for itself.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-x-12 lg:gap-x-16 items-start">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120} className={i === 1 ? "md:mt-24" : ""}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group block space-y-8"
              >
                <div className="overflow-hidden bg-surface aspect-[4/5] relative rounded-sm">
                  <img
                    src={p.image}
                    alt={p.client}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-foreground/80 text-[10px] font-medium uppercase tracking-widest">
                      {p.client}
                    </span>
                    <div className="h-px w-8 bg-border" />
                    <div className="flex gap-2">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] text-muted uppercase tracking-tighter">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl text-foreground font-light tracking-tight underline-offset-8 group-hover:underline decoration-border">
                    {p.title.includes("—") ? p.title.split("—")[1].trim() : p.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{p.oneLiner}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-border flex justify-center">
          <Link
            to="/work"
            className="group flex items-center gap-4 text-foreground transition-all duration-300"
          >
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase">View full portfolio</span>
            <span className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all">
              <svg className="w-4 h-4 text-muted group-hover:text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </Section>


      {/* Logo marquee */}
      <div className="py-12 overflow-hidden">
        <div className="px-6 mb-6 max-w-7xl mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Brands we've built</span>
        </div>
        <div className="flex items-center gap-6 md:gap-16 animate-marquee whitespace-nowrap w-max">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="text-sm md:text-lg font-medium text-muted/40 px-3 md:px-8">
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Why Slate Labs */}
      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
                We don't renovate.<br />
                We build from <span className="text-primary">zero.</span>
              </h2>
              <p className="text-background/60 leading-relaxed max-w-md">
                Most agencies try to fix what's broken. We believe in the power of the blank page to unlock true growth.
              </p>
            </div>
            <div className="space-y-10">
              {differentiators.map((d, i) => (
                <Reveal key={d.n} delay={i * 100}>
                  <h3 className="text-sm font-medium mb-2 text-primary">
                    {d.n} — {d.title}
                  </h3>
                  <p className="text-background/70 leading-relaxed">{d.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
            Ready for your <span className="text-primary">clean slate?</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Let's build something remarkable together. Fresh start. Clear vision. Exponential growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaButton to="/contact" variant="primary">Get started</CtaButton>
            <CtaButton to="/services" variant="secondary">See our services</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
