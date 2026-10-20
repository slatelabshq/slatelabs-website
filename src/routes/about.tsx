import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/slate/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Slate Labs" },
      {
        name: "description",
        content:
          "Meet the Slate Labs team in Lagos — a creative and technical studio building brands, platforms, and intelligent systems from a clean slate.",
      },
      { property: "og:title", content: "About — Slate Labs" },
      { property: "og:url", content: "/about" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/about" }],
  }),
  component: AboutPage,
});
