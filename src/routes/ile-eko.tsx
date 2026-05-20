import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import workIleEko from "@/assets/work-ileeko.jpg";

export const Route = createFileRoute("/ile-eko")({
  head: () => ({
    meta: [
      { title: "Ile Eko — Modern LMS for Nigerian Schools" },
      {
        name: "description",
        content:
          "Ile Eko is a complete learning management system designed for Nigerian schools. Manage students, grades, parent communication, and analytics in one platform.",
      },
      { property: "og:title", content: "Ile Eko — Modern LMS for Nigerian Schools" },
      {
        property: "og:description",
        content:
          "Bridge traditional learning with digital tools. Manage students, track grades, communicate with parents, and scale your school.",
      },
      { property: "og:url", content: "/ile-eko" },
      { property: "og:type", content: "product" },
      { property: "og:image", content: workIleEko },
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
  { title: "Save Time", body: "Automate manual tasks so teachers can focus on teaching, not paperwork." },
  { title: "Stay Organized", body: "All student data, grades, and communications in one secure place." },
  { title: "Improve Communication", body: "Parents get real-time updates on their child's progress—no more phone tag." },
  { title: "Make Better Decisions", body: "Track trends, spot struggling students early, and measure what's working." },
];

const features = [
  { n: "01", title: "Student Management", body: "Manage enrollments, track attendance, store student records, and access everything in seconds." },
  { n: "02", title: "Lesson Planning & Curriculum", body: "Plan lessons, upload materials, and align with curriculum standards—all in one place." },
  { n: "03", title: "Grade Tracking & Reporting", body: "Enter grades, calculate averages, generate report cards, and export transcripts automatically." },
  { n: "04", title: "Parent Communication", body: "Send updates, share progress reports, and communicate with parents directly through the platform." },
  { n: "05", title: "Analytics & Insights", body: "Track performance trends, identify at-risk students, and make data-driven decisions." },
  { n: "06", title: "Mobile Access", body: "Teachers, parents, and administrators can access Ile Eko from any device—desktop, tablet, or phone." },
];

const steps = [
  { n: "01", title: "Onboarding", body: "We set up your school's account, migrate existing student data, and configure the system to match your structure." },
  { n: "02", title: "Training", body: "We train your staff with live sessions, video tutorials, and documentation." },
  { n: "03", title: "Implementation", body: "You go live. Students are enrolled, teachers start using the platform, parents get access." },
  { n: "04", title: "Ongoing Support", body: "You get ongoing support, updates, and new features as we continue improving the platform." },
];

const tiers = [
  {
    name: "Starter",
    tag: "For small schools",
    features: ["Up to 200 students", "Basic features", "Email support", "1 admin account"],
  },
  {
    name: "Professional",
    tag: "Most popular",
    highlight: true,
    features: ["Up to 500 students", "All features", "Priority support", "5 admin accounts", "Analytics & reporting"],
  },
  {
    name: "Enterprise",
    tag: "For large schools",
    features: ["500+ students", "All features", "Dedicated support", "Unlimited admins", "Custom integrations", "White-label options"],
  },
];

const faqs = [
  { q: "How long does setup take?", a: "Typically 2–4 weeks from contract signing to launch, depending on your school's size and data migration needs." },
  { q: "Do you provide training?", a: "Yes. We train your staff through live sessions, provide video tutorials, and offer written documentation. Support continues after launch." },
  { q: "What support do you offer?", a: "Email support for all plans, priority support for Professional, dedicated support for Enterprise. We also provide regular platform updates." },
  { q: "Can we customize Ile Eko?", a: "Professional plans offer configuration options (grading scales, term structures, etc.). Enterprise plans can include custom features and integrations." },
  { q: "Is our data secure?", a: "Yes. We use industry-standard encryption, regular backups, and secure hosting. Your student data is protected and private." },
  { q: "What if we need to cancel?", a: "We offer flexible terms. You can export your data at any time, and we'll work with you if circumstances change." },
];

function IleEko() {
  return (
    <>
      <header className="px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <Eyebrow>Ile Eko · Product</Eyebrow>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter mb-8">
              Modern learning management for{" "}
              <span className="font-serif italic font-medium text-primary">Nigerian schools.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl">
              Bridge traditional learning with digital tools. Manage students, track grades,
              communicate with parents, and scale your school—all in one platform.
            </p>
            <div className="flex flex-wrap gap-6">
              <CtaButton to="/contact" variant="primary">Book a Demo</CtaButton>
              <CtaButton to="/ile-eko" hash="pricing" variant="secondary">See Pricing</CtaButton>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <img
                src={workIleEko}
                alt="Ile Eko dashboard"
                width={1280}
                height={960}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Problem */}
      <Section className="bg-foreground text-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary">
              The Problem
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter">Does this sound familiar?</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex gap-4 text-lg text-background/80 border-b border-background/10 pb-4">
                  <span className="text-primary font-serif italic">×</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-background/60 text-lg leading-relaxed">
              Most schools are using outdated systems or trying to patch together tools that
              weren't built for education. The result? Wasted time, frustrated staff, and missed
              opportunities to improve student outcomes.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <Eyebrow>Meet Ile Eko</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-16 max-w-3xl">
          A complete LMS designed specifically for Nigerian schools.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="border-t border-border pt-6">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{b.title}</h3>
              <p className="text-muted leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-card border-y border-border">
        <Eyebrow>Features</Eyebrow>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-16">
          Everything you need, one platform.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.n}>
              <div className="text-primary font-bold italic font-serif text-xl mb-4">{f.n}/</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{f.title}</h3>
              <p className="text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-16">
          Simple setup, seamless implementation.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-border pt-6">
              <div className="text-primary font-bold italic font-serif text-xl mb-4">{s.n}/</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-foreground text-background">
        <div id="pricing" className="scroll-mt-24">
          <div className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Pricing built for Nigerian schools.
          </h2>
          <p className="text-background/60 mb-16 max-w-xl">
            All plans include onboarding, training, and ongoing updates. Custom pricing available
            for multi-school groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-8 border ${
                  t.highlight
                    ? "bg-background text-foreground border-primary"
                    : "border-background/20"
                }`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                    t.highlight ? "text-primary" : "text-primary"
                  }`}
                >
                  {t.tag}
                </div>
                <h3 className="text-3xl font-extrabold tracking-tighter mb-8">{t.name}</h3>
                <ul className="space-y-3 mb-10">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-primary">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold">Contact for pricing</div>
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
            <h2 className="text-4xl font-extrabold tracking-tighter">Common Questions.</h2>
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

      <Section className="bg-card border-t border-border">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
            Ready to modernize <br />
            your <span className="font-serif italic text-primary">school?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <CtaButton to="/contact" variant="primary">Book a Demo</CtaButton>
            <CtaButton to="/contact" variant="secondary">Contact Sales</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
