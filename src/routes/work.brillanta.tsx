import { createFileRoute } from "@tanstack/react-router";
import { WorkBrillantaPage } from "@/components/slate/pages/WorkBrillantaPage";

export const Route = createFileRoute("/work/brillanta")({
  head: () => ({
    meta: [
      { title: "Brillanta Afrique — Slate Labs" },
      { name: "description", content: "Brand and digital identity for Brillanta Afrique." },
      { property: "og:url", content: "/work/brillanta" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/work/brillanta" }],
  }),
  component: WorkBrillantaPage,
});
