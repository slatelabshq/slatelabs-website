import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/slate/pages/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Slate Labs" },
      {
        name: "description",
        content:
          "Brand strategy, growth marketing, digital platforms, and intelligent systems — four practices, one Lagos studio.",
      },
      { property: "og:title", content: "Services — Slate Labs" },
      { property: "og:url", content: "/services" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/services" }],
  }),
  component: ServicesPage,
});
