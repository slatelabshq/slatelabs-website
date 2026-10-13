import { useEffect, useState } from "react";

/** Pixel height of the visible viewport — reliable on mobile Safari where dvh/svh can leave gaps. */
export function useVisualViewportHeight(enabled: boolean) {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setHeight(null);
      return;
    }

    const read = () => {
      setHeight(window.visualViewport?.height ?? window.innerHeight);
    };

    read();
    window.addEventListener("resize", read);
    window.addEventListener("orientationchange", read);
    const vv = window.visualViewport;
    vv?.addEventListener("resize", read);
    vv?.addEventListener("scroll", read);

    return () => {
      window.removeEventListener("resize", read);
      window.removeEventListener("orientationchange", read);
      vv?.removeEventListener("resize", read);
      vv?.removeEventListener("scroll", read);
    };
  }, [enabled]);

  return height;
}
