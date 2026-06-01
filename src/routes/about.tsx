import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import photoJoseph from "@/assets/team-joseph.png";
import photoKehinde from "@/assets/team-kehinde.png";

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
    photo: photoJoseph,
  },
  {
    name: "Olasukanmi Adeyeye (SK)",
    role: "Co-Founder & CTO",
    bio:
      "SK architects the platforms. From SaaS products to custom CRMs and intelligent systems, he turns ambitious technical briefs into working products. As CTO, he leads the entire engineering and systems practice.",
    initials: "SK",
  },
];

const team: Member[] = [
  {
    name: "Kehinde Abiola (Kenny)",
    role: "COO, Head of Operations",
    bio:
      "Kenny keeps Slate Labs operational — managing engagements, timelines, and financial health so the founders can focus on building and delivering.",
    photo: photoKehinde,
  },
  {
    name: "Adeola Titilola",
    role: "Content Strategist",
    bio:
      "Adeola develops and executes content strategy across client accounts — building the editorial frameworks and copy that give brands a consistent voice.",
    initials: "AT",
  },
  {
    name: "Michael Ikehi",
    role: "Full-Stack Developer",
    bio:
      "Michael builds on the frontend and backend — shipping features, fixing bugs, and keeping client platforms running at the standard they were launched at.",
    initials: "MI",
  },
  {
    name: "Jael Chinwe",
    role: "Brand & Social Strategist",
    bio:
      "Jael manages day-to-day social presence for Slate Labs's clients — from content scheduling to community engagement and performance tracking.",
    initials: "JC",
  },
  {
    name: "Elizabeth Enoch",
    role: "Partnerships & Growth Lead",
    bio:
      "Elizabeth owns the client pipeline — prospecting, outreach, and business development that keeps Slate Labs growing and finding the right clients.",
    initials: "EE",
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
    <Reveal delay={i * 90} className="rounded-3xl bg-surface p-8 hover-lift">
      <div className="aspect-square w-full rounded-2xl overflow-hidden bg-background mb-6 flex items-center justify-center">
        {m.photo ? (
          <img src={m.photo} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <span className="text-5xl font-medium tracking-tight text-muted">{m.initials}</span>
        )}
      </div>
      <div className="text-sm text-primary mb-3">{String(i + 1).padStart(2, "0")}</div>
      <h3 className="text-xl font-medium tracking-tight mb-1">{m.name}</h3>
      <div className="text-sm text-muted mb-6">{m.role}</div>
      <p className="text-muted leading-relaxed">{m.bio}</p>
    </Reveal>
  );
}

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
            A Lagos-based Creative &amp; Tech Agency. Brand, growth, platforms, and intelligent systems — under one roof.
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

      {/* The Founders */}
      <Section>
        <Eyebrow>The team</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">The Founders.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </Section>

      {/* The Team */}
      <Section>
        <Eyebrow>The team</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">Meet the rest of the team.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>How we work</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">Our process.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 80} className="rounded-3xl bg-surface p-8 hover-lift">
              <div className="text-sm text-primary mb-4">{p.n}</div>
              <h3 className="text-lg font-medium tracking-tight mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{p.body}</p>
            </Reveal>
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
