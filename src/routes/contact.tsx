import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Slate Labs" },
      {
        name: "description",
        content:
          "Ready to transform your brand, build your platform, or scale your business? Get in touch with Slate Labs in Lagos.",
      },
      { property: "og:title", content: "Contact — Slate Labs" },
      {
        property: "og:description",
        content: "Let's build on a clean slate. We typically respond within 24 hours.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `New project enquiry — ${fd.get("name") ?? ""}`;
    const body =
      `Name: ${fd.get("name") ?? ""}\n` +
      `Email: ${fd.get("email") ?? ""}\n` +
      `Company: ${fd.get("company") ?? ""}\n` +
      `Project Type: ${fd.get("projectType") ?? ""}\n` +
      `Budget: ${fd.get("budget") ?? ""}\n\n` +
      `Message:\n${fd.get("message") ?? ""}`;
    const mailto = `mailto:hello@slatelabs.co?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  const input =
    "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted/60 transition-colors";
  const label = "block text-[10px] font-bold uppercase tracking-widest text-muted mb-2";

  return (
    <>
      <header className="px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-5xl md:text-[120px] font-extrabold leading-[0.9] tracking-tighter mb-12">
            Let's build on a <br />
            <span className="font-serif italic font-medium text-primary">clean slate.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Ready to transform your brand, build your platform, or scale your business? Let's talk.
          </p>
        </div>
      </header>

      <Section className="bg-card border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <Eyebrow>Send a Message</Eyebrow>
            {sent ? (
              <div className="border border-primary p-8">
                <h2 className="text-2xl font-extrabold tracking-tight mb-3">Email drafted.</h2>
                <p className="text-muted">
                  We've opened your email client with the details. Hit send and we'll get back to
                  you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                  <label className={label} htmlFor="name">Name *</label>
                  <input id="name" name="name" required className={input} />
                </div>
                <div className="md:col-span-1">
                  <label className={label} htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required className={input} />
                </div>
                <div className="md:col-span-2">
                  <label className={label} htmlFor="company">Company / Organization</label>
                  <input id="company" name="company" className={input} />
                </div>
                <div className="md:col-span-1">
                  <label className={label} htmlFor="projectType">Project Type</label>
                  <select id="projectType" name="projectType" className={input} defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Brand Foundations</option>
                    <option>Digital Platforms</option>
                    <option>Intelligent Systems</option>
                    <option>Ile Eko</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className={label} htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" className={input} defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Under ₦500k</option>
                    <option>₦500k–₦1M</option>
                    <option>₦1M–₦3M</option>
                    <option>₦3M+</option>
                    <option>Not Sure</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={label} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`${input} resize-none`}
                  />
                </div>
                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                  >
                    Send Message
                    <div className="absolute -bottom-1 -right-1 w-full h-full border border-foreground -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="md:col-span-5 space-y-12">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted mb-3">Direct</div>
              <a
                href="mailto:hello@slatelabs.co"
                className="text-2xl font-serif italic hover:text-primary"
              >
                hello@slatelabs.co
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted mb-3">Location</div>
              <p className="text-lg">Lagos, Nigeria</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted mb-3">
                Response Time
              </div>
              <p className="text-lg">We typically respond within 24 hours.</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted mb-3">
                Other Ways to Connect
              </div>
              <ul className="space-y-2 text-lg">
                <li>
                  <a
                    href="https://instagram.com/slatelabs.co"
                    className="hover:text-primary"
                  >
                    Instagram — @slatelabs.co
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">LinkedIn — Slate Labs</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
