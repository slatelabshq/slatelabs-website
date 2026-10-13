import { jsx, jsxs } from 'react/jsx-runtime';

function Section({
  children,
  className = "",
  as: As = "section"
}) {
  return /* @__PURE__ */ jsx(As, { className: `px-6 py-14 md:py-16 ${className}`, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children }) });
}
function Eyebrow({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-medium text-muted mb-6", children: [
    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
    /* @__PURE__ */ jsx("span", { children })
  ] });
}

export { Eyebrow as E, Section as S };
//# sourceMappingURL=Section-C2DeNOgk.mjs.map
