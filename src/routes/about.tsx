import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Slate Labs" },
      { name: "description", content: "Two founders. One vision. Meet the team building brands and platforms on a clean slate from Lagos, Nigeria." },
      { property: "og:title", content: "About — Slate Labs" },
      { property: "og:description", content: "Two founders. One vision. Meet the team building brands and platforms on a clean slate." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const team = [
  { name: "Joseph Awujoola-Kalohun", role: "Creative Director & Brand Strategist", bio: "Joseph leads brand strategy and creative direction—translating client stories into visual systems and social presence that move audiences." },
  { name: "Olasukanmi Adeyeye (SK)", role: "CTO & Platform Engineer", bio: "SK architects and ships the platforms. From SaaS products to bespoke web applications, he turns ambitious briefs into working systems." },
  { name: "Kehinde Abiola", role: "COO — Head of Operations & Strategy", bio: "Kenny runs operations and strategy—keeping engagements on time, on budget, and aligned with the outcomes that matter to clients." },
];

const philosophy = [
  { title: "No quick fixes", body: "Real solutions take time. We don't patch over problems—we rebuild from the ground up." },
  { title: "Tailored, not templated", body: "Every business is different. We build custom strategies, platforms, and content designed for your goals." },
  { title: "Creative + technical, always", body: "Great businesses are built on vision, strategy, and execution working together—under one roof." },
];

const process = [
  { n: "01", title: "Listen", body: "We start by understanding your story, your challenges, and what's not working." },
  { n: "02", title: "Strategize", body: "We map a tailored plan—brand, platform, systems—pointed at your specific goals." },
  { n: "03", title: "Build", body: "Our creative and technical teams build in sync, with you in the loop the whole way." },
  { n: "04", title: "Launch & grow", body: "We don't disappear after launch. We measure, iterate, and keep growing with you." },
];

function About() {
  return (
    <>
      <header className="px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>About</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
            We're <span className="text-primary">Slate Labs.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted leading-relaxed">
            Two founders. One vision. Everything you need to build a brand and platform that lasts.
          </p>
        </div>
      </header>

      <Section>
        <div className="bg-surface rounded-[2.5rem] p-10 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <Eyebrow>Our mission</Eyebrow>
            </div>
            <p className="md:col-span-8 text-2xl md:text-3xl font-medium leading-snug tracking-tight">
              To give businesses a clean slate—a fresh start to rebuild their brand, rethink their platforms, and reimagine their growth.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">How Slate Labs began.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted text-lg leading-relaxed">
            <p>Slate Labs didn't start as an agency. It started as a realization.</p>
            <p>
              We'd been working in marketing and social media, building brands and seeing real results. But clients needed more than great content—they needed cohesive branding, functional websites, scalable systems—everything working together. Most agencies couldn't offer that.
            </p>
            <p>
              Meanwhile, SK and Kenny were building businesses on the technical side—developing platforms and SaaS products. Clients kept coming to them for websites with no brand strategy, no clear positioning, no content plan.
            </p>
            <p className="text-foreground">That's when we realized: we needed each other.</p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>The team</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">Meet the founders.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <div key={m.name} className="rounded-3xl bg-surface p-8">
              <div className="text-sm text-primary mb-6">0{i + 1}</div>
              <h3 className="text-xl font-medium tracking-tight mb-1">{m.name}</h3>
              <div className="text-sm text-muted mb-6">{m.role}</div>
              <p className="text-muted leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>How we work</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">Our process.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.n} className="rounded-3xl bg-surface p-8">
              <div className="text-sm text-primary mb-4">{p.n}</div>
              <h3 className="text-lg font-medium tracking-tight mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs text-primary mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                What we believe
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Our philosophy.</h2>
            </div>
            <div className="md:col-span-8 space-y-10">
              {philosophy.map((p) => (
                <div key={p.title}>
                  <h3 className="text-xl font-medium tracking-tight mb-2">{p.title}</h3>
                  <p className="text-background/70 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance">
            Want to <span className="text-primary">work with us?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's talk</CtaButton>
        </div>
      </Section>
    </>
  );
}
