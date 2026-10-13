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
    <As className={`px-6 py-14 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </As>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium text-muted mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      <span>{children}</span>
    </div>
  );
}
