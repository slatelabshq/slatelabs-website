import { useState, type CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { Magnetic } from "@/components/home/Magnetic";
import { LagosTime } from "@/components/home/LagosTime";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { projects } from "@/lib/work-data";

const frames = [
  {
    slug: "nelly-baradi" as const,
    rot: "-7deg",
    className: "top-[18%] right-[6%] w-[38%] max-w-[280px] z-20",
  },
  {
    slug: "fly-trinity" as const,
    rot: "5deg",
    className: "bottom-[12%] right-[2%] w-[44%] max-w-[340px] z-10",
  },
  {
    slug: "44db" as const,
    rot: "3deg",
    className: "top-[42%] right-[34%] w-[26%] max-w-[200px] z-30 hidden md:block",
  },
];

export function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <header
      className="relative isolate z-[1] flex min-h-[100svh] min-h-[100dvh] flex-col overflow-hidden bg-ink text-ink-foreground -mt-px max-lg:overflow-visible max-lg:after:pointer-events-none max-lg:after:absolute max-lg:after:inset-x-0 max-lg:after:top-full max-lg:after:h-6 max-lg:after:bg-ink max-lg:after:content-['']"
      onMouseMove={(e) => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: ((e.clientX - r.left) / r.width - 0.5) * 24,
          y: ((e.clientY - r.top) / r.height - 0.5) * 16,
        });
      }}
    >
      <div className="pointer-events-none absolute -top-24 left-[10%] h-[22rem] w-[22rem] rounded-full bg-primary/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-4rem] right-[-2rem] h-[20rem] w-[20rem] rounded-full bg-[#7a1f3d]/45 blur-[110px]" />
      <div className="grain-overlay absolute inset-0 z-[1] opacity-40" />

      {/* Floating work frames sit on the right of the whole hero, not in a second column. */}
      <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block">
        <div className="absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-ink via-ink/85 to-transparent z-40" />
        {frames.map((frame, i) => {
          const project = projects.find((p) => p.slug === frame.slug);
          if (!project) return null;
          const mx = mouse.x * (i === 1 ? 1.05 : i === 2 ? -0.65 : 0.5);
          const my = mouse.y * (i === 0 ? 0.85 : 0.4);
          return (
            <div
              key={frame.slug}
              className={`absolute overflow-hidden rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] animate-float-y ${frame.className}`}
              style={
                {
                  "--rot": frame.rot,
                  "--mx": `${mx}px`,
                  "--my": `${my}px`,
                  animationDelay: `${i * 0.55}s`,
                  animationDuration: `${7 + i * 1.3}s`,
                } as CSSProperties
              }
            >
              <img
                src={project.image}
                alt={project.client}
                className="aspect-[4/5] w-full object-cover animate-ken-slow"
                style={{ animationDelay: `${i * -4}s` }}
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/75 to-transparent">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/85">
                  {project.client}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="relative z-20 flex w-full max-w-[90rem] flex-1 flex-col px-6 lg:px-10 pt-[7.5rem] pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:pb-8 mx-auto lg:min-h-0 lg:justify-between"
      >
        <div className="flex flex-1 flex-col justify-center lg:flex-none lg:justify-start max-w-xl lg:max-w-3xl lg:pt-6">
          <div className="flex items-center gap-4 mb-8 lg:mb-7 animate-reveal">
            <LagosTime />
            <span className="h-px w-8 bg-white/20" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/50">
              Creative &amp; Tech
            </span>
          </div>

          <h1 className="font-display text-[clamp(3.15rem,12vw,7.6rem)] leading-[0.9] tracking-[-0.04em] text-balance lg:leading-[0.88]">
            <span className="block overflow-hidden">
              <span className="block animate-clip-up" style={{ animationDelay: "60ms" }}>
                Building brands
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-clip-up" style={{ animationDelay: "160ms" }}>
                &amp; platforms on a
              </span>
            </span>
            <span className="block overflow-hidden italic text-primary">
              <span className="block animate-clip-up" style={{ animationDelay: "260ms" }}>
                clean slate.
              </span>
            </span>
          </h1>

          <p
            className="mt-7 lg:mt-6 max-w-md text-[1.0625rem] leading-[1.65] text-ink-foreground/70 md:text-lg md:leading-relaxed animate-reveal"
            style={{ animationDelay: "380ms" }}
          >
            A Lagos studio for businesses ready to start fresh — brand, growth, platforms, and AI systems, built as one piece of work.
          </p>

          <ul
            className="mt-8 lg:hidden flex flex-wrap gap-2 animate-reveal"
            style={{ animationDelay: "420ms" }}
            aria-label="What we do"
          >
            {["Brand", "Growth", "Platforms", "AI systems"].map((label) => (
              <li
                key={label}
                className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/75"
              >
                {label}
              </li>
            ))}
          </ul>

          <div
            className="mt-10 lg:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center animate-reveal"
            style={{ animationDelay: "480ms" }}
          >
            <Magnetic className="block w-full sm:inline-block sm:w-auto">
              <CtaButton to="/work" variant="inverse" className="w-full sm:w-auto min-h-[3.25rem] px-8 text-[0.9375rem]">
                See the work
              </CtaButton>
            </Magnetic>
            <Magnetic strength={0.18} className="block w-full sm:inline-block sm:w-auto">
              <CtaButton to="/contact" variant="ghost" className="w-full sm:w-auto min-h-[3.25rem] px-8 text-[0.9375rem]">
                Start a project
              </CtaButton>
            </Magnetic>
          </div>
        </div>

        <div className="mt-auto shrink-0 pt-6 max-lg:border-t max-lg:border-white/10 lg:mt-8 lg:border-0 lg:pt-0">
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] text-ink-foreground/50 hover:text-ink-foreground"
          >
            <span className="relative h-10 w-px bg-white/15 overflow-hidden">
              <span className="absolute inset-0 bg-primary animate-scroll-line" />
            </span>
            Scroll
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
