import { createFileRoute, notFound } from "@tanstack/react-router";
import { InsightCrmPage } from "@/components/slate/pages/InsightCrmPage";
import { InsightLagosBrandsPage } from "@/components/slate/pages/InsightLagosBrandsPage";

const pages: Record<
  string,
  { component: () => React.ReactElement; title: string; description: string }
> = {
  "why-most-lagos-brands-look-the-same": {
    component: InsightLagosBrandsPage,
    title: "Why most Lagos brands look the same — Slate Labs Insights",
    description:
      "Sameness isn't a design problem — it's a positioning problem. A short essay on why differentiation doesn't come from a logo.",
  },
  "the-crm-your-team-will-actually-use": {
    component: InsightCrmPage,
    title: "The CRM your team will actually use — Slate Labs Insights",
    description:
      "Most off-the-shelf CRMs force you to bend your workflow around someone else's idea of sales. Here's what we learned building one that doesn't.",
  },
};

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const page = pages[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ params, loaderData }) => {
    const page = loaderData?.page ?? pages[params.slug];
    if (!page) return { meta: [{ title: "Insight — Slate Labs" }] };
    return {
      meta: [
        { title: page.title },
        { name: "description", content: page.description },
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
        { property: "og:url", content: `/insights/${params.slug}` },
        {
          property: "og:image",
          content: "https://www.slatelabshq.com.ng/assets/stock/brand-designer-swatches.jpg",
        },
      ],
      links: [{ rel: "canonical", href: `https://www.slatelabshq.com.ng/insights/${params.slug}` }],
    };
  },
  component: InsightArticle,
});

function InsightArticle() {
  const { page } = Route.useLoaderData();
  const Page = page.component;
  return <Page />;
}
