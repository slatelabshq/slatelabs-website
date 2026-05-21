import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { featuredProjects } from "@/lib/work-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Slate Labs — Building brands & platforms on a clean slate" },
      {
        name: "description",
        content:
          "Creative + technical excellence for businesses ready to start fresh and grow exponentially. Brand foundations, digital platforms, and intelligent systems from Lagos.",
      },
      { property: "og:title", content: "Slate Labs — Building brands & platforms on a clean slate" },
      {
        property: "og:description",
        content:
          "Creative + technical excellence for businesses ready to start fresh and grow exponentially.",
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
  { n: "03", title: "Proven track record", body: "From growing a music collective by 6,900% in one month to lifting car sales by 45% via social, we deliver measurable results." },
  { n: "04", title: "We listen, we don't judge", body: "Your challenges are opportunities. You get direct access to the founders—no scripts, no account managers." },
];

const services = [
  { n: "01", title: "Brand foundations", body: "Strategy, identity, and content that make your brand stand out and stick.", hash: "brand-foundations" },
  { n: "02", title: "Digital platforms", body: "Custom websites, web apps, and SaaS products built to scale with your business.", hash: "digital-platforms" },
  { n: "03", title: "Intelligent systems", body: "AI automation and workflows that multiply your team's capacity.", hash: "intelligent-systems" },
];

const logos = ["44DB", "Vida Rosa", "Ile Eko", "BREAKTIME", "Lagos Schools", "Partners"];

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
          <p className="max-w-xl mx-auto text-lg text-muted leading-relaxed mb-10 animate-reveal" style={{ animationDelay: "140ms" }}>
            Creative and technical excellence for businesses ready to start fresh and grow exponentially.
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-reveal" style={{ animationDelay: "280ms" }}>
            <CtaButton to="/work" variant="primary">See our work</CtaButton>
            <CtaButton to="/contact" variant="secondary">Let's talk</CtaButton>
          </div>
        </div>
      </header>

      {/* Metrics */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto bg-surface rounded-[2.5rem] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "69,526", l: "IG views / month — 44DB" },
              { v: "45%", l: "Car sales lift — Vida Rosa" },
              { v: "8,000+", l: "Followers grown organically" },
              { v: "Lagos", l: "HQ base" },
            ].map((m, i) => (
              <Reveal key={m.l} delay={i * 90} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-medium tracking-tight">{m.v}</div>
                <div className="text-sm text-muted mt-2">{m.l}</div>
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
              Three integrated practices. One studio.
            </h2>
          </div>
          <span className="text-sm text-muted">01 — 03</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 max-w-xl">
          Work that speaks for itself.
        </h2>
        <div className="space-y-24">
          {featuredProjects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={p.slug} delay={i * 120}>
                <Link
                  to={p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug"}
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
                      <div className="w-full aspect-[4/3] overflow-hidden rounded-[2rem]">
                        <img
                          src={p.image}
                          alt={p.client}
                          loading="lazy"
                          width={1280}
                          height={960}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                        />
                      </div>
                    </div>
                    <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                      <div className="inline-flex items-center gap-2 text-xs text-muted mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Case study 0{i + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-muted mb-6 leading-relaxed">{p.oneLiner}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full bg-surface text-xs text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-20 flex justify-center">
          <CtaButton to="/work" variant="secondary">View full portfolio</CtaButton>
        </div>
      </Section>

      {/* Logo marquee */}
      <div className="py-12 overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap w-max">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span key={i} className="text-lg font-medium text-muted/40 px-8">
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
