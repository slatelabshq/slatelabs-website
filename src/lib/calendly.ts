// Calendly intro-call URL. Replace fallback once Slate Labs's real
// Calendly link is provisioned; set VITE_CALENDLY_URL in env to override.
const FALLBACK = "https://calendly.com/slatelabs/intro";

export const CALENDLY_URL =
  (typeof import.meta !== "undefined" && (import.meta as { env?: Record<string, string> }).env?.VITE_CALENDLY_URL) ||
  FALLBACK;
