import type { ReactNode } from "react";
import { LagosTime } from "@/components/home/LagosTime";

type PageHeroProps = {
  section: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  compact?: boolean;
  image?: string;
  imageAlt?: string;
  /** `logo` shows a contained mark/wordmark; `photo` uses the editorial image treatment. */
  imageMode?: "photo" | "logo";
};

export function PageHero({
  section,
  title,
  description,
  align = "left",
  compact,
  image,
  imageAlt = "",
  imageMode = "photo",
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <header
      className={`relative isolate overflow-hidden bg-ink text-ink-foreground -mt-px ${
        compact ? "pt-[7.5rem] pb-14 md:pb-20" : "pt-[7.5rem] pb-16 md:pt-[8.5rem] md:pb-24"
      }`}
    >
      <div className="pointer-events-none absolute -top-20 left-[8%] h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#7a1f3d]/35 blur-[100px]" />
      <div className="grain-overlay absolute inset-0 opacity-35" />

      {image && imageMode === "logo" ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex w-[44%] max-w-xl items-center justify-center px-10 xl:px-14">
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <img
            src={image}
            alt={imageAlt}
            className="relative z-10 w-full max-w-[min(100%,24rem)] h-auto object-contain"
          />
        </div>
      ) : null}
      {image && imageMode === "photo" ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[42%] max-w-xl">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
      ) : null}

      <div
        className={`relative z-10 max-w-[90rem] mx-auto px-6 lg:px-10 ${
          centered ? "text-center max-w-4xl" : "max-w-3xl"
        }`}
      >
        <div
          className={`flex items-center gap-4 mb-6 animate-reveal ${
            centered ? "justify-center" : ""
          }`}
        >
          <LagosTime />
          <span className="h-px w-8 bg-white/20" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/50">
            {section}
          </span>
        </div>
        <h1
          className={`font-display text-[clamp(2.6rem,6.5vw,5.8rem)] leading-[0.9] tracking-[-0.04em] text-balance animate-reveal`}
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={`mt-6 text-base md:text-lg leading-relaxed text-ink-foreground/65 max-w-xl animate-reveal ${
              centered ? "mx-auto" : ""
            }`}
            style={{ animationDelay: "200ms" }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
