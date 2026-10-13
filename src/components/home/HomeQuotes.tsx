import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const quotes = [
  {
    quote:
      "They didn't just manage our socials — they rebuilt how the world sees us. The month BREAKTIME dropped, we stopped feeling like a collective and started feeling like a movement.",
    name: "44DB",
    role: "Production Collective, Lagos",
  },
  {
    quote:
      "The CRM Slate Labs built fits how we actually work. New advisors are productive in under two weeks and I finally have visibility across every programme.",
    name: "Morgan Oxford Education",
    role: "Leadership, Lagos",
  },
  {
    quote:
      "Working with Slate Labs feels less like hiring an agency and more like adding a brand and tech team to our own. Strategy, creative, and engineering — one conversation.",
    name: "Vida Rosa",
    role: "Luxury Automotive, Lagos",
  },
];

export function HomeQuotes() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % quotes.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const q = quotes[i];

  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 bg-surface">
      <div className="max-w-[90rem] mx-auto">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-10">
            06 — Clients
          </p>
        </Reveal>
        <figure className="max-w-5xl">
          <blockquote
            key={q.name}
            className="font-display italic text-[clamp(1.7rem,3.6vw,3.4rem)] leading-[1.15] tracking-[-0.025em] animate-reveal"
          >
            “{q.quote}”
          </blockquote>
          <figcaption className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div>
              <div className="text-sm font-medium">{q.name}</div>
              <div className="text-xs text-muted mt-1">{q.role}</div>
            </div>
            <div className="flex gap-2">
              {quotes.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show quote from ${item.name}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === i ? "w-10 bg-foreground" : "w-3 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
