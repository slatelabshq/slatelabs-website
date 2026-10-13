import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/work-data";

const strip = projects.filter((p) =>
  ["nelly-baradi", "44db", "vida-rosa", "fly-trinity", "brillanta", "ile-eko"].includes(p.slug),
);

export function HomeFilmstrip() {
  const items = [...strip, ...strip];
  return (
    <div className="bg-ink pb-10 pt-2">
      <div className="px-6 mb-5 max-w-[90rem] mx-auto flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/45">
          Selected clients
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/35">
          Lagos &amp; beyond
        </span>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group relative w-[220px] md:w-[280px] shrink-0 overflow-hidden rounded-sm"
            >
              <img
                src={p.image}
                alt={p.client}
                className="h-36 md:h-44 w-full object-cover img-zoom opacity-80 group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 p-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/90 bg-gradient-to-t from-black/70 to-transparent">
                {p.client}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
