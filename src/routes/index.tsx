import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeWork } from "@/components/home/HomeWork";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeProof } from "@/components/home/HomeProof";
import { HomePhilosophy } from "@/components/home/HomePhilosophy";
import { HomeQuotes } from "@/components/home/HomeQuotes";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomeCta } from "@/components/home/HomeCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Slate Labs — Lagos Creative & Tech Agency" },
      {
        name: "description",
        content:
          "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow.",
      },
      { property: "og:title", content: "Slate Labs — Lagos Creative & Tech Agency" },
      {
        property: "og:description",
        content:
          "Slate Labs is a Lagos-based Creative & Tech Agency. We build brands, digital platforms, and AI systems for businesses ready to grow.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeHero />
      <HomeWork />
      <HomeServices />
      <HomeProof />
      <HomePhilosophy />
      <HomeQuotes />
      <HomeInsights />
      <HomeCta />
    </div>
  );
}
