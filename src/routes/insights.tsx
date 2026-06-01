import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { InsightCard } from "@/components/InsightCard";
import { posts } from "@/lib/insights-data";

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
      <header className="px-6 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
            Field notes from a <span className="text-primary">clean slate.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted leading-relaxed">
            Essays on brand, growth, platforms, and systems — written by the team building them.
          </p>
        </div>
      </header>

      <Section>
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
