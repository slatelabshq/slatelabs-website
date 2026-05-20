import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Slate Labs" },
      {
        name: "description",
        content:
          "Two founders. One vision. Meet the team building brands and platforms on a clean slate from Lagos, Nigeria.",
      },
      { property: "og:title", content: "About — Slate Labs" },
      {
        property: "og:description",
        content:
          "Two founders. One vision. Meet the team building brands and platforms on a clean slate.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const team = [
  {
    name: "Joseph Awujoola-Kalohun",
    role: "Creative Director & Brand Strategist",
    bio: "Joseph leads brand strategy and creative direction—translating client stories into visual systems and social presence that move audiences.",
  },
  {
    name: "Olasukanmi Adeyeye (SK)",
    role: "CTO & Platform Engineer",
    bio: "SK architects and ships the platforms. From SaaS products to bespoke web applications, he turns ambitious briefs into working systems.",
  },
  {
    name: "Kehinde Abiola",
    role: "COO — Head of Operations & Strategy",
    bio: "Kenny runs operations and strategy—keeping engagements on time, on budget, and aligned with the outcomes that matter to clients.",
  },
];

const philosophy = [
  {
    title: "No Quick Fixes",
    body:
      "Real solutions take time. We don't patch over problems—we rebuild from the ground up. Quality over speed, always.",
  },
  {
    title: "Tailored, Not Templated",
    body:
      "Every business is different. We don't recycle solutions. We build custom strategies, platforms, and content designed specifically for your goals.",
  },
  {
    title: "Creative + Technical, Always",
    body:
      "Great businesses aren't built on templates. They're built on vision, strategy, and execution working together—under one roof.",
  },
];

const process = [
  { n: "01", title: "Listen", body: "We start by understanding your story, your challenges, and what's not working." },
  { n: "02", title: "Strategize", body: "We map a tailored plan—brand, platform, systems—pointed at your specific goals." },
  { n: "03", title: "Build", body: "Our creative and technical teams build in sync, with you in the loop the whole way." },
  { n: "04", title: "Launch & Grow", body: "We don't disappear after launch. We measure, iterate, and keep growing with you." },
];

function About() {
  return (
    <>
      <header className="px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>About</Eyebrow>
          <h1 className="text-5xl md:text-[120px] font-extrabold leading-[0.9] tracking-tighter mb-12">
            We're <span className="font-serif italic font-medium text-primary">Slate Labs.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Two founders. One vision. Everything you need to build a brand and platform that lasts.
          </p>
        </div>
      </header>

      <Section className="bg-card border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>Our Mission</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-serif italic leading-snug">
              To give businesses a clean slate—a fresh start to rebuild their brand, rethink their
              platforms, and reimagine their growth. We combine creative excellence with technical
              precision to deliver integrated solutions that don't just look good, but work
              flawlessly and scale exponentially.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-tighter">How Slate Labs Began.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted text-lg leading-relaxed">
            <p>Slate Labs didn't start as an agency. It started as a realization.</p>
            <p>
              We'd been working in marketing and social media management, building brands for
              clients and seeing real results. But the more we worked, the more we saw a problem:
              our clients needed more than just great content or a social strategy. They needed
              cohesive branding, functional websites, scalable systems—everything working together.
              And most agencies couldn't offer that. They were either creative or technical, hardly
              both.
            </p>
            <p>
              Meanwhile, SK and Kenny were building businesses on the technical side—developing
              platforms, building systems, creating SaaS products. They were good at what they did,
              but clients kept coming to them for a website with no brand strategy, no clear
              positioning, no content plan. Even after the build was done, the business still needed
              someone to take it to market.
            </p>
            <p className="text-foreground font-medium">
              That's when we realized: we needed each other.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <Eyebrow>The Team</Eyebrow>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-16">Meet the Founders.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((m, i) => (
            <div key={m.name} className="border-t border-border pt-6">
              <div className="text-primary font-bold italic font-serif text-xl mb-4">
                0{i + 1}/
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">{m.name}</h3>
              <div className="text-xs uppercase tracking-widest text-muted mb-6">{m.role}</div>
              <p className="text-muted leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>How We Work</Eyebrow>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-16">Our Process.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((p) => (
            <div key={p.n} className="border-t border-border pt-6">
              <div className="text-primary font-bold italic font-serif text-xl mb-4">{p.n}/</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground text-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary">
              What We Believe
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter">Our Philosophy.</h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            {philosophy.map((p) => (
              <div key={p.title}>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{p.title}</h3>
                <p className="text-background/70 leading-relaxed text-lg">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
            Want to <span className="font-serif italic text-primary">work with us?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's Talk</CtaButton>
        </div>
      </Section>
    </>
  );
}
