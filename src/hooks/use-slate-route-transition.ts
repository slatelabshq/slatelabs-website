import { useRouter } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef } from "react";
import {
  isInternalNavAnchor,
  pathFromAnchor,
  slateCurtainDown,
  slateCurtainUp,
} from "@/lib/slate-page-transition";

/**
 * Page curtain on internal navigation — same cyan / deep-teal veils as the static site,
 * but wired to TanStack Router instead of a full document reload.
 */
export function useSlateRouteTransition() {
  const router = useRouter();
  const navigating = useRef(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!isInternalNavAnchor(anchor)) return;

      e.preventDefault();
      e.stopPropagation();

      if (navigating.current) return;
      navigating.current = true;

      const to = pathFromAnchor(anchor);

      void (async () => {
        try {
          await slateCurtainDown();
          await router.navigate({ to });
        } finally {
          navigating.current = false;
        }
      })();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useLayoutEffect(() => {
    return router.subscribe("onResolved", () => {
      void slateCurtainUp();
    });
  }, [router]);
}
