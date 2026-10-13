import { Reveal } from "@/components/Reveal";

const differentiators = [
  {
    n: "01",
    title: "A fresh perspective",
    body: "We don't do quick fixes or generic templates. Every project starts with a clean slate — we understand what's not working, then build for your specific goals.",
  },
  {
    n: "02",
    title: "Creative meets technical",
    body: "Most agencies are either creative or technical. We're both. Brand strategy and platform development are aligned from day one.",
  },
  {
    n: "03",
    title: "Proven track record",
    body: "From a producer collective that became the brand behind Nigeria's #1 rap song to saving an education team 8+ hours a week, we deliver measurable results.",
  },
  {
    n: "04",
    title: "We listen, we don't judge",
    body: "Your challenges are opportunities. You get direct access to the founders — no scripts, no account managers.",
  },
];

export function HomePhilosophy() {
  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 bg-background">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
              05 — Why Slate
            </p>
            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.9] tracking-[-0.035em]">
              We don&apos;t renovate.
              <br />
              We build from <span className="italic text-primary">zero.</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-md">
              Most agencies try to fix what&apos;s broken. We believe in the power of the blank page to unlock true growth.
            </p>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {differentiators.map((d, i) => (
              <Reveal
                key={d.n}
                delay={i * 80}
                className="bg-background p-8 md:p-10 hover:bg-surface transition-colors"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-6">
                  {d.n}
                </p>
                <h3 className="text-xl font-medium tracking-tight mb-3">{d.title}</h3>
                <p className="text-muted leading-relaxed">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
