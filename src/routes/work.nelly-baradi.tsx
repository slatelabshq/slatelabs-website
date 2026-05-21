import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, MessageCircle, Megaphone, Video, Calendar, Radio, Newspaper, Music, ExternalLink, Headphones } from "lucide-react";
import { FaInstagram, FaXTwitter, FaTiktok, FaSpotify, FaApple } from "react-icons/fa6";
import { Section, Eyebrow } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/lib/work-data";

const project = projects.find((p) => p.slug === "nelly-baradi")!;

export const Route = createFileRoute("/work/nelly-baradi")({
  head: () => ({
    meta: [
      { title: "Nelly Baradi — Artist Campaign & Creative Direction — Slate Labs" },
      { name: "description", content: project.oneLiner },
      { property: "og:title", content: "Nelly Baradi — Artist Campaign — Slate Labs" },
      { property: "og:description", content: project.oneLiner },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/nelly-baradi" },
      { property: "og:image", content: project.image },
    ],
    links: [{ rel: "canonical", href: "/work/nelly-baradi" }],
  }),
  component: NellyBaradiCaseStudy,
});

const scope = [
  { icon: Sparkles, title: "Creative Direction", desc: "Artist identity and aesthetic direction shaping how Nelly looks and sounds across every touchpoint." },
  { icon: MessageCircle, title: "Social Media Management", desc: "Full brand voice guide executed across Instagram, X, and TikTok in active collaboration with the artist." },
  { icon: Megaphone, title: "Music Marketing", desc: "End-to-end release campaigns — strategy, narrative, paid media, and editorial coordination." },
  { icon: Video, title: "Content Production", desc: "Lifestyle and performance content captured in her element — intimate, authentic, worth watching twice." },
];

const resultGroups = [
  {
    platform: "YouTube",
    items: [{ value: "250K+", label: "Total views (visualizer)" }],
  },
  {
    platform: "Instagram",
    items: [
      { value: "300K+", label: "Views — promo period" },
      { value: "94.3K", label: "Organic views (28d) — +436%" },
      { value: "7.1K", label: "Content interactions — +590%" },
      { value: "1,300+", label: "Link clicks to streaming" },
      { value: "28K", label: "Top reel (BTS)" },
    ],
  },
  {
    platform: "Meta Paid",
    items: [
      { value: "230K", label: "Post reach" },
      { value: "210K", label: "Post engagements" },
      { value: "334K", label: "Total post views" },
    ],
  },
  {
    platform: "X (Twitter)",
    items: [
      { value: "+4,433%", label: "Follower growth (3 → 136)" },
      { value: "50K+", label: "Views in 14 days" },
    ],
  },
  {
    platform: "Spotify",
    items: [{ value: "+41%", label: "Monthly listeners (2,394 → 3,382)" }],
  },
];

const deliverables = [
  { icon: Sparkles, title: "Campaign Strategy", desc: "Full strategy, narrative, and artist brief for the 'High Me' rollout." },
  { icon: MessageCircle, title: "Brand Voice Guide", desc: "Conversational, understated, lowercase, Nigerian cadence — built into a repeatable system." },
  { icon: Megaphone, title: "4-Phase X Rollout", desc: "Every line of copy written in-house, built from 3 followers up." },
  { icon: Newspaper, title: "Press Release", desc: "Written and distributed on release day across music press and editorial contacts." },
  { icon: Radio, title: "Paid Media", desc: "Meta (Instagram/Facebook) and YouTube campaigns engineered for reach and engagement." },
  { icon: Music, title: "DSP & Playlist Pitching", desc: "Editorial coordination with Apple Music and Spotify." },
  { icon: Video, title: "Content Production", desc: "Multiple rounds of lifestyle and performance content across her socials." },
  { icon: Calendar, title: "Live Activations", desc: "Mainland Block Party, Tempo Lagos, Play with MIA — the music as the handshake." },
];

function NellyBaradiCaseStudy() {
  const d = project.detail!;

  return (
    <>
      {/* Hero */}
      <header className="px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <Link to="/work" className="text-sm text-muted hover:text-primary">← All work</Link>

          <div className="mt-8 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            {project.category}
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] text-balance">
            Nelly Baradi.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto italic">
            “The voice behind the voice. Now, centre stage.”
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem]">
            <img
              src={project.image}
              alt="Nelly Baradi — Slate Labs artist campaign"
              width={1280}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* The brief */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow>The brief</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-balance">
              From the credits to <span className="text-primary">centre stage.</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Nelly Baradi spent years as the best-kept secret in Nigerian music — the voice behind records by Seyi Vibez, Mohbad, Peruzzi, Timaya, Oxlade, Fola, and Bella Shmurda. Never announced. Never needed to be.
            </p>
            <p>
              Born in Sapele and based in Lagos, Nelly is a singer-songwriter whose sound lives where Afropop meets R&amp;B — warm, melodic, emotionally precise. Signed to Troniq Music Inc., she has spent two years quietly building a solo catalogue. Her 2025 debut <em>Wake Up</em> announced her arrival. <em>High Me</em>, released March 2026, confirmed it.
            </p>
            <p>{d.challenge}</p>
          </div>
        </div>

        {/* Pre-campaign baseline */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "35K+", l: "Instagram followers" },
            { v: "60K+", l: "TikTok followers" },
            { v: "92K+", l: "Total social reach" },
            { v: "2.3K+", l: "Spotify monthly listeners" },
          ].map((m) => (
            <div key={m.l} className="rounded-3xl bg-surface p-6 border border-border">
              <div className="text-3xl md:text-4xl font-medium tracking-[-0.03em]">{m.v}</div>
              <div className="text-xs text-muted mt-2 uppercase tracking-[0.15em]">{m.l}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted mt-4">Pre-campaign reach across platforms.</p>
      </Section>

      {/* Scope of work */}
      <Section>
        <Eyebrow>Scope of work</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          Ongoing creative <span className="text-primary">partners.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scope.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface rounded-3xl p-8 border border-border">
              <Icon className="w-7 h-7 text-primary mb-6" strokeWidth={1.75} />
              <h3 className="text-xl font-medium tracking-tight mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Results — black band */}
      <Section>
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-20">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>The results · High Me campaign</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-6 text-balance">
            The numbers, <span className="text-primary">11 days in.</span>
          </h2>
          <p className="text-background/60 mb-16 max-w-2xl">
            Data window: March 27 – April 7, 2026. Campaign remains in active phase.
          </p>

          <div className="space-y-10">
            {resultGroups.map((g) => (
              <div key={g.platform}>
                <div className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">{g.platform}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {g.items.map((m) => (
                    <div key={m.label} className="rounded-3xl border border-primary/20 bg-[#111111] p-6">
                      <div className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-primary">{m.value}</div>
                      <div className="text-sm text-background/80 mt-3">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg md:text-xl text-background/70 leading-relaxed max-w-3xl">{d.results}</p>
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <Eyebrow>The work</Eyebrow>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-12 text-balance">
          What we <span className="text-primary">delivered.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliverables.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface rounded-3xl p-8 border border-border">
              <Icon className="w-7 h-7 text-primary mb-6" strokeWidth={1.75} />
              <h3 className="text-xl font-medium tracking-tight mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-balance">
            Working with an artist who deserves <span className="text-primary">this kind of attention?</span>
          </h2>
          <CtaButton to="/contact" variant="primary">Let's talk</CtaButton>
        </div>
      </Section>
    </>
  );
}
