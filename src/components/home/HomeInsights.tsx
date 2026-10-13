import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { formatPostDate, getLatestPosts } from "@/lib/insights-data";

export function HomeInsights() {
  const latest = getLatestPosts(3);
  if (latest.length === 0) return null;
  const [featured, ...rest] = latest;

  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 bg-background">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
              07 — Field notes
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-[-0.03em]">
              Latest from the studio.
            </h2>
          </Reveal>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted hover:text-foreground"
          >
            All insights <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <Link to="/insights/$slug" params={{ slug: featured.slug }} className="group block">
              <div className="aspect-[16/10] overflow-hidden rounded-sm bg-surface mb-6">
                <img
                  src={featured.cover}
                  alt={featured.coverAlt}
                  className="h-full w-full object-cover img-zoom"
                />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">
                {featured.tag} · {formatPostDate(featured.date)} · {featured.readMinutes} min
              </p>
              <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] group-hover:text-primary">
                {featured.title}
              </h3>
              <p className="mt-4 text-muted max-w-xl leading-relaxed">{featured.excerpt}</p>
            </Link>
          </Reveal>
          <div className="lg:col-span-5 flex flex-col divide-y divide-border">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="py-6 first:pt-0">
                <Link to="/insights/$slug" params={{ slug: p.slug }} className="group block">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-2">
                    {p.tag} · {formatPostDate(p.date)}
                  </p>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
