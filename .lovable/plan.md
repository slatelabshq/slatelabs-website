## Restyle "Meet the founders" cards to match reference

Match the uploaded screenshot exactly.

### Layout changes (`src/routes/about.tsx`, team section)
- Section heading: change to "Meet the **Founders**" (Founders in primary), centered, with subhead "The team behind every clean slate." below it.
- Each card becomes center-aligned:
  - Circular avatar at top (w-24 h-24, `rounded-full`, ring/border in primary, object-cover). SK gets the same circle with "SK" initials centered.
  - Name (bold, foreground)
  - Role in primary color, slightly muted
  - Bio centered, muted
  - Italic "Fun Fact: Coming soon ✨" line at the bottom, small + muted
- Remove the `0X` number above each card.

### Data updates
Update `team` entries to match the new copy in the reference:
- Joseph — role "Creative Director & Brand Strategist", bio: "I bring the creative vision and strategic thinking. From content writing to videography to social media management, I've built brands that break through the noise. At Slate Labs, I lead brand development, content strategy, and creative direction—making sure every project has a story that resonates and a look that lasts."
- Olasukanmi Festus Adeyeye — role "Lead Developer & Technical Architect", bio: "SK is the technical backbone of Slate Labs. With experience building platforms, SaaS products, and scalable systems, he leads all development work—from custom websites to complex applications like Ile Eko. He's the reason our platforms don't just look good, they work flawlessly."
- Kehinde Abiola — role "Head of Operations & Strategy", bio: "Kenny keeps everything running smoothly. From project management to client relations to making sure deadlines are met without sacrificing quality—he's the operational force that turns vision into execution. He ensures every project is delivered on time, on budget, and beyond expectations."
- Each gets `funFact: "Coming soon ✨"`.

No other sections change.