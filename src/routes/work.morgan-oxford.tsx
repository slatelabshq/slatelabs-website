import { createFileRoute } from "@tanstack/react-router";
import { WorkMorganOxfordPage } from "@/components/slate/pages/WorkMorganOxfordPage";

export const Route = createFileRoute("/work/morgan-oxford")({
  head: () => ({
    meta: [
      { title: "Morgan Oxford Education — Slate Labs" },
      {
        name: "description",
        content: "Digital platform and CRM for Morgan Oxford Education.",
      },
      { property: "og:url", content: "/work/morgan-oxford" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-morgan-oxford.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/work/morgan-oxford" }],
  }),
  component: WorkMorganOxfordPage,
});
