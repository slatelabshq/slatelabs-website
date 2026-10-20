import { ContactForm } from "@/components/slate/ContactForm";

export function ContactPage() {
  return (
    <>
      <section className="page-head" data-ground="page" aria-labelledby="page-title">
        <div className="shell">
          <div className="titleblock">
            <p className="mono">
              Lagos, Nigeria <span className="titleblock__dot" aria-hidden="true" /> Contact
            </p>
            <p className="mono titleblock__meta">
              Lekki Phase 1 <span className="titleblock__dot" aria-hidden="true" /> Replies within 24
              hours
            </p>
          </div>

          <h1 className="page-head__title" id="page-title" data-ktype>
            Let&apos;s build on a clean slate.
          </h1>

          <p className="lead page-head__lead">
            Ready to transform your brand, build your platform, or scale your business? Tell us what
            you&apos;re working on.
          </p>
        </div>
      </section>

      <section className="section" data-ground="panel" aria-labelledby="send-title">
        <div className="shell">
          <div className="sechead">
            <p className="mono sechead__eyebrow">01 — Your project</p>
            <h2 className="h2 sechead__title" id="send-title">Tell us what you&apos;re working on.</h2>
          </div>

          <div className="duo">
            <ContactForm />

            <ul className="details">
              <li>
                <p className="mono">Direct</p>
                <a href="mailto:hello@slatelabshq.com">hello@slatelabshq.com</a>
                <a
                  href="https://wa.me/2347026036554?text=Hi%20Slate%20Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp / Call — +234 702 603 6554
                </a>
              </li>
              <li>
                <p className="mono">Location</p>
                <p>Lagos, Nigeria — Lekki Phase 1</p>
              </li>
              <li>
                <p className="mono">Response time</p>
                <p>We typically respond within 24 hours.</p>
              </li>
              <li>
                <p className="mono">Elsewhere</p>
                <a
                  href="https://instagram.com/slatelabs.hq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram — @slatelabs.hq
                </a>
                <a href="https://tiktok.com/@slatelabs.hq" target="_blank" rel="noopener noreferrer">
                  TikTok — @slatelabs.hq
                </a>
                <a
                  href="https://www.linkedin.com/company/slate-labs-hq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn — Slate Labs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" data-ground="deep" aria-labelledby="call-title">
        <div className="shell">
          <div className="sechead">
            <p className="mono sechead__eyebrow">02 — Book a call</p>
            <h2 className="h2 sechead__title" id="call-title" data-ktype>
              Twenty minutes, no prep.
            </h2>
          </div>

          <div className="duo">
            <figure>
              <div className="media media--16x9 media--reveal">
                <img
                  src="/assets/img/work-brillanta.jpg"
                  alt="Brillanta Afrique brand and web identity"
                  width={1280}
                  height={720}
                  loading="lazy"
                />
              </div>
              <figcaption className="caption mono">
                <span>Recent work</span>
                <span>Brillanta Afrique</span>
              </figcaption>
            </figure>

            <div className="prose">
              <p className="lead">
                Pick a slot that works and bring your questions. If a call isn&apos;t your thing,
                email or WhatsApp reaches the founders directly.
              </p>
              <p>
                <a
                  className="btn btn--primary"
                  href="https://calendly.com/slatelabs/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 20-min intro <span className="btn__go" aria-hidden="true">→</span>
                </a>
              </p>
              <p>
                <a className="btn btn--ghost" href="/work">See our work</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
