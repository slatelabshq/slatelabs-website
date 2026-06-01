import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Slate Labs" },
      { name: "description", content: "Brand Strategy, Growth Marketing, Digital Platforms, and Intelligent Systems. The full stack of creative and technical services from Slate Labs." },
      { property: "og:title", content: "Services — Slate Labs" },
      { property: "og:description", content: "Brand Strategy, Growth Marketing, Digital Platforms, and Intelligent Systems — creative + technical services from Slate Labs." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Brand Strategy, Growth Marketing, Digital Platforms, AI Automation",
          provider: {
            "@type": "Organization",
            name: "Slate Labs",
            url: "https://slatelabshq.com",
          },
          areaServed: { "@type": "Country", name: "Nigeria" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Slate Labs Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Strategy", description: "Brand positioning, visual identity, and messaging for businesses starting fresh." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth Marketing", description: "Organic-first campaigns and content engines that compound attention into demand." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Platforms", description: "Custom websites, web applications, and SaaS products built to scale." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intelligent Systems", description: "AI automation and workflow systems that multiply your team's capacity." } },
            ],
          },
        }),
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    id: "brand-foundations",
    n: "01",
    title: "Brand foundations",
    intro: "We build brands that stand out and stick. From strategy and visual identity to social media and content, your brand gets a foundation built to last.",
    includes: ["Brand strategy & positioning", "Visual identity (logo, color, typography)", "Content strategy & calendar", "Social media management", "Photography & video direction"],
    process: ["Listen to your story and what's not working.", "Develop positioning, messaging, and visual direction.", "Create your identity and apply across platforms.", "Execute and continually evolve."],
    example: "44DB: grew Instagram from 1,000 to 69,526 views/month with 74.6% from non-followers.",
    caseStudy: { label: "See how we did it", slug: "44db" as const },
  },
  {
    id: "digital-platforms",
    n: "02",
    title: "Digital platforms",
    intro: "Custom websites, web applications, and SaaS products that scale with your business. Every platform is tailored to your specific needs.",
    includes: ["Marketing websites & landing pages", "Web applications & dashboards", "SaaS products (end-to-end)", "E-commerce platforms", "API & infrastructure design"],
    process: ["Understand the problem the platform is solving.", "Map data models, user flows, and tech choices.", "Develop in sprints with regular feedback loops.", "Stress test, debug, and deploy with confidence."],
    example: "Ile Eko: a full-featured learning management system built from scratch—now serving Nigerian schools.",
    caseStudy: undefined,
  },
  {
    id: "intelligent-systems",
    n: "03",
    title: "Intelligent systems",
    intro: "AI automation and workflow optimization that multiply your capacity. Systems that work smarter, not harder.",
    includes: ["AI chatbots & customer support agents", "Workflow automation", "Internal tools & dashboards", "Data pipelines & analytics", "Integrations with your existing stack"],
    process: ["Identify the workflows draining your team's time.", "Propose the smallest intelligent system that solves it.", "Ship it into your existing tools.", "Measure, refine, expand."],
    example: "Saved a client 12 hours/week by replacing manual customer-inquiry handling with an AI assistant.",
    caseStudy: undefined,
  },
];

const comparison = [
  { row: "Approach", slate: "Clean-slate, tailored", trad: "Templated process", free: "Inconsistent" },
  { row: "Skills", slate: "Creative + Technical", trad: "One or the other", free: "Varies by person" },
  { row: "Integration", slate: "Brand + platform together", trad: "Fragmented vendors", free: "You manage it" },
  { row: "Access", slate: "Direct to founders", trad: "Account managers", free: "Maybe" },
];

const faqs = [
  { q: "How long does a project take?", a: "It depends on scope. A brand foundation typically takes 4–8 weeks. A digital platform is 8–16+ weeks. We'll give you a clear timeline after the discovery call." },
  { q: "Do you work with clients outside Nigeria?", a: "Yes. We're based in Lagos but partner with founders and teams globally." },
  { q: "Can you handle just one part of a project?", a: "Of course. We're built for integrated work, but we'll happily take on a single brand engagement, a website, or an automation project." },
  { q: "How much do you charge?", a: "Every project is custom, so pricing varies based on scope. Get in touch and we'll provide a detailed quote." },
];

function Services() {
  return (
    <>
      <header className="px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Services</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
            What we <span className="text-primary">build.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted leading-relaxed">
            Four integrated practices. One team. Brand, growth, platform, and intelligent systems built to grow your business.
          </p>
        </div>
      </header>

      {services.map((s) => (
        <Section key={s.id}>
          <div id={s.id} className="scroll-mt-24 bg-surface rounded-[2.5rem] p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="text-sm text-primary mb-4">{s.n}</div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">{s.title}</h2>
                <p className="text-muted leading-relaxed">{s.intro}</p>
              </div>
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-sm font-medium text-primary mb-4">What's included</h3>
                  <ul className="space-y-3">
                    {s.includes.map((i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="text-primary">—</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary mb-4">Our process</h3>
                  <ol className="space-y-3">
                    {s.process.map((p, i) => (
                      <li key={p} className="flex gap-3 text-sm">
                        <span className="text-primary">{i + 1}.</span>
                        <span className="text-muted">{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="md:col-span-2 pt-6 border-t border-border">
                  <div className="text-xs text-muted mb-2">Example outcome</div>
                  <p className="text-base">{s.example}</p>
                  {s.caseStudy && (
                    <Link
                      to="/work/$slug"
                      params={{ slug: s.caseStudy.slug }}
                      className="mt-4 inline-block text-sm font-medium hover:text-primary"
                    >
                      {s.caseStudy.label} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Comparison */}
      <Section>
        <Eyebrow>How we're different</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Why choose Slate Labs.</h2>
        <div className="rounded-3xl border border-border overflow-hidden">
          <div className="grid grid-cols-4 bg-foreground text-background text-xs font-medium">
            <div className="p-5" />
            <div className="p-5 text-primary">Slate Labs</div>
            <div className="p-5">Traditional Agencies</div>
            <div className="p-5">Freelancers</div>
          </div>
          {comparison.map((c, i) => (
            <div
              key={c.row}
              className={`grid grid-cols-4 text-sm ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div className="p-5 font-medium">{c.row}</div>
              <div className="p-5">{c.slate}</div>
              <div className="p-5 text-muted">{c.trad}</div>
              <div className="p-5 text-muted">{c.free}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Frequently asked questions.</h2>
          </div>
          <div className="md:col-span-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-surface px-6 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4">
                  <span className="text-base font-medium">{f.q}</span>
                  <span className="text-primary text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance">
            Ready to <span className="text-primary">get started?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaButton to="/contact" variant="primary">Book a consultation</CtaButton>
            <CtaButton to="/work" variant="secondary">See our work</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
