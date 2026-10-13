import { jsx, jsxs } from 'react/jsx-runtime';
import { E as Eyebrow } from './Section-C2DeNOgk.mjs';
import { C as CtaButton } from './CtaButton-oIy5JhBR.mjs';
import '@tanstack/react-router';

const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "min-h-[60vh] flex items-center justify-center px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-md", children: [
  /* @__PURE__ */ jsx(Eyebrow, { children: "404" }),
  /* @__PURE__ */ jsx("h1", { className: "text-3xl font-medium tracking-tight mb-4", children: "Insight not found" }),
  /* @__PURE__ */ jsx("p", { className: "text-muted mb-8", children: "That insight doesn't exist or has been moved." }),
  /* @__PURE__ */ jsx(CtaButton, { to: "/insights", variant: "primary", children: "Back to insights" })
] }) });

export { SplitNotFoundComponent as notFoundComponent };
//# sourceMappingURL=insights._slug-DaV4Meg8.mjs.map
