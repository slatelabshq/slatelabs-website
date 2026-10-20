import { createFileRoute } from "@tanstack/react-router";
import { WorkIndexPage } from "@/components/slate/pages/WorkIndexPage";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Slate Labs" },
      {
        name: "description",
        content:
          "Selected case studies from Slate Labs — brand, campaigns, platforms, and systems for clients in Lagos and beyond.",
      },
      { property: "og:title", content: "Work — Slate Labs" },
      { property: "og:url", content: "/work" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/work" }],
  }),
  component: WorkIndexPage,
});
