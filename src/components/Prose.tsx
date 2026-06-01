import type { Block } from "@/lib/insights-data";

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} className="text-2xl md:text-3xl font-medium tracking-tight mt-12 mb-2 text-foreground">
                {b.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {b.text}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-primary pl-6 my-10 text-xl md:text-2xl font-medium leading-snug tracking-tight text-foreground"
              >
                "{b.text}"
                {b.cite && <cite className="block mt-3 text-sm font-normal text-muted not-italic">— {b.cite}</cite>}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-5 list-disc marker:text-primary text-lg text-muted leading-relaxed">
                {b.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
