import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import workVidaRosa from "@/assets/work-vidarosa.jpg";

export const Route = createFileRoute("/work/vida-rosa")({
  head: () => ({
    meta: [
      { title: "Vida Rosa — Luxury Automotive Marketing — Slate Labs" },
      {
        name: "description",
        content:
          "Luxury marketing for one of Lagos's most exclusive dealerships. How Slate Labs reaches Nigeria's HNW automotive buyers through precision content and paid media.",
      },
      { property: "og:title", content: "Vida Rosa — Luxury Automotive Marketing — Slate Labs" },
      {
        property: "og:description",
        content:
          "Luxury marketing for one of Lagos's most exclusive dealerships. Precision content and paid media for Nigeria's executive class.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/vida-rosa" },
      { property: "og:image", content: workVidaRosa },
    ],
    links: [{ rel: "canonical", href: "/work/vida-rosa" }],
  }),
  component: VidaRosa,
});

const whatWeBring = [
  {
    title: "Luxury Content Strategy",
    body: "Content designed for an audience that can immediately recognise quality — or the absence of it.",
  },
  {
    title: "Paid Advertising",
    body: "Precision-targeted Meta and digital ad campaigns built to reach Lagos HNW individuals. Paid ads are the primary performance lever here — not an afterthought.",
  },
  {
    title: "Creative Direction",
    body: "Visual standards, shot direction, and asset production aligned to the premium tier that Vida Rosa occupies.",
  },
  {
    title: "Audience & Brand Positioning",
    body: "Repositioning the dealership's digital presence to attract the buyer who buys a Cybertruck because they want to, not because they need to.",
  },
];

function VidaRosa() {
  return (
    <>
      {/* Hero */}
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <Link to="/work" className="text-sm text-muted hover:text-primary">← All work</Link>
          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:ml-8 ml-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Featured Engagement</span>
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance">
            Vida Rosa
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Luxury automotive marketing for one of Lagos's most exclusive dealerships.
          </p>
        </div>
      </header>
 
 

      {/* Hero image */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem]">
            <img src={workVidaRosa} alt="Vida Rosa" width={1280} height={720} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* The Client */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>The Client</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
              They don't sell cars. They sell the <span className="text-primary">lifestyle</span> of people who drive a certain kind of car.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Vida Rosa is not a regular dealership. You will scarcely find budget options here. You will find Mercedes-Benz. Range Rovers. Lexus. Tesla. Cybertruck. The vehicles that signal something about the person before they've said a word.
            </p>
            <p>
              Their clientele are not impulsive buyers. They are Lagos's executive class — the business owners, the decision-makers, the people with money to spend and the discernment to spend it well. Reaching them requires a different approach entirely.
            </p>
          </div>
        </div>
      </Section>

      {/* The Brief */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>The Brief</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
              Marketing to the 1% requires more than content. It requires <span className="text-primary">positioning.</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Most social media strategies are built for volume — broad reach, high frequency, mass appeal. That strategy does not work for a brand selling Brabus Mercedes to Lagos's elite. The wrong content in front of the wrong audience does more damage than silence.
            </p>
            <p>
              The brief for Vida Rosa was to build a marketing engine — organic and paid — that reaches high-net-worth individuals with content and advertising that speaks their language. Premium aesthetics. Aspirational framing. Precision targeting. Zero noise.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Bring */}
      <Section>
        <Eyebrow>What We Bring</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
          Paid. Organic. Creative. <span className="text-primary">All aligned.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatWeBring.map((s) => (
            <div key={s.title} className="rounded-3xl bg-surface p-8 border border-border">
              <h3 className="text-xl font-medium tracking-tight mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Engagement */}
      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs text-primary mb-6 uppercase tracking-[0.15em]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                The Engagement
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                An ongoing partnership built for precision.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-background/70 leading-relaxed">
              <p>
                The Vida Rosa engagement is active and ongoing. We don't come in with generic strategies and templated posts. We come in as the marketing team for a luxury brand — with everything that entails.
              </p>
              <p className="text-xl md:text-2xl text-background font-medium tracking-tight">
                This is luxury marketing. The kind that moves the right audience, not the biggest one.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
            Working with a <span className="text-primary">premium brand?</span>
          </h2>
          <p className="text-lg text-muted mb-10">
            If your product or service belongs to a certain tier — your marketing needs to match. Let's talk.
          </p>
          <CtaButton to="/contact" variant="primary">Start the conversation</CtaButton>
        </div>
      </Section>
    </>
  );
}
