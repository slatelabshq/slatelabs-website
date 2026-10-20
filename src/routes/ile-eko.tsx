import { createFileRoute } from "@tanstack/react-router";
import { IleEkoPage } from "@/components/slate/pages/IleEkoPage";

export const Route = createFileRoute("/ile-eko")({
  head: () => ({
    meta: [
      { title: "Ile Eko — Slate Labs" },
      {
        name: "description",
        content:
          "Ile Eko is Slate Labs' learning platform — structured programmes for teams building in Lagos and beyond.",
      },
      { property: "og:title", content: "Ile Eko — Slate Labs" },
      { property: "og:url", content: "/ile-eko" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/ile-eko" }],
  }),
  component: IleEkoPage,
});
