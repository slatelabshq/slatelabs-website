import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import workNelly from "@/assets/work-nelly-baradi.jpg";
import workVida from "@/assets/work-vidarosa.jpg";
import workIleEko from "@/assets/work-ileeko.jpg";
import workMorgan from "@/assets/work-morgan-oxford.jpg";

const services = [
  {
    n: "01",
    title: "Brand Strategy",
    body: "Identity, positioning, and messaging that build brands people remember. We start from what makes you different and build outward from there.",
    hash: "brand-strategy",
    image: workNelly,
    caption: "Nelly Baradi",
  },
  {
    n: "02",
    title: "Growth Marketing",
    body: "Social, paid, music marketing, and campaign strategy. We don't just post — we build audiences and drive measurable results.",
    hash: "growth-marketing",
    image: workVida,
    caption: "Vida Rosa",
  },
  {
    n: "03",
    title: "Digital Platforms",
    body: "Custom websites, web apps, and SaaS products built to scale. Every platform is tailored to the problem it's solving.",
    hash: "digital-platforms",
    image: workIleEko,
    caption: "Ile Eko",
  },
  {
    n: "04",
    title: "Intelligent Systems",
    body: "AI automation and workflow design that give your team their time back. We find what's draining you and build systems that handle it.",
    hash: "intelligent-systems",
    image: workMorgan,
    caption: "Morgan Oxford",
  },
];

export function HomeServices() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 bg-background">
      <div className="max-w-[90rem] mx-auto">
        <Reveal className="mb-16 md:mb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
            03 — Practices
          </p>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[0.94] tracking-[-0.03em] max-w-3xl">
            Four practices. <span className="italic text-primary">One studio.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6 xl:col-span-7">
            {services.map((s, i) => (
              <Link
                key={s.n}
                to="/services"
                hash={s.hash}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-start border-t border-border py-7 md:py-9 last:border-b"
              >
                <span
                  className={`font-mono text-sm pt-2 ${i === active ? "text-primary" : "text-muted"}`}
                >
                  {s.n}
                </span>
                <div>
                  <h3
                    className={`font-display text-3xl md:text-5xl tracking-[-0.03em] leading-none transition-colors ${
                      i === active ? "text-foreground" : "text-foreground/45 group-hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-muted leading-relaxed max-w-xl overflow-hidden transition-all duration-500 ${
                      i === active ? "mt-4 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    {s.body}
                  </p>
                </div>
                <ArrowUpRight
                  className={`h-5 w-5 mt-2 transition-all duration-400 ${
                    i === active ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-muted/50"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-6 xl:col-span-5 sticky top-28">
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-surface">
              <img
                key={current.n}
                src={current.image}
                alt={current.caption}
                className="h-full w-full object-cover animate-scale-in"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">In practice</p>
                <p className="mt-1 font-display text-2xl italic">{current.caption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
