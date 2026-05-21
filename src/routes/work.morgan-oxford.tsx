import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Database, Users, Globe, BarChart3, Network, ShieldCheck } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";

const project = projects.find((p) => p.slug === "morgan-oxford")!;

export const Route = createFileRoute("/work/morgan-oxford")({
  head: () => ({
    meta: [
      { title: "Morgan Oxford Education — Custom CRM — Slate Labs" },
      { name: "description", content: "Bespoke CRM built to orchestrate global student recruitment at scale for Morgan Oxford Education, paired with a full website revamp." },
      { property: "og:title", content: "Morgan Oxford Education — Custom CRM — Slate Labs" },
      { property: "og:description", content: "Bespoke CRM built to orchestrate global student recruitment at scale, paired with a full website revamp." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/morgan-oxford" },
      { property: "og:image", content: project.image },
    ],
    links: [{ rel: "canonical", href: "/work/morgan-oxford" }],
  }),
  component: MorganOxfordCaseStudy,
});

const palette = [
  { name: "Slate Dark", hex: "#2A3347" },
  { name: "Steel Grey", hex: "#5B6E8A" },
  { name: "System Cyan", hex: "#00D9FF" },
  { name: "Cloud White", hex: "#F2F4F8" },
  { name: "Deep Navy", hex: "#1A2235" },
];

const solutions = [
  { icon: Database, title: "Custom CRM Architecture", desc: "Designed and built a fully bespoke CRM system tailored to the unique workflows of an international student recruitment agency — no off-the-shelf compromise." },
  { icon: Users, title: "Student Pipeline Management", desc: "End-to-end tracking of every student from initial enquiry through consultation, application, and final enrolment — with status visibility at every stage." },
  { icon: Globe, title: "Global University Placement Engine", desc: "Intelligent matching logic that aligns student profiles with university requirements across multiple countries and intake windows." },
  { icon: BarChart3, title: "Operations Dashboard", desc: "Real-time analytics covering recruitment conversion rates, counsellor workloads, and regional performance — giving leadership full operational visibility." },
  { icon: Network, title: "Automated Workflow System", desc: "Smart automations handle follow-up reminders, document checklists, and application deadlines — reducing manual overhead and human error significantly." },
  { icon: ShieldCheck, title: "Data Security & Compliance", desc: "GDPR-compliant data handling with role-based access controls, audit trails, and encrypted storage to protect sensitive student and university data." },
  { icon: Globe, title: "Website Revamp", desc: "A full rebuild of MorganOxford.com — a modern, fast, conversion-focused site that mirrors the consultancy's premium positioning and routes prospective students straight into the CRM pipeline." },
];

function MorganOxfordCaseStudy() {
  return (
    <>
      {/* Hero */}
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <Link to="/work" className="text-sm text-muted hover:text-primary">← All work</Link>

          <div className="mt-12 flex justify-center">
            <div className="w-28 h-32 rounded-3xl border border-border bg-surface/60 backdrop-blur flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-primary" strokeWidth={1.75} />
            </div>
          </div>

          <div className="mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            Intelligent Systems · CRM
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance">
            Morgan Oxford <br />
            <span className="text-primary">Education</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Bespoke CRM built to orchestrate global student recruitment at scale
          </p>
        </div>
      </header>

      {/* The Brief */}
      <Section>
        <div className="max-w-4xl">
          <Eyebrow>The brief</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance">
            International education deserves <span className="text-primary">intelligent infrastructure.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Morgan Oxford Education is a global consultancy guiding students from initial enquiry all the way to successful university enrolment across multiple countries. Their existing tooling — a patchwork of spreadsheets and generic CRMs — couldn't handle the complexity of multi-region student data, university placement logic, or counsellor workflows. They needed a system built entirely around their process, not the other way around.
          </p>
        </div>
      </Section>

      {/* System Palette */}
      <Section>
        <Eyebrow>System palette</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          Built for clarity, <span className="text-primary">built for scale.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {palette.map((c) => (
            <div key={c.hex} className="bg-surface rounded-3xl p-4">
              <div
                className="aspect-square rounded-2xl border border-border"
                style={{ backgroundColor: c.hex }}
              />
              <div className="px-2 pt-4 pb-2">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-muted mt-1 font-mono">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* The Solution */}
      <Section>
        <div className="max-w-4xl mb-16">
          <Eyebrow>The solution</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-balance">
            A CRM that thinks <span className="text-primary">the way they work.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            We developed a fully bespoke CRM system to streamline international student recruitment, university placement tracking, and academic consultancy workflows. The system optimises Morgan Oxford's global operations — managing complex student data from initial enquiry to successful enrolment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface rounded-3xl p-8 border border-border">
              <Icon className="w-7 h-7 text-primary mb-6" strokeWidth={1.75} />
              <h3 className="text-xl font-medium tracking-tight mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Website */}
      <Section>
        <Eyebrow>The website</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          A new front door for <span className="text-primary">global students.</span>
        </h2>
        <div data-website-mockup className="bg-surface rounded-3xl p-4 border border-border">
          <div
            className="aspect-video rounded-2xl flex items-end p-6"
            style={{ background: "linear-gradient(135deg, #1A2235 0%, #2A3347 55%, #00D9FF 100%)" }}
          >
            <div className="text-background/90 text-xs font-medium tracking-[0.2em] uppercase">
              Placeholder
            </div>
          </div>
          <div className="px-2 pt-4 pb-2 text-center">
            <div className="text-sm font-medium">morganoxford.com — Revamp</div>
          </div>
        </div>
      </Section>

      {/* Info strip */}
      <Section>
        <div className="bg-surface border border-border rounded-[2.5rem] p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 md:divide-x md:divide-border">
            <div className="md:pr-8">
              <div className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">Sector</div>
              <div className="text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                International Education Agency &amp; Consultancy
              </div>
            </div>
            <div className="md:px-8">
              <div className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">Service Delivered</div>
              <div className="text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                Custom CRM System + Website Revamp
              </div>
            </div>
            <div className="md:pl-8">
              <div className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">Category</div>
              <div className="text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                Intelligent Systems
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <p className="text-muted mb-8">Need a custom intelligent system for your business?</p>
          <CtaButton to="/contact" variant="primary">Start Your Mission</CtaButton>
        </div>
      </Section>
    </>
  );
}
