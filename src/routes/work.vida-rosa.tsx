import { createFileRoute } from "@tanstack/react-router";
import { WorkVidaRosaPage } from "@/components/slate/pages/WorkVidaRosaPage";

export const Route = createFileRoute("/work/vida-rosa")({
  head: () => ({
    meta: [
      { title: "Vida Rosa — Slate Labs" },
      { name: "description", content: "Luxury automotive marketing for Vida Rosa." },
      { property: "og:url", content: "/work/vida-rosa" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-vida-rosa.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/work/vida-rosa" }],
  }),
  component: WorkVidaRosaPage,
});
