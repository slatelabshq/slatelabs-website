# Slate Labs Website — Build Plan

All copy is provided in the two PDFs. The site is a marketing/agency site with one product sub-page (Ile Eko) and a contact form. Fully doable in this stack (TanStack Start + Tailwind).

## Routes (one file per page, SSR + SEO metadata)

```
src/routes/
  __root.tsx              shared header + footer, global meta
  index.tsx               / — Homepage
  about.tsx               /about
  services.tsx            /services (#brand-foundations, #digital-platforms, #intelligent-systems)
  work.tsx                /work — portfolio grid + filters
  work.$slug.tsx          /work/44db, /work/vida-rosa — case study template
  ile-eko.tsx             /ile-eko — product page
  contact.tsx             /contact — form
```

Each route gets its own `head()` with unique title / description / og tags.

## Page sections (from the PDFs)

- **Home:** Hero, What We Build (3 service cards), Featured Work (3 projects), Why Slate Labs (4 differentiators), Trusted By logo marquee, metrics, final CTA.
- **About:** Hero, Mission, Our Story, Meet the Founders (Joseph, SK, Kenny), Our Process, Our Philosophy, CTA.
- **Services:** Hero + 3 detailed service sections (anchor-linked), comparison table vs. traditional agencies, FAQ, CTA.
- **Work:** Hero, filter chips (All / Brand / Platforms / Systems), 3 project cards, CTA.
- **Case Study (dynamic):** Hero, Quick Facts, Key Results, Challenge, Solution, Results, Testimonial, Deliverables, Gallery, More Work. Content for 44DB and Vida Rosa stored in a local data file.
- **Ile Eko:** Hero, Problem Statement, Solution Overview, 6 Features, How It Works (4 steps), Pricing (3 tiers, "Contact for pricing"), FAQ, CTA.
- **Contact:** Hero, form (Name, Email, Company, Project Type, Budget, Message), direct contact info, social links.

## Form handling

Contact form posts to a `createServerFn` that validates with Zod and emails `hello@slatelabs.co`. Email delivery needs **Lovable Cloud + a provider (Resend)** — I'll enable Cloud and ask you for a Resend key when we get there. For an initial pass we can just store submissions in a Cloud table and show them in your dashboard.

## Design direction

Copy has a confident, editorial, "clean slate" tone. Before coding I'll generate 3 rendered design directions so you can pick the look (typography, palette, layout density, motion). Hard part is choosing between editorial-minimal, bold-brutalist, or premium-studio.

## What I still need from you

1. **Logo files** for Slate Labs, 44DB, Vida Rosa, Ile Eko (or I'll typeset wordmarks as placeholders).
2. **Founder photos** + the bios/fun-facts that are blank in the PDF (Joseph, SK, Kenny).
3. **Case study imagery** for 44DB and Vida Rosa (Instagram screenshots, campaign visuals).
4. **Ile Eko dashboard screenshot** for the hero (or I'll generate a realistic mockup).
5. Confirm: should /work/ile-eko exist as a case study too, or only the /ile-eko product page?

## Build order

1. Enable Lovable Cloud (for contact form + future demo bookings).
2. Generate 3 design directions → you pick one.
3. Build shared header/footer + design tokens.
4. Build Home → Services → Work + case study template → Ile Eko → About → Contact.
5. Wire contact form to Cloud, add SEO meta per route, generate placeholder imagery for anything you haven't supplied.

Ready to start with the design directions whenever you give the go.
