// Calendly intro-call URL. Set VITE_CALENDLY_URL in env to override the fallback.
const FALLBACK = "https://calendly.com/slatelabs/intro";

export const CALENDLY_URL: string =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) ?? FALLBACK;
