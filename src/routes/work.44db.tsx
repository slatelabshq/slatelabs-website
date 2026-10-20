import { createFileRoute } from "@tanstack/react-router";
import { Work44dbPage } from "@/components/slate/pages/Work44dbPage";

export const Route = createFileRoute("/work/44db")({
  head: () => ({
    meta: [
      { title: "44DB — Slate Labs" },
      { name: "description", content: "Music collective branding and campaign work for 44DB." },
      { property: "og:url", content: "/work/44db" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-44db.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/work/44db" }],
  }),
  component: Work44dbPage,
});
