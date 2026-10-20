import { Outlet } from "@tanstack/react-router";
import { useSlatePageMotion } from "@/hooks/use-slate-page-motion";
import { useSlateRouteTransition } from "@/hooks/use-slate-route-transition";

/** Runs slate reveal/ktype after the active route (and lazy chunk) has mounted. */
export function SlateMotionOutlet() {
  useSlateRouteTransition();
  useSlatePageMotion();
  return <Outlet />;
}
