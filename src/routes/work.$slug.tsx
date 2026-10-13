import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PageCta } from "@/components/layout/PageCta";
import { projects, type CaseStudyDetail } from "@/lib/work-data";


export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project || !project.detail) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const title = loaderData?.project.title ?? "Case Study";
    const desc = loaderData?.project.oneLiner ?? "Slate Labs case study.";
    const image = loaderData?.project.image;
    return {
      meta: [
        { title: `${title} — Slate Labs` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Slate Labs` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        ...(image ? [{ property: "og:image", content: image }] : []),
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const d = project.detail as CaseStudyDetail;
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <header className="relative isolate min-h-[72vh] flex flex-col justify-end overflow-hidden bg-ink text-ink-foreground -mt-px">
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="grain-overlay absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-[90rem] mx-auto w-full px-6 lg:px-10 pt-[7.5rem] pb-12 md:pb-16">
          <Link
            to="/work"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/60 hover:text-primary"
          >
            ← All work
          </Link>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">{project.category}</p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.04em] max-w-4xl text-balance">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-ink-foreground/70 leading-relaxed">{project.oneLiner}</p>
        </div>
      </header>

      {/* Quick facts + metrics */}
      <Section className="!pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal className="border border-border rounded-sm p-8 md:p-10">
            <Eyebrow>Quick facts</Eyebrow>
            <dl className="space-y-4 text-base">
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">Client</dt>
                <dd className="font-medium">{project.client}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">Industry</dt>
                <dd className="font-medium">{d.industry}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted">Date</dt>
                <dd className="font-medium">{d.date}</dd>
              </div>
              <div className="flex flex-col gap-2 pb-3">
                <dt className="text-muted">Services</dt>
                <dd className="font-medium">{d.services.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={90} className="border border-border rounded-sm p-8 md:p-10">
            <Eyebrow>Key results</Eyebrow>
            <div className="space-y-6">
              {d.metrics.map((m) => (
                <div key={m.label} className="border-t border-border pt-4 first:border-0 first:pt-0">
                  <div className="text-3xl md:text-4xl font-medium tracking-tight">{m.value}</div>
                  <div className="text-sm text-muted mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Challenge */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>The challenge</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">The problem.</h2>
          </div>
          <p className="md:col-span-8 text-lg text-muted leading-relaxed">{d.challenge}</p>
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>Our solution</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">What we built.</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            {d.solution.map((s) => (
              <div key={s.heading} className="rounded-3xl bg-surface p-8">
                <h3 className="text-xl font-medium tracking-tight mb-3">{s.heading}</h3>
                <p className="text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section>
        <div className="bg-ink text-ink-foreground rounded-sm p-10 md:p-20 relative overflow-hidden">
          <div className="grain-overlay absolute inset-0 opacity-25" />
          <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="inline-flex items-center gap-2 text-sm text-primary mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                The impact
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">The results.</h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight">{d.results}</p>
              <ul className="space-y-3">
                {d.numbers.map((n) => (
                  <li key={n} className="flex gap-3 text-ink-foreground/80">
                    <span className="text-primary">→</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <Eyebrow>Deliverables</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">What we created.</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {d.deliverables.map((dv) => (
            <li key={dv} className="flex gap-3 rounded-2xl bg-surface p-5">
              <span className="text-primary">—</span>
              <span>{dv}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* More work */}
      <Section>
        <Eyebrow>Explore more projects</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((p) => (
            <Link
              key={p.slug}
              to={p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug"}
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <img
                  src={p.image}
                  alt={p.client}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{p.title}</h3>
              <p className="text-muted mt-2">{p.oneLiner}</p>
            </Link>
          ))}
        </div>
      </Section>


      <PageCta />
    </>
  );
}
