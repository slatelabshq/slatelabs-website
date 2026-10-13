import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { InsightCard } from "@/components/InsightCard";
import { PageHero } from "@/components/layout/PageHero";
import { posts } from "@/lib/insights-data";
import workMorgan from "@/assets/work-morgan-oxford.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Slate Labs" },
      {
        name: "description",
        content:
          "Essays and field notes from Slate Labs on brand, growth, digital platforms, and intelligent systems — written from the ground in Lagos.",
      },
      { property: "og:title", content: "Insights — Slate Labs" },
      {
        property: "og:description",
        content:
          "Essays and field notes from Slate Labs on brand, growth, digital platforms, and intelligent systems.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

function Insights() {
  const { pathname } = useLocation();
  const isIndex = pathname === "/insights" || pathname === "/insights/";
  if (!isIndex) return <Outlet />;

  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        section="Insights"
        image={workMorgan}
        imageAlt="Slate Labs studio work"
        title={
          <>
            Field notes from a <span className="italic text-primary">clean slate.</span>
          </>
        }
        description="Essays on brand, growth, platforms, and systems — written by the team building them."
      />

      <Section className="!pt-12">
        {sorted.length === 0 ? (
          <p className="text-center text-muted">No insights yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((p, i) => (
              <InsightCard key={p.slug} post={p} i={i} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
