import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/slate/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Slate Labs" },
      {
        name: "description",
        content:
          "Get in touch with Slate Labs, Lagos. We build brands, platforms, and intelligent systems. Email: hello@slatelabshq.com · WhatsApp: +234 702 603 6554. Based in Lekki Phase 1, Lagos, Nigeria.",
      },
      { property: "og:title", content: "Contact — Slate Labs" },
      {
        property: "og:description",
        content:
          "Get in touch with Slate Labs, Lagos. Email hello@slatelabshq.com or WhatsApp +234 702 603 6554. Based in Lekki Phase 1, Lagos.",
      },
      { property: "og:url", content: "/contact" },
      {
        property: "og:image",
        content: "https://www.slatelabshq.com.ng/assets/img/work-brillanta.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.slatelabshq.com.ng/contact" }],
  }),
  component: ContactPage,
});
