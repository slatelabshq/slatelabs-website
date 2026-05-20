import work44db from "@/assets/work-44db.jpg";
import workVidaRosa from "@/assets/work-vidarosa.jpg";
import workIleEko from "@/assets/work-ileeko.jpg";

export type Project = {
  slug: "44db" | "vida-rosa" | "ile-eko";
  client: string;
  title: string;
  category: "Brand Foundations" | "Digital Platforms" | "Intelligent Systems";
  oneLiner: string;
  image: string;
  tags: string[];
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
    client: "44DB",
    title: "44DB — Music Collective Branding",
    category: "Brand Foundations",
    oneLiner: "Transforming a music collective into a cultural movement.",
    image: work44db,
    tags: ["Brand Strategy", "Visual Identity", "Social Media"],
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
    client: "Vida Rosa",
    title: "Vida Rosa — Luxury Auto Social Management",
    category: "Brand Foundations",
    oneLiner: "Turning Instagram into a premium sales channel.",
    image: workVidaRosa,
    tags: ["Brand Strategy", "Social Media", "Content"],
    detail: {
      industry: "Luxury Automotive",
      date: "Ongoing",
      services: ["Brand Strategy", "Social Media Management", "Content Creation"],
      metrics: [
        { value: "8,000+", label: "Followers grown organically" },
        { value: "2–5", label: "Qualified leads per week" },
        { value: "45%", label: "Increase in car sales" },
      ],
      challenge:
        "Vida Rosa is a luxury car dealership selling premium vehicles, but their digital presence didn't reflect the quality of their inventory. With no consistent social strategy, they were missing a huge opportunity to reach affluent buyers where they already spend time—Instagram.",
      solution: [
        {
          heading: "Premium Visual Identity",
          body: "Built a visual language that mirrored the quality of the cars—clean, confident, unmistakably high-end.",
        },
        {
          heading: "Content Engine",
          body: "Produced a continuous stream of polished photography, walkarounds and storytelling posts that positioned every vehicle as aspirational.",
        },
        {
          heading: "Sales-Focused Social",
          body: "Treated Instagram as a primary sales channel, with DMs, stories and call-to-actions engineered to convert lurkers into qualified buyers.",
        },
      ],
      results:
        "Instagram became Vida Rosa's most reliable lead source—turning followers into showroom visits and, ultimately, signed deals.",
      numbers: [
        "8,000 followers grown organically from a near-zero starting point",
        "2–5 qualified leads delivered per week",
        "45% increase in car sales attributed to social channels",
      ],
      deliverables: [
        "Brand voice & visual guidelines",
        "Monthly content calendar",
        "Custom photography & video direction",
        "Instagram, TikTok, and X management",
        "DM and lead-handling playbooks",
      ],
    },
  },
  {
    slug: "ile-eko",
    client: "Ile Eko",
    title: "Ile Eko — Learning Management System",
    category: "Digital Platforms",
    oneLiner: "Modern education technology for Nigerian schools.",
    image: workIleEko,
    tags: ["SaaS", "Product Design", "EdTech"],
  },
];

export const featuredProjects = projects;
