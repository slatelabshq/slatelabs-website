import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";

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
  const d = project.detail!;
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/work"
            className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary"
          >
            ← All Work
          </Link>
          <div className="mt-8 text-primary font-serif italic font-bold text-xl">
            {project.category}
          </div>
          <h1 className="mt-4 text-5xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-12">
            {project.title}
          </h1>
        </div>
      </header>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden border border-border">
            <img
              src={project.image}
              alt={project.client}
              width={1280}
              height={960}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quick facts + metrics */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Quick Facts</Eyebrow>
            <dl className="space-y-4 text-lg">
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted uppercase text-xs tracking-widest">Client</dt>
                <dd className="font-medium">{project.client}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted uppercase text-xs tracking-widest">Industry</dt>
                <dd className="font-medium">{d.industry}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted uppercase text-xs tracking-widest">Date</dt>
                <dd className="font-medium">{d.date}</dd>
              </div>
              <div className="flex flex-col gap-2 border-b border-border pb-3">
                <dt className="text-muted uppercase text-xs tracking-widest">Services</dt>
                <dd className="font-medium">{d.services.join(" · ")}</dd>
              </div>
            </dl>
          </div>
          <div>
            <Eyebrow>Key Results</Eyebrow>
            <div className="space-y-6">
              {d.metrics.map((m) => (
                <div key={m.label} className="border-t border-border pt-4">
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                    {m.value}
                  </div>
                  <div className="text-sm text-muted mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Challenge */}
      <Section className="bg-card border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>The Challenge</Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-tighter">The Problem.</h2>
          </div>
          <p className="md:col-span-8 text-lg text-muted leading-relaxed">{d.challenge}</p>
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>Our Solution</Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-tighter">What We Built.</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {d.solution.map((s) => (
              <div key={s.heading}>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{s.heading}</h3>
                <p className="text-muted leading-relaxed text-lg">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-foreground text-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary">
              The Impact
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter">The Results.</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-2xl font-serif italic leading-snug">{d.results}</p>
            <ul className="space-y-3">
              {d.numbers.map((n) => (
                <li key={n} className="flex gap-3 text-background/80">
                  <span className="text-primary">→</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <Eyebrow>Deliverables</Eyebrow>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-12">What We Created.</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {d.deliverables.map((dv) => (
            <li key={dv} className="flex gap-3 border-t border-border pt-4 text-lg">
              <span className="text-primary">—</span>
              <span>{dv}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* More work */}
      <Section className="bg-card border-y border-border">
        <Eyebrow>Explore More Projects</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {others.map((p) => (
            <Link
              key={p.slug}
              to={p.slug === "ile-eko" ? "/ile-eko" : "/work/$slug"}
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden border border-border mb-6">
                <img
                  src={p.image}
                  alt={p.client}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tighter">{p.title}</h3>
              <p className="text-muted mt-2">{p.oneLiner}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
            Ready for your <span className="font-serif italic text-primary">clean slate?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's Talk</CtaButton>
        </div>
      </Section>
    </>
  );
}
