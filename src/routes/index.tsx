import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
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
  {
    n: "01",
    title: "A Fresh Perspective",
    body:
      "We don't do quick fixes or generic templates. Every project starts with a clean slate; we take time to understand what's not working, then build a tailored solution designed for your specific goals.",
  },
  {
    n: "02",
    title: "Creative Meets Technical",
    body:
      "Most agencies are either creative or technical. We're both. Your brand strategy and your platform development are aligned from day one—no miscommunication between vendors, no fragmented vision.",
  },
  {
    n: "03",
    title: "Proven Track Record",
    body:
      "From growing a music collective by 6,900% in one month to increasing car sales by 45% through social media, we don't just talk strategy—we deliver measurable results.",
  },
  {
    n: "04",
    title: "We Listen, We Don't Judge",
    body:
      "Your challenges are opportunities. We listen, understand your story, and find solutions that help you evolve. You get direct access to the founders, not account managers reading from scripts.",
  },
];

const services = [
  {
    n: "01",
    title: "Brand Foundations",
    body:
      "We build brands that stand out and stick. From strategy and visual identity to social media management and content creation, your brand gets a fresh start with a foundation built to last.",
    hash: "brand-foundations",
  },
  {
    n: "02",
    title: "Digital Platforms",
    body:
      "Custom websites, web applications, and SaaS products that scale with your business. We don't use templates—every platform is tailored to your specific needs and built for growth.",
    hash: "digital-platforms",
  },
  {
    n: "03",
    title: "Intelligent Systems",
    body:
      "AI automation and workflow optimization that multiply your capacity. We build systems that work smarter, not harder, so your business can scale without adding headcount.",
    hash: "intelligent-systems",
  },
];

const logos = ["44DB", "Vida Rosa", "Ile Eko", "BREAKTIME", "Lagos Schools", "Partners"];

function Home() {
  return (
    <>
      {/* Hero */}
      <header className="relative px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Eyebrow>Lagos, Nigeria</Eyebrow>
          <h1 className="text-5xl md:text-[120px] font-extrabold leading-[0.9] tracking-tighter text-balance max-w-5xl mb-12 animate-reveal">
            Building brands & <br />platforms on a{" "}
            <span className="font-serif italic font-medium text-primary">clean slate.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-muted leading-relaxed mb-10 animate-reveal">
            Creative + technical excellence for businesses ready to start fresh and grow
            exponentially.
          </p>
          <div className="flex flex-wrap gap-6">
            <CtaButton to="/work" variant="primary">See Our Work</CtaButton>
            <CtaButton to="/contact" variant="secondary">Let's Talk</CtaButton>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-card/60 -z-0 border-l border-border hidden md:block" />
      </header>

      {/* Metrics strip */}
      <div className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { v: "69,526", l: "IG views / month — 44DB" },
            { v: "45%", l: "Car sales lift — Vida Rosa" },
            { v: "8,000+", l: "Followers grown organically" },
            { v: "Lagos", l: "HQ base" },
          ].map((m) => (
            <div key={m.l} className="p-8 text-center">
              <div className="text-3xl font-extrabold">{m.v}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted mt-1">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section className="bg-card">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-4xl font-extrabold tracking-tight">What We Build.</h2>
          <div className="h-px flex-1 bg-border mx-8 hidden md:block" />
          <span className="text-sm text-muted">01 — 03</span>
        </div>
        <p className="max-w-2xl text-lg text-muted mb-16">
          From brand identity to intelligent systems, we give your business a clean slate and the
          tools to grow exponentially.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((s) => (
            <Link
              key={s.n}
              to="/services"
              hash={s.hash}
              className="group block border-t border-border pt-6 hover:border-primary transition-colors"
            >
              <div className="text-primary font-bold mb-4 italic font-serif text-xl">{s.n}/</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-muted leading-relaxed mb-6">{s.body}</p>
              <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured work */}
      <Section>
        <Eyebrow>Selected Work</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-16">
          Work That Speaks For Itself.
        </h2>
        <div className="space-y-32">
          {featuredProjects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Link
                key={p.slug}
                to={p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug"}
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                  <div className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
                    <div className="w-full aspect-[4/3] overflow-hidden border border-border">
                      <img
                        src={p.image}
                        alt={p.client}
                        loading="lazy"
                        width={1280}
                        height={960}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className={`md:col-span-5 pb-8 ${reversed ? "md:order-1" : ""}`}>
                    <span className="text-primary font-bold italic font-serif">
                      Case Study 0{i + 1}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6 tracking-tighter">
                      {p.title}
                    </h3>
                    <p className="text-muted mb-6 text-lg">{p.oneLiner}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 border border-border text-[10px] uppercase font-bold tracking-widest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-20 flex justify-center">
          <CtaButton to="/work" variant="secondary">View Full Portfolio</CtaButton>
        </div>
      </Section>

      {/* Logo marquee */}
      <div className="py-10 border-y border-border bg-card overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap w-max">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-xl font-bold opacity-30 px-8 uppercase tracking-[0.4em]"
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Why Slate Labs */}
      <Section className="bg-foreground text-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter leading-tight mb-8">
              We don't renovate.<br />
              We build from <span className="text-primary">zero.</span>
            </h2>
            <p className="text-background/60 text-lg leading-relaxed">
              Most agencies try to fix what's broken. We believe in the power of the blank page to
              unlock true growth.
            </p>
          </div>
          <div className="space-y-12">
            {differentiators.map((d) => (
              <div key={d.n}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-primary">
                  {d.n} / {d.title}
                </h3>
                <p className="text-background/70 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8">
            Ready for your <br />
            <span className="font-serif italic text-primary">clean slate?</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl mx-auto">
            Let's build something remarkable together. Fresh start. Clear vision. Exponential
            growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <CtaButton to="/contact" variant="primary">Get Started</CtaButton>
            <CtaButton to="/services" variant="secondary">See Our Services</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
