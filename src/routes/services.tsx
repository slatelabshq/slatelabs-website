import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { CALENDLY_URL } from "@/lib/calendly";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Slate Labs" },
      {
        name: "description",
        content:
          "Brand strategy, growth marketing, custom web development, and AI automation from Slate Labs — Lagos's creative and tech agency for businesses building from scratch. Serving clients across Nigeria and globally.",
      },
      { property: "og:title", content: "Services — Slate Labs" },
      {
        property: "og:description",
        content:
          "Brand strategy, growth marketing, custom web development, and AI automation from Slate Labs — Lagos's creative and tech agency.",
      },
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
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth Marketing", description: "Social media, paid ads, music marketing, and campaign strategy." } },
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

type CaseLink = { label: string; href: "/work/44db" | "/work/vida-rosa" | "/work/morgan-oxford" };

type Practice = {
  id: string;
  n: string;
  title: string;
  lead: string[];
  includes: string[];
  example: string;
  caseStudy: CaseLink;
};

const practices: Practice[] = [
  {
    id: "brand-strategy",
    n: "01",
    title: "Brand Strategy",
    lead: [
      "Most brands in Lagos have a logo. Few have a story. Fewer still have both working together across every surface — digital, physical, and cultural. Brand strategy is the difference between looking good and meaning something.",
    ],
    includes: [
      "Brand positioning & competitive strategy",
      "Naming & messaging architecture",
      "Visual identity (logo, colour, typography, motion)",
      "Brand guidelines & asset library",
      "Content strategy & voice development",
    ],
    example:
      "44DB went from an underground producer collective with under 1,000 monthly views to the brand behind Nigeria's #1 rap song — with a visual identity and a content system built to match their cultural weight.",
    caseStudy: { label: "See case study", href: "/work/44db" },
  },
  {
    id: "growth-marketing",
    n: "02",
    title: "Growth Marketing",
    lead: [
      "Content is a commodity. Strategy is rare. We manage social media, run paid campaigns, and execute music marketing for artists and collectives who want real traction — not just follower counts.",
      "Whether you're selling luxury cars to Lagos's top 1%, launching a product or record to the streets, or building an audience from zero — growth looks different for every client. We plan, execute, and measure accordingly.",
    ],
    includes: [
      "Social media management (strategy + execution)",
      "Paid advertising (Meta, Google, TikTok)",
      "Music marketing & campaign rollouts",
      "Influencer strategy & partnerships",
      "Analytics, reporting, and optimisation",
      "Content production (photo, video, graphics)",
    ],
    example:
      "In May 2026, we collaborated on the digital rollout for 'Chanel' by Blaqbonez ft. Asake — produced by Johnson IP of 44DB. 300,000+ organic views, 6,000,000 streams on Spotify in 7 days. The song became Nigeria's #1 rap record.",
    caseStudy: { label: "See case study", href: "/work/44db" },
  },
  {
    id: "digital-platforms",
    n: "03",
    title: "Digital Platforms",
    lead: [
      "A website should do more than exist. A platform should do more than function. We build custom digital products — from marketing websites to full SaaS applications — that solve specific problems and scale as your business grows.",
      "Every platform we build starts with one question: what does this need to do that no off-the-shelf tool can do? The answer becomes your competitive advantage.",
    ],
    includes: [
      "Websites & landing pages",
      "Web applications & dashboards",
      "SaaS products (end-to-end)",
      "E-commerce platforms",
      "API design & infrastructure",
      "CRM & internal tools",
    ],
    example:
      "We built a new website for Morgan Oxford Education that showcases the work they do. Live and in use by their full team.",
    caseStudy: { label: "See case study", href: "/work/morgan-oxford" },
  },
  {
    id: "intelligent-systems",
    n: "04",
    title: "Intelligent Systems",
    lead: [
      "Most businesses are running on manual. Data entry that takes hours. Customer enquiries that pile up. Reports that someone spends a Friday building. Decisions made on gut when they should be made on numbers.",
      "We find the 8 to 20 hours your team is losing every week and build systems that handle it. AI automation, workflow design, and intelligent infrastructure — not as a novelty, but as a business tool.",
    ],
    includes: [
      "AI chatbots & customer support agents",
      "Workflow automation (across any tool stack)",
      "Internal dashboards & reporting tools",
      "Data pipelines & analytics infrastructure",
      "Custom AI agents for operations, sales, or content",
      "System integration (connect your existing tools)",
    ],
    example:
      "We rebuilt the operational infrastructure for Morgan Oxford Education — consolidating fragmented manual processes into one integrated system. Result: 8+ hours saved per staff member per week.",
    caseStudy: { label: "See case study", href: "/work/morgan-oxford" },
  },
];

const comparison = [
  {
    row: "Practices",
    slate: "Brand + Marketing + Platform + Systems",
    trad: "One or two",
    free: "One at a time",
    inhouse: "Depends on headcount",
  },
  {
    row: "Approach",
    slate: "Clean-slate, tailored",
    trad: "Templated process",
    free: "Inconsistent",
    inhouse: "Internal politics",
  },
  {
    row: "Skills",
    slate: "Creative + Technical",
    trad: "One or the other",
    free: "Varies by person",
    inhouse: "Depends on hires",
  },
  {
    row: "Integration",
    slate: "Brand + platform together",
    trad: "Fragmented vendors",
    free: "You manage it",
    inhouse: "Cross-team coordination",
  },
  {
    row: "Access",
    slate: "Direct to founders",
    trad: "Account managers",
    free: "Maybe",
    inhouse: "Your own team",
  },
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
    a: "Every project is scoped individually. Brand strategy and identity projects typically start from ₦500,000. Digital platforms from ₦1.5M. Growth marketing retainers from ₦300,000/month. We'll give you a detailed quote after a discovery call — no commitment required.",
  },
];

function Services() {
  return (
    <>
      <header className="px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Services</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
            Four practices. One team. Everything you need to <span className="text-primary">build and grow.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Brand strategy and growth marketing. Digital platforms and intelligent systems. We don't hand you to a department, you work with the people who built this.
          </p>
        </div>
      </header>

      {practices.map((s) => (
        <Section key={s.id}>
          <div id={s.id} className="scroll-mt-24 bg-surface rounded-[2.5rem] p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="text-sm font-mono text-primary mb-4">{s.n}</div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">{s.title}</h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  {s.lead.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8 space-y-10">
                <div>
                  <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-[0.15em]">What's included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {s.includes.map((i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="text-primary">—</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-border">
                  <div className="text-xs text-muted mb-3 uppercase tracking-[0.15em]">Example outcome</div>
                  <p className="text-base leading-relaxed">{s.example}</p>
                  <Link
                    to={s.caseStudy.href}
                    className="mt-4 inline-block text-sm font-medium hover:text-primary"
                  >
                    {s.caseStudy.label} →
                  </Link>
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
        <div className="rounded-3xl border border-border overflow-x-auto">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-5 bg-foreground text-background text-xs font-medium">
              <div className="p-5" />
              <div className="p-5 text-primary">Slate Labs</div>
              <div className="p-5">Traditional Agencies</div>
              <div className="p-5">Freelancers</div>
              <div className="p-5">In-house</div>
            </div>
            {comparison.map((c, i) => (
              <div
                key={c.row}
                className={`grid grid-cols-5 text-sm ${i > 0 ? "border-t border-border" : ""}`}
              >
                <div className="p-5 font-medium">{c.row}</div>
                <div className="p-5">{c.slate}</div>
                <div className="p-5 text-muted">{c.trad}</div>
                <div className="p-5 text-muted">{c.free}</div>
                <div className="p-5 text-muted">{c.inhouse}</div>
              </div>
            ))}
          </div>
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
            <CtaButton href={CALENDLY_URL} external variant="secondary">Book a 20-min call</CtaButton>
            <CtaButton to="/work" variant="secondary">See our work</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
