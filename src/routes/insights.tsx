import { createFileRoute } from "@tanstack/react-router";
import { InsightsIndexPage } from "@/components/slate/pages/InsightsIndexPage";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Slate Labs" },
      {
        name: "description",
        content: "Field notes from the Slate Labs studio — brand, growth, platforms, and systems.",
      },
      { property: "og:title", content: "Insights — Slate Labs" },
      { property: "og:url", content: "/insights" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/stock/brand-designer-swatches.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/insights" }],
  }),
  component: InsightsIndexPage,
});
