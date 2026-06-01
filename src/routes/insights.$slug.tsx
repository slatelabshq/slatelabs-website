import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Prose } from "@/components/Prose";
import { InsightCard } from "@/components/InsightCard";
import { getPostBySlug, getRelatedPosts, formatPostDate } from "@/lib/insights-data";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedPosts(params.slug) };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Insight — Slate Labs" }],
        links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      };
    }
    return {
      meta: [
        { title: `${post.title} — Slate Labs Insights` },
        { name: "description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `/insights/${params.slug}` },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author.name },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.role,
            },
            publisher: {
              "@type": "Organization",
              name: "Slate Labs",
              logo: {
                "@type": "ImageObject",
                url: "https://slatelabshq.com/assets/slate-logo-wordmark.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://slatelabshq.com/insights/${params.slug}`,
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <Eyebrow>404</Eyebrow>
        <h1 className="text-3xl font-medium tracking-tight mb-4">Insight not found</h1>
        <p className="text-muted mb-8">That insight doesn't exist or has been moved.</p>
        <CtaButton to="/insights" variant="primary">Back to insights</CtaButton>
      </div>
    </div>
  ),
  component: InsightDetail,
});

function InsightDetail() {
  const { post, related } = Route.useLoaderData();

  return (
    <>
      <header className="px-6 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/insights" className="text-sm text-muted hover:text-primary inline-flex items-center gap-2 mb-10">
            <span aria-hidden>←</span> All insights
          </Link>
          <div className="inline-flex items-center gap-3 mb-6 text-xs text-muted">
            <span className="px-3 py-1.5 rounded-full bg-surface text-foreground font-medium tracking-wide">
              {post.tag}
            </span>
            <span>{formatPostDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readMinutes} min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
            {post.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-10">{post.excerpt}</p>
          <div className="flex items-center gap-3 pt-6 border-t border-border">
            <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-sm font-medium tracking-tight">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <div className="text-sm font-medium">{post.author.name}</div>
              <div className="text-xs text-muted">{post.author.role}</div>
            </div>
          </div>
        </div>
      </header>

      {post.cover && (
        <div className="px-6 mb-16">
          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden aspect-[16/9] bg-surface">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      <Section>
        <div className="max-w-3xl mx-auto">
          <Prose blocks={post.body} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto bg-foreground text-background rounded-[2rem] p-10 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Working on something like this?
          </h2>
          <p className="text-background/70 mb-8">Let's talk about how Slate Labs can help.</p>
          <CtaButton to="/contact" variant="primary">Start a conversation</CtaButton>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <Eyebrow>More insights</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Keep reading.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((p, i) => (
              <InsightCard key={p.slug} post={p} i={i} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
