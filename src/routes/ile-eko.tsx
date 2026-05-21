import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/ile-eko")({
  head: () => ({
    meta: [
      { title: "Ile Eko — Modern LMS for Nigerian Schools" },
      { name: "description", content: "Ile Eko is a complete learning management system designed for Nigerian schools. Manage students, grades, parent communication, and analytics in one platform." },
      { property: "og:title", content: "Ile Eko — Modern LMS for Nigerian Schools" },
      { property: "og:description", content: "Bridge traditional learning with digital tools. Manage students, track grades, communicate with parents, and scale your school." },
      { property: "og:url", content: "/ile-eko" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/ile-eko" }],
  }),
  component: IleEko,
});

const problems = [
  "Student records scattered across Excel sheets and paper files",
  "Teachers spending hours on manual grading and attendance",
  "Parents calling constantly for updates on their child's progress",
  "No easy way to track performance trends or generate reports",
  "Systems that don't talk to each other—enrollment, academics, communication all separate",
];

const benefits = [
  { title: "Save time", body: "Automate manual tasks so teachers can focus on teaching, not paperwork." },
  { title: "Stay organized", body: "All student data, grades, and communications in one secure place." },
  { title: "Better communication", body: "Parents get real-time updates on their child's progress." },
  { title: "Better decisions", body: "Track trends, spot struggling students early, measure what's working." },
];

const features = [
  { n: "01", title: "Student management", body: "Manage enrollments, track attendance, store records, and access everything in seconds." },
  { n: "02", title: "Lesson planning", body: "Plan lessons, upload materials, and align with curriculum standards." },
  { n: "03", title: "Grades & reporting", body: "Enter grades, calculate averages, generate report cards, and export transcripts." },
  { n: "04", title: "Parent communication", body: "Send updates, share progress reports, and communicate with parents directly." },
  { n: "05", title: "Analytics", body: "Track performance trends, identify at-risk students, and make data-driven decisions." },
  { n: "06", title: "Mobile access", body: "Teachers, parents, and admins access Ile Eko from any device." },
];

const steps = [
  { n: "01", title: "Onboarding", body: "We set up your school's account, migrate data, and configure the system." },
  { n: "02", title: "Training", body: "We train your staff with live sessions, video tutorials, and documentation." },
  { n: "03", title: "Implementation", body: "You go live. Students enrolled, teachers using the platform, parents get access." },
  { n: "04", title: "Ongoing support", body: "Support, updates, and new features as we continue improving the platform." },
];

const tiers = [
  { name: "Starter", tag: "For small schools", features: ["Up to 200 students", "Basic features", "Email support", "1 admin account"] },
  { name: "Professional", tag: "Most popular", highlight: true, features: ["Up to 500 students", "All features", "Priority support", "5 admin accounts", "Analytics & reporting"] },
  { name: "Enterprise", tag: "For large schools", features: ["500+ students", "All features", "Dedicated support", "Unlimited admins", "Custom integrations", "White-label options"] },
];

const faqs = [
  { q: "How long does setup take?", a: "Typically 2–4 weeks from contract signing to launch, depending on your school's size and data migration needs." },
  { q: "Do you provide training?", a: "Yes. We train your staff through live sessions, video tutorials, and written documentation. Support continues after launch." },
  { q: "What support do you offer?", a: "Email support for all plans, priority support for Professional, dedicated support for Enterprise." },
  { q: "Can we customize Ile Eko?", a: "Professional plans offer configuration options. Enterprise plans can include custom features and integrations." },
  { q: "Is our data secure?", a: "Yes. We use industry-standard encryption, regular backups, and secure hosting." },
  { q: "What if we need to cancel?", a: "We offer flexible terms. You can export your data at any time." },
];

function IleEko() {
  return (
    <>
      <header className="px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Eyebrow>Ile Eko · Product</Eyebrow>
            <h1 className="text-5xl md:text-6xl font-medium leading-[1.05] tracking-[-0.03em] mb-8">
              Modern learning management for{" "}
              <span className="text-primary">Nigerian schools.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-10 max-w-xl">
              Bridge traditional learning with digital tools. Manage students, track grades, communicate with parents, and scale your school—all in one platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton to="/contact" variant="primary">Book a demo</CtaButton>
              <CtaButton to="/ile-eko" hash="pricing" variant="secondary">See pricing</CtaButton>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem]">
              <img src={workIleEko} alt="Ile Eko dashboard" width={1280} height={960} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Problem */}
      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="inline-flex items-center gap-2 text-sm text-primary mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                The problem
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Does this sound familiar?</h2>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex gap-4 text-background/80 border-b border-background/10 pb-4">
                    <span className="text-primary">×</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <Eyebrow>Meet Ile Eko</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 max-w-3xl">
          A complete LMS designed specifically for Nigerian schools.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="rounded-3xl bg-surface p-8 hover-lift">
              <h3 className="text-lg font-medium tracking-tight mb-3">{b.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <Eyebrow>Features</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">
          Everything you need, one platform.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={(i % 3) * 80} className="rounded-3xl bg-surface p-8 hover-lift">
              <div className="text-sm text-primary mb-4">{f.n}</div>
              <h3 className="text-lg font-medium tracking-tight mb-3">{f.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <Eyebrow>How it works</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">
          Simple setup, seamless implementation.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="rounded-3xl bg-surface p-8 hover-lift">
              <div className="text-sm text-primary mb-4">{s.n}</div>
              <h3 className="text-lg font-medium tracking-tight mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div id="pricing" className="scroll-mt-24">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Pricing built for Nigerian schools.
          </h2>
          <p className="text-muted mb-16 max-w-xl">
            All plans include onboarding, training, and ongoing updates. Custom pricing available for multi-school groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 100}
                className={`rounded-3xl p-8 hover-lift ${
                  t.highlight
                    ? "bg-surface border-2 border-primary animate-soft-pulse"
                    : "bg-surface border border-border"
                }`}
              >
                <div className="text-xs font-medium text-primary mb-2">{t.tag}</div>
                <h3 className="text-2xl font-medium tracking-tight mb-8">{t.name}</h3>
                <ul className="space-y-3 mb-10 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-primary">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-medium text-muted">Contact for pricing</div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Common questions.</h2>
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
            Ready to modernize your <span className="text-primary">school?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaButton to="/contact" variant="primary">Book a demo</CtaButton>
            <CtaButton to="/contact" variant="secondary">Contact sales</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
