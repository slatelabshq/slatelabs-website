import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

// Placeholder testimonial copy — swap with real quotes once SK / clients sign off.
type Quote = { quote: string; name: string; role: string; company: string };

const quotes: Quote[] = [
  {
    quote:
      "They didn't just manage our socials — they rebuilt how the world sees us. The month BREAKTIME dropped, we stopped feeling like a collective and started feeling like a movement.",
    name: "44DB",
    role: "Production Collective",
    company: "Lagos",
  },
  {
    quote:
      "The CRM Slate Labs built fits how we actually work. New advisors are productive in under two weeks and I finally have visibility across every programme.",
    name: "Morgan Oxford Education",
    role: "Leadership",
    company: "Lagos",
  },
  {
    quote:
      "Working with Slate Labs feels less like hiring an agency and more like adding a brand and tech team to our own. Strategy, creative, and engineering — one conversation.",
    name: "Vida Rosa",
    role: "Luxury Automotive",
    company: "Lagos",
  },
];

export function Testimonials({ heading = "What clients say." }: { heading?: string }) {
  return (
    <Section>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Testimonials</p>
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10 max-w-2xl">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 90} className="bg-background p-8 md:p-10 flex flex-col border border-transparent hover:border-border transition-colors">
            <svg className="w-8 h-8 text-primary/60 mb-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5A1.67 1.67 0 0 1 17.17 9.5V6Z" />
            </svg>
            <p className="text-foreground leading-relaxed mb-8 flex-1">{q.quote}</p>
            <div>
              <div className="text-sm font-medium tracking-tight">{q.name}</div>
              <div className="text-xs text-muted mt-1">
                {q.role} · {q.company}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
