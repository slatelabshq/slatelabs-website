import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { formatPostDate, type Post } from "@/lib/insights-data";

export function InsightCard({ post, i = 0 }: { post: Post; i?: number }) {
  return (
    <Reveal delay={i * 90}>
      <Link
        to="/insights/$slug"
        params={{ slug: post.slug }}
        className="group block h-full border-t border-border pt-8 hover:border-foreground/20 transition-colors"
      >
        <div className="aspect-[16/10] w-full rounded-sm overflow-hidden mb-6 relative bg-gradient-to-br from-primary/25 via-background to-foreground/10">
          <img
            src={post.cover}
            alt={post.coverAlt}
            className="w-full h-full object-cover img-zoom"
            loading="lazy"
          />
          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur-sm font-mono text-[10px] uppercase tracking-[0.16em] text-ink-foreground">
            {post.tag}
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-3">
          <span>{formatPostDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min</span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted leading-relaxed text-sm mb-6">{post.excerpt}</p>
        <span className="text-sm font-medium text-foreground group-hover:text-primary">Read insight →</span>
      </Link>
    </Reveal>
  );
}
