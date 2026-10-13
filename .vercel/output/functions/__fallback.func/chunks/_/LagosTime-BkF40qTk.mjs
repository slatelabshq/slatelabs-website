import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function LagosTime() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const tick = () => {
      setTime(
        (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit"
        })
      );
    };
    tick();
    const id = window.setInterval(tick, 3e4);
    return () => window.clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/70", children: [
    /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-primary animate-pulse-dot" }),
      /* @__PURE__ */ jsx("span", { className: "relative h-1.5 w-1.5 rounded-full bg-primary" })
    ] }),
    "Lagos",
    time ? ` \xB7 ${time} WAT` : ""
  ] });
}

export { LagosTime as L };
//# sourceMappingURL=LagosTime-BkF40qTk.mjs.map
