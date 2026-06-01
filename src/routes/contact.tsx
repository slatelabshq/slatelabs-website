import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { CALENDLY_URL } from "@/lib/calendly";

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
    const mailto = `mailto:hello@slatelabshq.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  const input =
    "w-full rounded-xl bg-background border border-transparent focus:border-foreground/20 outline-none px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors";
  const label = "block text-xs font-medium text-muted mb-2";

  return (
    <>
      <header className="px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
            Let's build on a <span className="text-primary">clean slate.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted leading-relaxed">
            Ready to transform your brand, build your platform, or scale your business? Let's talk.
          </p>
        </div>
      </header>

      <Section>
        <div className="bg-surface rounded-[2.5rem] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <Eyebrow>Send a message</Eyebrow>
              {sent ? (
                <div className="rounded-2xl bg-background p-8 border border-primary/30">
                  <h2 className="text-xl font-medium tracking-tight mb-3">Email drafted.</h2>
                  <p className="text-muted">
                    We've opened your email client with the details. Hit send and we'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={label} htmlFor="name">Name *</label>
                    <input id="name" name="name" required className={input} />
                  </div>
                  <div>
                    <label className={label} htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required className={input} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={label} htmlFor="company">Company / Organization</label>
                    <input id="company" name="company" className={input} />
                  </div>
                  <div>
                    <label className={label} htmlFor="projectType">Project type</label>
                    <select id="projectType" name="projectType" className={input} defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option>Brand Foundations</option>
                      <option>Digital Platforms</option>
                      <option>Intelligent Systems</option>
                      <option>Ile Eko</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="budget">Budget range</label>
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
                    <textarea id="message" name="message" required rows={6} className={`${input} resize-none`} />
                  </div>
                  <div className="md:col-span-2 mt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-primary glow-primary active:translate-y-px focus-visible:outline-none"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside className="md:col-span-5 space-y-10">
              <div>
                <div className="text-xs font-medium text-muted mb-3">Book a call</div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary glow-primary transition-colors"
                >
                  Book a 20-min intro →
                </a>
                <p className="text-xs text-muted mt-3">Pick a slot that works. No prep needed.</p>
              </div>
              <div>
                <div className="text-xs font-medium text-muted mb-3">Direct</div>
                <a href="mailto:hello@slatelabshq.com" className="block text-xl font-medium hover:text-primary">
                  hello@slatelabshq.com
                </a>
                <a
                  href="https://wa.me/2347026036554?text=Hi%20Slate%20Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-base hover:text-primary"
                >
                  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="#25D366" aria-hidden="true">
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.045 2.264v.114c-.015.99.405 1.976.832 2.834 1.36 2.493 3.864 4.795 6.616 5.798.717.288 2.044.66 2.832.66.99 0 2.176-.59 2.59-1.55.13-.297.187-.622.187-.95 0-.187 0-.348-.044-.516-.115-.387-1.504-.985-1.847-1.146-.215-.115-.402-.215-.616-.215zM16.32 0c-8.696 0-15.747 7.05-15.747 15.747 0 2.79.732 5.51 2.107 7.916L0 32l8.532-2.234a15.61 15.61 0 0 0 7.788 1.974c8.696 0 15.747-7.05 15.747-15.748C32.067 7.052 25.017 0 16.32 0z" />
                  </svg>
                  WhatsApp / Call — +234 702 603 6554
                </a>
              </div>
              <div>
                <div className="text-xs font-medium text-muted mb-3">Location</div>
                <p className="text-base">Lagos, Nigeria (Lekki Phase 1)</p>

              </div>
              <div>
                <div className="text-xs font-medium text-muted mb-3">Response time</div>
                <p className="text-base">We typically respond within 24 hours.</p>
              </div>
              <div>
                <div className="text-xs font-medium text-muted mb-3">Other ways to connect</div>
                <ul className="space-y-2 text-base">
                  <li><a href="https://instagram.com/slatelabs.hq" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram — @slatelabs.hq</a></li>
                  <li><a href="https://tiktok.com/@slatelabs.hq" target="_blank" rel="noopener noreferrer" className="hover:text-primary">TikTok — @slatelabs.hq</a></li>
                  <li><a href="https://www.linkedin.com/company/slate-labs-hq" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn — Slate Labs</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
