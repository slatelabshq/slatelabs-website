import { useState } from "react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setErrorMsg(null);
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      projectType: String(fd.get("projectType") ?? "").trim(),
      budget: String(fd.get("budget") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        trackEvent("contact_submit", {
          project_type: payload.projectType,
          budget: payload.budget,
        });
        toast.success("Message sent — we'll be in touch within 24 hours.");
        setStatus("success");
        e.currentTarget.reset();
        return;
      }

      const data = await res.json().catch(() => ({}));
      const msg =
        (data && typeof data.error === "string" && data.error) ||
        "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
      toast.error(msg);
    } catch {
      const msg = "Network error. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
      toast.error(msg);
    }
  }

  if (status === "success") {
    return (
      <div className="prose">
        <p className="lead">Thanks — we got your message and will reply within 24 hours.</p>
        <p>
          Need something sooner? Email{" "}
          <a href="mailto:hello@slatelabshq.com">hello@slatelabshq.com</a> or message us on{" "}
          <a
            href="https://wa.me/2347026036554?text=Hi%20Slate%20Labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field field--hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="company">Company / Organization</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="projectType">Project type</label>
          <select id="projectType" name="projectType" defaultValue="">
            <option value="">Select…</option>
            <option value="brand-foundations">Brand Foundations</option>
            <option value="digital-platforms">Digital Platforms</option>
            <option value="intelligent-systems">Intelligent Systems</option>
            <option value="ile-eko">Ile Eko</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="budget">Budget range</label>
        <select id="budget" name="budget" defaultValue="">
          <option value="">Select…</option>
          <option value="under-500k">Under ₦500k</option>
          <option value="500k-1m">₦500k–₦1M</option>
          <option value="1m-3m">₦1M–₦3M</option>
          <option value="3m-plus">₦3M+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <p className="field__hint">
          A paragraph is plenty. What you&apos;re building, and what&apos;s getting in the way.
        </p>
      </div>

      <div className="cta-row">
        <button
          className="btn btn--primary"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}{" "}
          <span className="btn__go" aria-hidden="true">→</span>
        </button>
      </div>

      {errorMsg ? (
        <p className="field__hint" role="alert">{errorMsg}</p>
      ) : null}
    </form>
  );
}
