import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/slate/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Slate Labs — Lagos Creative & Tech Agency" },
      {
        name: "description",
        content:
          "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow.",
      },
      { name: "theme-color", content: "#FFFFFF" },
      { property: "og:title", content: "Slate Labs — Lagos Creative & Tech Agency" },
      {
        property: "og:description",
        content:
          "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow.",
      },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.slatelabshq.com.ng/" },
      { rel: "icon", type: "image/png", href: "/assets/img/logo/mark-teal.png" },
      { rel: "apple-touch-icon", href: "/assets/img/logo/mark-teal.png" },
    ],
  }),
  component: HomePage,
});
