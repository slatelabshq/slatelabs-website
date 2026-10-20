import { createFileRoute } from "@tanstack/react-router";
import { WorkFlyTrinityPage } from "@/components/slate/pages/WorkFlyTrinityPage";

export const Route = createFileRoute("/work/fly-trinity")({
  head: () => ({
    meta: [
      { title: "Fly Trinity Airways — Slate Labs" },
      { name: "description", content: "Brand identity for Fly Trinity Airways." },
      { property: "og:url", content: "/work/fly-trinity" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-fly-trinity.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/work/fly-trinity" }],
  }),
  component: WorkFlyTrinityPage,
});
