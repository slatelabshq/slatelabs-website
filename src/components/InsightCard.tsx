import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { formatPostDate, type Post } from "@/lib/insights-data";

export function InsightCard({ post, i = 0 }: { post: Post; i?: number }) {
  return (
    <Reveal delay={i * 90}>
      <Link
        to="/insights/$slug"
        params={{ slug: post.slug }}
        className="group block rounded-3xl bg-surface p-8 hover-lift h-full"
      >
        <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 relative bg-gradient-to-br from-primary/25 via-background to-foreground/10">
          {post.cover && (
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
          )}
          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-[11px] font-medium tracking-wide text-foreground">
            {post.tag}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted mb-3">
          <span>{formatPostDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
        <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted leading-relaxed text-sm mb-6">{post.excerpt}</p>
        <span className="text-sm font-medium text-foreground group-hover:text-primary">Read insight →</span>
      </Link>
    </Reveal>
  );
}
