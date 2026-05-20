import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
}) {
  return (
    <As className={`px-6 py-24 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </As>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary">
      {children}
    </h2>
  );
}
