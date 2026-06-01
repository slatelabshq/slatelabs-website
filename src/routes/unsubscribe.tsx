import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/unsubscribe")({
  component: UnsubscribePage,
  head: () => ({
    meta: [
      { title: "Unsubscribe — Slate Labs" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type State =
  | { status: "loading" }
  | { status: "valid" }
  | { status: "already" }
  | { status: "invalid"; message: string }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

function UnsubscribePage() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("token");
    setToken(t);
    if (!t) {
      setState({ status: "invalid", message: "Missing unsubscribe token." });
      return;
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(t)}`)
      .then(async (r) => {
        const json = await r.json().catch(() => ({}));
        if (!r.ok) {
          setState({
            status: "invalid",
            message: json.error ?? "Invalid or expired link.",
          });
          return;
        }
        if (json.valid === false && json.reason === "already_unsubscribed") {
          setState({ status: "already" });
          return;
        }
        if (json.valid === true) {
          setState({ status: "valid" });
          return;
        }
        setState({ status: "invalid", message: "Invalid response." });
      })
      .catch(() =>
        setState({ status: "invalid", message: "Could not reach the server." }),
      );
  }, []);

  async function confirm() {
    if (!token) return;
    setState({ status: "submitting" });
    try {
      const r = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const json = await r.json().catch(() => ({}));
      if (!r.ok) {
        setState({
          status: "error",
          message: json.error ?? "Something went wrong.",
        });
        return;
      }
      if (json.success || json.reason === "already_unsubscribed") {
        setState({ status: "success" });
        return;
      }
      setState({ status: "error", message: "Could not unsubscribe." });
    } catch {
      setState({ status: "error", message: "Network error." });
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
          Email preferences
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em]">
          Unsubscribe
        </h1>

        <div className="mt-8">
          {state.status === "loading" && (
            <p className="text-muted">Checking your link…</p>
          )}

          {state.status === "valid" && (
            <>
              <p className="text-muted">
                Click below to stop receiving emails from Slate Labs.
              </p>
              <button
                onClick={confirm}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-primary glow-primary"
              >
                Confirm unsubscribe
              </button>
            </>
          )}

          {state.status === "submitting" && (
            <p className="text-muted">Processing…</p>
          )}

          {state.status === "success" && (
            <p className="text-foreground">
              You've been unsubscribed. We won't email you again.
            </p>
          )}

          {state.status === "already" && (
            <p className="text-foreground">
              You're already unsubscribed. No further action needed.
            </p>
          )}

          {state.status === "invalid" && (
            <p className="text-muted">{state.message}</p>
          )}

          {state.status === "error" && (
            <p className="text-red-600">{state.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
