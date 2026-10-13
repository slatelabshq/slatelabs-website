import { Reveal } from "@/components/Reveal";

const stats = [
  { v: "300K+", l: "Organic views in 30 days", sub: "44DB — May 2026" },
  { v: "#1", l: "Rap song in Nigeria, co-produced by our client", sub: "Blaqbonez ft. Asake" },
  { v: "8hrs+", l: "Operational time saved weekly", sub: "Morgan Oxford Education" },
  { v: "250K+", l: "YouTube views in 11 days", sub: "Nelly Baradi — High Me" },
];

export function HomeProof() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground px-6 lg:px-10 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
      <div className="grain-overlay absolute inset-0 opacity-30" />
      <div className="relative max-w-[90rem] mx-auto">
        <Reveal className="mb-16 md:mb-20 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/45 mb-4">
            04 — Proof
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.03em]">
            Numbers from the work, not from a pitch deck.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/10">
          {stats.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 90}
              className="bg-ink px-6 py-10 md:p-10"
            >
              <p
                className="font-display text-5xl md:text-6xl tracking-[-0.04em] text-primary tabular-nums"
                aria-label={s.v}
              >
                {s.v}
              </p>
              <p className="mt-4 text-ink-foreground/85 leading-snug">{s.l}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-foreground/40">
                {s.sub}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
