import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Car } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
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
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/work" className="text-sm text-muted hover:text-primary">← All work</Link>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {project.category}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] mb-12 text-balance">
            {project.title}
          </h1>
        </div>
      </header>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem]">
            <img src={project.image} alt={project.client} width={1280} height={960} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Quick facts + metrics */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface rounded-3xl p-10">
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
          </div>
          <div className="bg-surface rounded-3xl p-10">
            <Eyebrow>Key results</Eyebrow>
            <div className="space-y-6">
              {d.metrics.map((m) => (
                <div key={m.label} className="border-t border-border pt-4 first:border-0 first:pt-0">
                  <div className="text-3xl md:text-4xl font-medium tracking-tight">{m.value}</div>
                  <div className="text-sm text-muted mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
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
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20">
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
                  <li key={n} className="flex gap-3 text-background/80">
                    <span className="text-primary">→</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
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
      {project.slug !== "vida-rosa" && (
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
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
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
      )}


      <Section>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance">
            Ready for your <span className="text-primary">clean slate?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's talk</CtaButton>
        </div>
      </Section>
    </>
  );
}
