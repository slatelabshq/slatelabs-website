import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import logoWordmark from "@/assets/slate-logo-wordmark.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Slate Labs" },
      {
        name: "description",
        content:
          "Meet the team behind Slate Labs — a Lagos Creative & Tech Agency. Co-founders Joseph Awujoola-Kalohun (CEO) and SK Adeyeye (CTO) lead brand strategy, growth marketing, digital platforms, and AI automation.",
      },
      { property: "og:title", content: "About — Slate Labs" },
      {
        property: "og:description",
        content:
          "Meet the team behind Slate Labs — Lagos's Creative & Tech Agency. Brand strategy, growth marketing, digital platforms, and AI automation.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

type Member = { name: string; role: string; bio: string; photo?: string; initials?: string };

const founders: Member[] = [
  {
    name: "Joseph Awujoola-Kalohun",
    role: "Co-Founder & CEO",
    bio:
      "Joseph leads strategy and creative direction — translating client goals into brand systems, campaigns, and digital presence that move markets. As CEO, he steers Slate Labs's vision and client relationships from the front.",
    photo: "/about/Joseph.jpg",
  },
  {
    name: "Olasukanmi Adeyeye (SK)",
    role: "Co-Founder & CTO",
    bio:
      "SK architects the platforms. From SaaS products to custom CRMs and intelligent systems, he turns ambitious technical briefs into working products. As CTO, he leads the entire engineering and systems practice.",
    photo: "/about/SK.jpg",
  },
];

const team: Member[] = [
  {
    name: "Adeola Titilola",
    role: "COO & Content Strategist",
    bio:
      "Adeola keeps Slate Labs running day to day while developing content strategy across client accounts — editorial frameworks and copy that give brands a consistent voice.",
    photo: "/about/Adeola.jpg",
  },
  {
    name: "Michael Ikehi",
    role: "Full-Stack, AI/ML & Mobile Developer",
    bio:
      "Michael builds full-stack web, mobile, and AI/ML systems — shipping features, fixing bugs, and keeping client platforms at the standard they launched with.",
    photo: "/about/Michael.jpg",
  },
  {
    name: "David Francis",
    role: "Graphic Designer & UI/UX",
    bio:
      "David shapes how Slate Labs and our clients look and feel — from brand visuals and marketing assets to interfaces that are clear, polished, and on-brand.",
    photo: "/about/David.jpg",
  },
  {
    name: "Jael Chinwe",
    role: "Brand & Social Strategist",
    bio:
      "Jael manages day-to-day social presence for Slate Labs's clients — from content scheduling to community engagement and performance tracking.",
    photo: "/about/Jael.jpg",
  },
  {
    name: "Elizabeth Enoch",
    role: "Partnerships & Growth Lead",
    bio:
      "Elizabeth owns the client pipeline — prospecting, outreach, and business development that keeps Slate Labs growing and finding the right clients.",
    photo: "/about/elizabeth.jpg",
  },
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

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <Reveal delay={i * 90} className="group">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface mb-6">
        {m.photo ? (
          <img
            src={m.photo}
            alt={m.name}
            className="w-full h-full object-cover img-zoom"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ink text-ink-foreground">
            <span className="font-display text-6xl italic text-primary/80">{m.initials}</span>
          </div>
        )}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2">
        {String(i + 1).padStart(2, "0")}
      </p>
      <h3 className="text-xl font-medium tracking-tight mb-1">{m.name}</h3>
      <div className="text-sm text-muted mb-4">{m.role}</div>
      <p className="text-muted leading-relaxed text-sm">{m.bio}</p>
    </Reveal>
  );
}

function About() {
  return (
    <>
      <PageHero
        section="About"
        image={logoWordmark}
        imageAlt="Slate Labs"
        imageMode="logo"
        title={
          <>
            We&apos;re <span className="italic text-primary">Slate Labs.</span>
          </>
        }
        description="A Lagos-based creative & tech agency. Brand, growth, platforms, and intelligent systems — under one roof."
      />

      <Section className="!pt-10 md:!pt-12">
        <Reveal className="max-w-[90rem] mx-auto border-t border-border pt-8 md:pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-6">Our mission</p>
          <p className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.03em] max-w-4xl">
            To give businesses a clean slate — a fresh start to rebuild their brand, rethink their platforms, and reimagine their growth.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Our story</p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">How Slate Labs began.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted text-lg leading-relaxed">
            <p>Slate Labs didn't start as an agency. It started as a realization.</p>
            <p>
              We'd been working in marketing and social media, building brands and seeing real results. But clients needed more than great content—they needed cohesive branding, functional websites, scalable systems—everything working together. Most agencies couldn't offer that.
            </p>
            <p>
              Meanwhile, SK was building on the technical side—developing platforms and SaaS products. Clients kept coming to him for websites with no brand strategy, no clear positioning, no content plan.
            </p>
            <p className="text-foreground">That's when we realized: we needed each other.</p>
          </div>
        </div>
      </Section>

      {/* The Founders */}
      <Section>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">The team</p>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10">The founders.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {founders.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </Section>

      {/* The Team */}
      <Section>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">The team</p>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10">Meet the rest of the studio.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </Section>

      <Section>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">How we work</p>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10">Our process.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 80} className="bg-background p-8 md:p-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">{p.n}</div>
              <h3 className="text-lg font-medium tracking-tight mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-ink text-ink-foreground rounded-sm p-10 md:p-20 relative overflow-hidden">
          <div className="grain-overlay absolute inset-0 opacity-25" />
          <div className="relative">
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
                  <p className="text-ink-foreground/70 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </Section>

      {/* Press */}
      <Section>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-8">As seen in</div>
        <a
          href="https://refinedng.com/lagos-hustle-diaries-from-poetry-to-marketing-with-joseph-awujoola-kalohun/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-3xl bg-surface p-8 md:p-10 border-l-4 hover:bg-surface/80 transition-colors group"
          style={{ borderLeftColor: "#00D9FF" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-primary">RefinedNG</div>
            <div className="text-xs text-muted">February 6, 2026</div>
          </div>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 group-hover:text-primary transition-colors">
            Lagos Hustle Diaries: From Poetry to Marketing with Joseph Awujoola-Kalohun
          </h3>
          <p className="text-muted leading-relaxed mb-6">
            "Building a place where creative excellence meets technical precision — where the person managing your socials understands your data, and the person building your website understands your story."
          </p>
          <span className="text-sm font-medium group-hover:text-primary">Read the full feature →</span>
        </a>
      </Section>

      <Testimonials heading="What it's like to work with us." />

      <PageCta />
    </>
  );
}
