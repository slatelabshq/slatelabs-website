import { createFileRoute } from "@tanstack/react-router";
import { WorkNellyBaradiPage } from "@/components/slate/pages/WorkNellyBaradiPage";

export const Route = createFileRoute("/work/nelly-baradi")({
  head: () => ({
    meta: [
      { title: "Nelly Baradi — Slate Labs" },
      { name: "description", content: "Artist campaign and creative direction for Nelly Baradi." },
      { property: "og:url", content: "/work/nelly-baradi" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-nelly-baradi.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/work/nelly-baradi" }],
  }),
  component: WorkNellyBaradiPage,
});
