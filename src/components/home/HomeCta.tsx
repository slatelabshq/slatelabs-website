import { CtaButton } from "@/components/CtaButton";
import { Magnetic } from "@/components/home/Magnetic";
import { CALENDLY_URL } from "@/lib/calendly";

export function HomeCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground px-6 lg:px-10 py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />
      <div className="grain-overlay absolute inset-0 opacity-35" />
      <div className="relative max-w-[90rem] mx-auto text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/45 mb-8">
          08 — Start
        </p>
        <h2 className="font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.04em] text-balance">
          Ready for your
          <br />
          <span className="italic text-primary">clean slate?</span>
        </h2>
        <p className="mt-8 text-ink-foreground/65 text-lg max-w-xl mx-auto leading-relaxed">
          Fresh start. Clear vision. Exponential growth. Let&apos;s build something the market hasn&apos;t seen yet.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <CtaButton to="/contact" variant="inverse">
              Get started
            </CtaButton>
          </Magnetic>
          <Magnetic strength={0.18}>
            <CtaButton href={CALENDLY_URL} external variant="ghost">
              Book a 20-min call
            </CtaButton>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
