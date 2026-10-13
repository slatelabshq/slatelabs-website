export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] };

export type Author = { name: string; role: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  author: Author;
  cover: string;
  coverAlt: string;
  tag: "Brand" | "Growth" | "Platforms" | "Systems" | "Culture";
  body: Block[];
};

// TODO: editorial pass — replace placeholder copy below with final-edit versions.
export const posts: Post[] = [
  {
    slug: "why-most-lagos-brands-look-the-same",
    title: "Why most Lagos brands look the same",
    excerpt:
      "Sameness isn't a design problem — it's a positioning problem. A short essay on why differentiation doesn't come from a logo.",
    date: "2026-05-12",
    readMinutes: 4,
    author: { name: "Joseph Awujoola-Kalohun", role: "Co-Founder & CEO" },
    cover:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Brand designer working with color swatches and typography samples",
    tag: "Brand",
    body: [
      {
        type: "p",
        text: "Walk through Lekki on a Friday evening and count the brands. Same gradient. Same sans-serif. Same three lifestyle photos rotated across five Instagram grids. It feels deliberate — like there's a Lagos starter pack everyone bought from the same shop.",
      },
      {
        type: "p",
        text: "There isn't. What there is, instead, is a deep aversion to risk dressed up as good taste. When a founder can't articulate what makes their business different in one sentence, the designer can't either. The brand defaults to whatever's safe. Safe looks like everyone else.",
      },
      { type: "h2", text: "Differentiation is a positioning problem" },
      {
        type: "p",
        text: "We talk about brand as if it's a visual exercise. It isn't. Brand is the operating answer to one question: what do you do that nobody else does in quite the same way? Until that's settled, no amount of typography work will save you.",
      },
      {
        type: "quote",
        text: "The best brands aren't the prettiest ones — they're the clearest. You can write down what they stand for on a napkin.",
      },
      { type: "h2", text: "Three questions before you touch the logo" },
      {
        type: "ul",
        items: [
          "Who specifically are you for, and who are you not for?",
          "What would your most loyal customer say is the one thing you do that nobody else does?",
          "If a competitor copied your visuals tomorrow, would anything actually change for your customers?",
        ],
      },
      {
        type: "p",
        text: "If you can answer those, the visual identity almost designs itself. If you can't, the prettiest brand in Lagos is still going to look like the other prettiest brand in Lagos.",
      },
    ],
  },
  {
    slug: "the-crm-your-team-will-actually-use",
    title: "The CRM your team will actually use",
    excerpt:
      "Most off-the-shelf CRMs force you to bend your workflow around someone else's idea of sales. Here's what we learned building one that doesn't.",
    date: "2026-04-22",
    readMinutes: 5,
    author: { name: "Olasukanmi Adeyeye (SK)", role: "Co-Founder & CTO" },
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Team reviewing analytics and workflow data on a large display",
    tag: "Systems",
    body: [
      {
        type: "p",
        text: "Every business we've worked with has a CRM story. They bought the popular one, the team filled it in for two months, then quietly went back to spreadsheets and WhatsApp. The tool wasn't broken — it just wasn't theirs.",
      },
      { type: "h2", text: "Workflow first, software second" },
      {
        type: "p",
        text: "Before we wrote a line of code for Morgan Oxford, we sat with their advisors and admin staff and mapped the real journey from first enquiry to enrolment. Every status. Every handoff. Every edge case the off-the-shelf tools couldn't model.",
      },
      {
        type: "p",
        text: "What came out wasn't a CRM. It was a system that spoke their language — students and programmes instead of leads and deals, advisor handoffs instead of pipeline stages, role-based screens instead of one cluttered dashboard for everyone.",
      },
      { type: "h2", text: "Why teams quietly stop using software" },
      {
        type: "ul",
        items: [
          "It asks for data the team doesn't naturally have at that step.",
          "It has fields, tabs, or modules they don't use — but can't hide.",
          "It doesn't model the one handoff that actually matters to their day.",
          "It replaces a fast informal flow (a WhatsApp message) with a slow formal one.",
        ],
      },
      {
        type: "quote",
        text: "The right system disappears. The wrong system makes you think about itself.",
      },
      {
        type: "p",
        text: "Custom isn't always the answer. Sometimes a well-configured off-the-shelf tool is exactly right. But when your workflow is genuinely specific — and a lot of Lagos businesses' workflows are — bending it to fit generic software costs more in lost time than the software ever saved.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}

export function getLatestPosts(limit = 3): Post[] {
  return [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
