import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Slate Labs" },
      {
        name: "description",
        content:
          "Brand Foundations, Digital Platforms, and Intelligent Systems. The full stack of creative and technical services from Slate Labs.",
      },
      { property: "og:title", content: "Services — Slate Labs" },
      {
        property: "og:description",
        content:
          "Brand Foundations, Digital Platforms, and Intelligent Systems—creative + technical services from Slate Labs.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    id: "brand-foundations",
    n: "01",
    title: "Brand Foundations",
    intro:
      "We build brands that stand out and stick. From strategy and visual identity to social media management and content creation, your brand gets a fresh start with a foundation built to last.",
    includes: [
      "Brand strategy & positioning",
      "Visual identity (logo, color, typography)",
      "Content strategy & calendar",
      "Social media management (Instagram, TikTok, X)",
      "Photography & video direction",
    ],
    process: [
      "Discovery — listen to your story, audience, and what's not working.",
      "Strategy — develop positioning, messaging, and visual direction tailored to your goals.",
      "Design — create your visual identity and apply it across platforms.",
      "Launch & manage — execute and continually evolve.",
    ],
    example:
      "44DB: grew Instagram from 1,000 to 69,526 views/month with 74.6% from non-followers.",
    caseStudy: { label: "See how we did it", slug: "44db" as const },
  },
  {
    id: "digital-platforms",
    n: "02",
    title: "Digital Platforms",
    intro:
      "Custom websites, web applications, and SaaS products that scale with your business. We don't use templates—every platform is tailored to your specific needs and built for growth.",
    includes: [
      "Marketing websites & landing pages",
      "Web applications & dashboards",
      "SaaS products (end-to-end)",
      "E-commerce platforms",
      "API & infrastructure design",
    ],
    process: [
      "Discovery — understand the problem the platform is solving.",
      "Architecture — map data models, user flows, and tech choices.",
      "Build — develop in sprints with regular feedback loops.",
      "Test & launch — stress test, debug, and deploy with confidence.",
    ],
    example:
      "Ile Eko: a full-featured learning management system built from scratch—now serving Nigerian schools.",
    caseStudy: undefined,
  },
  {
    id: "intelligent-systems",
    n: "03",
    title: "Intelligent Systems",
    intro:
      "AI automation and workflow optimization that multiply your capacity. We build systems that work smarter, not harder, so your business can scale without adding headcount.",
    includes: [
      "AI chatbots & customer support agents",
      "Workflow automation",
      "Internal tools & dashboards",
      "Data pipelines & analytics",
      "Integrations with your existing stack",
    ],
    process: [
      "Audit — identify the workflows draining your team's time.",
      "Design — propose the smallest intelligent system that solves it.",
      "Build & integrate — ship it into your existing tools.",
      "Iterate — measure, refine, expand.",
    ],
    example:
      "Saved a client 12 hours/week by replacing manual customer-inquiry handling with an AI assistant.",
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
  {
    q: "How long does a project take?",
    a: "It depends on scope. A brand foundation typically takes 4–8 weeks. A digital platform is 8–16+ weeks. We'll give you a clear timeline after the discovery call.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. We're based in Lagos but partner with founders and teams globally.",
  },
  {
    q: "Can you handle just one part of a project?",
    a: "Of course. We're built for integrated work, but we'll happily take on a single brand engagement, a website, or an automation project.",
  },
  {
    q: "How much do you charge?",
    a: "Every project is custom, so pricing varies based on scope. Get in touch and we'll provide a detailed quote after understanding your needs.",
  },
];

function Services() {
  return (
    <>
      <header className="px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Services</Eyebrow>
          <h1 className="text-5xl md:text-[120px] font-extrabold leading-[0.9] tracking-tighter mb-12">
            What We <span className="font-serif italic font-medium text-primary">Build.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Three integrated practices. One studio. Brand, platform, and intelligent systems built
            from the ground up to grow your business.
          </p>
        </div>
      </header>

      {services.map((s, idx) => (
        <Section
          key={s.id}
          className={idx % 2 === 0 ? "bg-card border-y border-border" : ""}
        >
          <div id={s.id} className="scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-primary font-bold italic font-serif text-xl mb-4">
                {s.n}/
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
                {s.title}
              </h2>
              <p className="text-muted text-lg leading-relaxed">{s.intro}</p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {s.includes.map((i) => (
                    <li key={i} className="flex gap-3 text-foreground">
                      <span className="text-primary">—</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary">
                  Our Process
                </h3>
                <ol className="space-y-3">
                  {s.process.map((p, i) => (
                    <li key={p} className="flex gap-3">
                      <span className="font-bold font-serif italic text-primary">{i + 1}.</span>
                      <span className="text-muted">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="md:col-span-2 border-t border-border pt-6">
                <div className="text-xs uppercase tracking-widest text-muted mb-2">Example Outcome</div>
                <p className="text-lg">{s.example}</p>
                {s.caseStudy && (
                  <Link
                    to="/work/$slug"
                    params={{ slug: s.caseStudy.slug }}
                    className="mt-4 inline-block text-sm font-bold uppercase tracking-widest hover:text-primary"
                  >
                    {s.caseStudy.label} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Comparison */}
      <Section>
        <Eyebrow>How We're Different</Eyebrow>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-16">Why Choose Slate Labs.</h2>
        <div className="border border-border">
          <div className="grid grid-cols-4 bg-foreground text-background text-xs font-bold uppercase tracking-widest">
            <div className="p-4" />
            <div className="p-4 text-primary">Slate Labs</div>
            <div className="p-4">Traditional Agencies</div>
            <div className="p-4">Freelancers</div>
          </div>
          {comparison.map((c) => (
            <div
              key={c.row}
              className="grid grid-cols-4 border-t border-border text-sm"
            >
              <div className="p-4 font-bold">{c.row}</div>
              <div className="p-4 text-foreground">{c.slate}</div>
              <div className="p-4 text-muted">{c.trad}</div>
              <div className="p-4 text-muted">{c.free}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-card border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-tighter">
              Frequently Asked Questions.
            </h2>
          </div>
          <div className="md:col-span-8 divide-y divide-border">
            {faqs.map((f) => (
              <details key={f.q} className="py-6 group">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4">
                  <span className="text-xl font-bold tracking-tight">{f.q}</span>
                  <span className="text-primary text-2xl font-serif italic group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
            Ready to <span className="font-serif italic text-primary">get started?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <CtaButton to="/contact" variant="primary">Book a Consultation</CtaButton>
            <CtaButton to="/work" variant="secondary">See Our Work</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
