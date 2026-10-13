import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { PageCta } from "@/components/layout/PageCta";
import { Prose } from "@/components/Prose";
import { InsightCard } from "@/components/InsightCard";
import {
  getPostBySlug,
  getRelatedPosts,
  formatPostDate,
  type Post,
} from "@/lib/insights-data";

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
        { property: "og:image", content: post.cover },
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
            image: post.cover,
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
  const { post, related } = Route.useLoaderData() as {
    post: Post;
    related: Post[];
  };

  return (
    <>
      <header className="relative isolate overflow-hidden bg-ink text-ink-foreground -mt-px pt-[7.5rem] pb-14 md:pb-20">
        <div className="grain-overlay absolute inset-0 opacity-30" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            to="/insights"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/55 hover:text-primary inline-flex items-center gap-2 mb-10"
          >
            <span aria-hidden>←</span> All insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-foreground/55">
            <span className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-ink-foreground">
              {post.tag}
            </span>
            <span>{formatPostDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readMinutes} min read</span>
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] mb-8 text-balance">
            {post.title}
          </h1>
          <p className="text-lg text-ink-foreground/65 leading-relaxed mb-10">{post.excerpt}</p>
          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium tracking-tight">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <div className="text-sm font-medium">{post.author.name}</div>
              <div className="text-xs text-ink-foreground/55">{post.author.role}</div>
            </div>
          </div>
        </div>
      </header>

      <Section className="!pt-10 md:!pt-12">
        <div className="max-w-5xl mx-auto rounded-sm overflow-hidden aspect-[16/9] bg-surface mb-10 md:mb-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)]">
          <img
            src={post.cover}
            alt={post.coverAlt}
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <Prose blocks={post.body} />
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

      <PageCta />
    </>
  );
}
