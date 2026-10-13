import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function UnsubscribePage() {
  const [state, setState] = useState({
    status: "loading"
  });
  const [token, setToken] = useState(null);
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("token");
    setToken(t);
    if (!t) {
      setState({
        status: "invalid",
        message: "Missing unsubscribe token."
      });
      return;
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(t)}`).then(async (r) => {
      const json = await r.json().catch(() => ({}));
      if (!r.ok) {
        setState({
          status: "invalid",
          message: json.error ?? "Invalid or expired link."
        });
        return;
      }
      if (json.valid === false && json.reason === "already_unsubscribed") {
        setState({
          status: "already"
        });
        return;
      }
      if (json.valid === true) {
        setState({
          status: "valid"
        });
        return;
      }
      setState({
        status: "invalid",
        message: "Invalid response."
      });
    }).catch(() => setState({
      status: "invalid",
      message: "Could not reach the server."
    }));
  }, []);
  async function confirm() {
    if (!token) return;
    setState({
      status: "submitting"
    });
    try {
      const r = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token
        })
      });
      const json = await r.json().catch(() => ({}));
      if (!r.ok) {
        setState({
          status: "error",
          message: json.error ?? "Something went wrong."
        });
        return;
      }
      if (json.success || json.reason === "already_unsubscribed") {
        setState({
          status: "success"
        });
        return;
      }
      setState({
        status: "error",
        message: "Could not unsubscribe."
      });
    } catch {
      setState({
        status: "error",
        message: "Network error."
      });
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[70vh] items-center justify-center px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium tracking-[0.2em] uppercase text-muted", children: "Email preferences" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em]", children: "Unsubscribe" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      state.status === "loading" && /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Checking your link\u2026" }),
      state.status === "valid" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Click below to stop receiving emails from Slate Labs." }),
        /* @__PURE__ */ jsx("button", { onClick: confirm, className: "mt-6 inline-flex items-center justify-center rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-primary glow-primary", children: "Confirm unsubscribe" })
      ] }),
      state.status === "submitting" && /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Processing\u2026" }),
      state.status === "success" && /* @__PURE__ */ jsx("p", { className: "text-foreground", children: "You've been unsubscribed. We won't email you again." }),
      state.status === "already" && /* @__PURE__ */ jsx("p", { className: "text-foreground", children: "You're already unsubscribed. No further action needed." }),
      state.status === "invalid" && /* @__PURE__ */ jsx("p", { className: "text-muted", children: state.message }),
      state.status === "error" && /* @__PURE__ */ jsx("p", { className: "text-red-600", children: state.message })
    ] })
  ] }) });
}

export { UnsubscribePage as component };
//# sourceMappingURL=unsubscribe-BziHzxG2.mjs.map
