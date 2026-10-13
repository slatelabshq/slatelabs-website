import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { featuredProjects } from "@/lib/work-data";

function shortTitle(title: string) {
  return title.includes("—") ? title.split("—")[1].trim() : title;
}

export function HomeWork() {
  return (
    <section id="work" className="relative -mt-px bg-background">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
              02 — Selected work
            </p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.92] tracking-[-0.03em] max-w-3xl">
              Work that has to <span className="italic text-primary">speak</span> for itself.
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            Full archive
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border group-hover:bg-foreground group-hover:text-background">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
      </div>

      <div className="flex flex-col">
        {featuredProjects.map((p, i) => (
          <Link
            key={p.slug}
            to="/work/$slug"
            params={{ slug: p.slug }}
            className="group relative isolate block min-h-[72vh] overflow-hidden text-ink-foreground"
          >
            <img
              src={p.image}
              alt={p.client}
              className="absolute inset-0 h-full w-full object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
            <div className="relative z-10 flex min-h-[72vh] flex-col justify-end px-6 py-12 lg:px-10 lg:py-16">
              <Reveal delay={80} className="reveal-deep max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
                    {String(i + 1).padStart(2, "0")} / {p.client}
                  </span>
                  {p.badge ? (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] backdrop-blur-sm">
                      {p.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.03em]">
                  {shortTitle(p.title)}
                </h3>
                <p className="mt-4 max-w-xl text-white/75 leading-relaxed">{p.oneLiner}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-2 text-sm font-medium">
                    View case
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Reveal>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
