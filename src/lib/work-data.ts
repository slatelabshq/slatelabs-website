import work44db from "@/assets/work-44db.jpg";
import workVidaRosa from "@/assets/work-vidarosa.jpg";
import workIleEko from "@/assets/work-ileeko.jpg";
import workMorganOxford from "@/assets/work-morgan-oxford.jpg";
import workFlyTrinity from "@/assets/work-fly-trinity.jpg";
import workBrillanta from "@/assets/work-brillanta.jpg";
import workNellyBaradi from "@/assets/work-nelly-baradi.jpg";

export type Project = {
  slug: "44db" | "vida-rosa" | "ile-eko" | "morgan-oxford" | "fly-trinity" | "brillanta" | "nelly-baradi";
  client: string;
  title: string;
  category: "Brand Foundations" | "Digital Platforms" | "Intelligent Systems";
  oneLiner: string;
  image: string;
  color: string;
  tags: string[];
  badge?: string;
  detail?: CaseStudyDetail;
};

export type CaseStudyDetail = {
  industry: string;
  date: string;
  services: string[];
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: { heading: string; body: string }[];
  results: string;
  numbers: string[];
  deliverables: string[];
  testimonial?: { quote: string; author: string };
};

export const projects: Project[] = [
  {
    slug: "44db",
    color: "#3a1a6b",
    client: "44DB",
    title: "44DB — Music Collective Branding",
    category: "Brand Foundations",
    oneLiner: "Transforming a music collective into a cultural movement.",
    image: work44db,
    tags: ["Brand Strategy", "Visual Identity", "Social Media"],
    badge: "74.6% reach",
    detail: {
      industry: "Music",
      date: "Ongoing",
      services: ["Brand Strategy", "Visual Identity", "Content Strategy", "Social Media Management"],
      metrics: [
        { value: "69,526", label: "Instagram views in one month" },
        { value: "74.6%", label: "Views from non-followers" },
        { value: "6,900%", label: "Growth from baseline" },
      ],
      challenge:
        "44DB had talent—world-class producers creating incredible music. But their brand presence didn't match their artistic excellence. Social media was inconsistent, their visual identity was fragmented, and they were averaging just 1,000 views per month on Instagram. They needed a cohesive brand that could turn their music collective into a recognized movement—something that commanded attention and respect in the industry.",
      solution: [
        {
          heading: "Brand Strategy",
          body: "Positioned 44DB not as just another music group, but as a cultural force—a collective that defines sound, not follows trends.",
        },
        {
          heading: "Visual Identity",
          body: "Created a bold, cohesive visual language—distinctive graphics, consistent color palette, and a look that matched their sonic excellence.",
        },
        {
          heading: "Content Strategy",
          body: "Developed a content calendar that balanced music releases with behind-the-scenes storytelling, creating emotional connection beyond just the tracks.",
        },
        {
          heading: "Social Media Management",
          body: "Managed their Instagram, TikTok, and X (Twitter) daily—posting content that sparked conversation and drove discovery.",
        },
      ],
      results:
        "August was a breakout month. With their community event BREAKTIME at the center of cultural buzz, 44DB didn't just drive engagement, they became a movement.",
      numbers: [
        "Instagram: 69,526 views, 1,856 interactions, 68 new followers in 30 days",
        "X (Twitter): 310,700 impressions, 10,100 engagements, 3.2% engagement rate",
        "TikTok: 9,331 views (+240%), 948 likes (+133%), breakout video hit 16,100 views",
        "74.6% of Instagram views came from non-followers",
      ],
      deliverables: [
        "Brand strategy document",
        "Visual identity system (logo variations, color palette, typography)",
        "Social media content templates",
        "30+ pieces of custom content (graphics, videos, captions)",
        "Campaign strategy for BREAKTIME single launch",
        "Ongoing social media management (Instagram, TikTok, X)",
      ],
    },
  },
  {
    slug: "vida-rosa",
    color: "#7a1f3d",
    client: "Vida Rosa",
    title: "Vida Rosa — Luxury Automotive Marketing",
    category: "Brand Foundations",
    oneLiner: "Luxury automotive marketing for one of Lagos's most exclusive dealerships.",
    image: workVidaRosa,
    tags: ["Luxury Marketing", "Paid Media", "Creative Direction"],
    badge: "Featured engagement",
  },

  {
    slug: "ile-eko",
    color: "#1f4d3a",
    client: "Ile Eko",
    title: "Ile Eko — Learning Management System",
    category: "Digital Platforms",
    oneLiner: "Modern education technology for Nigerian schools.",
    image: workIleEko,
    tags: ["SaaS", "Product Design", "EdTech"],
  },
  {
    slug: "morgan-oxford",
    color: "#142850",
    client: "Morgan Oxford Education",
    title: "Morgan Oxford — Education CRM",
    category: "Intelligent Systems",
    oneLiner: "A custom CRM built around how their staff actually work.",
    image: workMorganOxford,
    tags: ["Custom CRM", "Workflow Automation", "Internal Tools"],
    badge: "8hrs+ saved / wk",
    detail: {
      industry: "Education",
      date: "Ongoing",
      services: ["Discovery & Workflow Mapping", "Product Design", "Custom CRM Build", "Staff Onboarding"],
      metrics: [
        { value: "1", label: "Unified system replacing scattered tools" },
        { value: "<2 wks", label: "Average staff onboarding time" },
        { value: "100%", label: "Coverage of their real workflow" },
      ],
      challenge:
        "Morgan Oxford's team runs an education-specific workflow — student enquiries, advisor handoffs, application tracking, follow-ups across multiple programmes. Off-the-shelf CRMs forced them to bend that workflow around generic sales pipelines, so the team fell back on spreadsheets, email threads, and disconnected tools. Information lived in too many places, handoffs slipped, and leadership had no clean view of the pipeline.",
      solution: [
        {
          heading: "Workflow Discovery",
          body: "We sat with advisors and admin staff and mapped the real journey from first enquiry to enrolment — every status, every handoff, every edge case — before writing a line of code.",
        },
        {
          heading: "Custom Data Model",
          body: "Built around students, programmes, and advisor relationships instead of generic 'leads' and 'deals' — so the system speaks the team's language out of the box.",
        },
        {
          heading: "Role-Based Interface",
          body: "Each staff role gets a screen designed for their job. No clutter, no unused fields, no hunting through tabs that don't apply to them.",
        },
        {
          heading: "Automation Layer",
          body: "Automated reminders, status changes, and handoffs run quietly in the background so nothing falls between teams and advisors spend their time on students, not admin.",
        },
      ],
      results:
        "Morgan Oxford now runs on one source of truth. Advisors spend less time on admin and more time with students, new staff are productive in under two weeks, and leadership finally has visibility into the full pipeline.",
      numbers: [
        "One unified system replaced spreadsheets, email threads, and disconnected tools",
        "Role-based dashboards for advisors, admin, and leadership",
        "Automated handoffs and reminders across the enquiry-to-enrolment journey",
        "Full audit trail of every student interaction",
        "New staff onboarded and productive in under two weeks",
      ],
      deliverables: [
        "Workflow audit and process map",
        "Custom data model for students, programmes, and advisors",
        "Full custom CRM application",
        "Role-based dashboards and views",
        "Automation rules for reminders, status changes, and handoffs",
        "Staff training sessions and internal documentation",
      ],
    },
  },
  {
    slug: "fly-trinity",
    color: "#3C096C",
    client: "Fly Trinity Airways",
    title: "Fly Trinity Airways — Brand Identity",
    category: "Brand Foundations",
    oneLiner: "Crafting a premium airline brand identity from ground to sky.",
    image: workFlyTrinity,
    tags: ["Brand Strategy", "Visual Identity", "Collateral"],
  },
  {
    slug: "brillanta",
    color: "#1F4D2B",
    client: "Brillanta Afrique",
    title: "Brillanta Afrique — Brand & Web Identity",
    category: "Brand Foundations",
    oneLiner: "A premium identity for an Africa-rooted agriculture & energy trader.",
    image: workBrillanta,
    tags: ["Brand Identity", "Website Design", "Collateral"],
  },
  {
    slug: "nelly-baradi",
    color: "#0a1a3a",
    client: "Nelly Baradi",
    title: "Nelly Baradi — Artist Campaign & Creative Direction",
    category: "Brand Foundations",
    oneLiner: "The voice behind the voice — now centre stage.",
    image: workNellyBaradi,
    tags: ["Creative Direction", "Music Marketing", "Social Media"],
    badge: "250K+ views",
    detail: {
      industry: "Music — Afropop / R&B",
      date: "March – April 2026",
      services: ["Creative Direction", "Social Media Management", "Music Marketing", "Content Production"],
      metrics: [
        { value: "250K+", label: "YouTube views in 11 days" },
        { value: "+436%", label: "Instagram organic views (28d)" },
        { value: "+41%", label: "Spotify monthly listener growth" },
      ],
      challenge:
        "Nelly Baradi spent years as the best-kept secret in Nigerian music — the voice behind records by Seyi Vibez, Mohbad, Peruzzi, Timaya, Oxlade, Fola, and Bella Shmurda. With her solo single 'High Me' (March 2026), she was ready to step into her own light. The challenge: reintroduce a uniquely talented artist to industry and audience alike, build a coherent voice and visual world from scratch, and turn a release moment into a movement.",
      solution: [
        {
          heading: "Creative Direction",
          body: "Defined how Nelly looks and sounds to the world — artist identity, aesthetic direction, and the content strategy that governs every touchpoint.",
        },
        {
          heading: "Social Media Management",
          body: "Built her full brand voice guide — conversational, understated, lowercase, Nigerian cadence — and executed across Instagram, X, and TikTok in active collaboration with the artist.",
        },
        {
          heading: "Music Marketing — High Me",
          body: "End-to-end release campaign in partnership with The 7th Management: 4-phase X rollout, press release, Meta and YouTube paid media, DSP editorial coordination, and influencer activations.",
        },
        {
          heading: "Content Production",
          body: "Multiple rounds of lifestyle and performance content, designed to feel intimate, authentic, and worth watching twice.",
        },
      ],
      results:
        "11 days post-release, 'High Me' had crossed 250K+ YouTube views and 300K+ Instagram views across the promotional period. Her X account grew from 3 followers to 136 — entirely from Slate Labs–written copy — and Spotify monthly listeners climbed 41% with the campaign still in active phase.",
      numbers: [
        "YouTube: 250K+ total views on visualizer",
        "Instagram: 300K+ views (promo), +436% organic views, +590% interactions, +184% new follows (28d)",
        "Meta Paid: 230K reach, 210K engagements, 334K total post views",
        "X (Twitter): 3 → 136 followers (+4,433%), 50K+ views in 14 days",
        "Spotify: 2,394 → 3,382 monthly listeners (+41%)",
        "1,300+ link clicks to streaming platforms",
      ],
      deliverables: [
        "Full campaign strategy, narrative, and artist brief",
        "Brand voice guide and tone-of-voice system",
        "4-phase X (Twitter) rollout — all copy written in-house",
        "Press release written and distributed on release day",
        "Paid media campaigns across Meta and YouTube",
        "Playlist pitching and DSP editorial coordination",
        "Influencer and media activations (AlbumTalks, HypeTrybe, DebutHub)",
        "Lifestyle and performance content production",
        "Live event activations — Mainland Block Party, Tempo Lagos, Play with MIA",
      ],
    },
  },
];

const featuredSlugs: Project["slug"][] = ["nelly-baradi", "44db", "vida-rosa", "fly-trinity"];
export const featuredProjects = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug)!)
  .filter(Boolean);
