import { createFileRoute, notFound } from "@tanstack/react-router";
import { Work44dbPage } from "@/components/slate/pages/Work44dbPage";
import { WorkBrillantaPage } from "@/components/slate/pages/WorkBrillantaPage";
import { WorkFlyTrinityPage } from "@/components/slate/pages/WorkFlyTrinityPage";
import { WorkMorganOxfordPage } from "@/components/slate/pages/WorkMorganOxfordPage";
import { WorkNellyBaradiPage } from "@/components/slate/pages/WorkNellyBaradiPage";
import { WorkVidaRosaPage } from "@/components/slate/pages/WorkVidaRosaPage";

const pages: Record<string, () => React.ReactElement> = {
  "nelly-baradi": WorkNellyBaradiPage,
  "44db": Work44dbPage,
  "vida-rosa": WorkVidaRosaPage,
  "fly-trinity": WorkFlyTrinityPage,
  "morgan-oxford": WorkMorganOxfordPage,
  brillanta: WorkBrillantaPage,
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const Page = pages[params.slug];
    if (!Page) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => ({
    meta: [{ property: "og:url", content: `/work/${params.slug}` }],
    links: [{ rel: "canonical", href: `https://www.slatelabshq.com.ng/work/${params.slug}` }],
  }),
  component: WorkCaseStudy,
});

function WorkCaseStudy() {
  const { slug } = Route.useLoaderData();
  const Page = pages[slug];
  return Page ? <Page /> : null;
}
