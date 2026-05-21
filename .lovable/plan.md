Root cause: `/work/44db` is registered as a child route of `/work`, but `src/routes/work.tsx` renders the portfolio listing without an `<Outlet />`, so the matched 44DB child route has nowhere to appear.

Plan:
1. Update `src/routes/work.tsx` to import `Outlet` and `useLocation` from `@tanstack/react-router`.
2. In the `Work` component, detect whether the current path is exactly `/work`.
3. If the path is not exactly `/work`, render only `<Outlet />` so `/work/44db` and other nested case-study pages show their own page content instead of the portfolio grid.
4. Keep the existing `/work` portfolio listing, filters, hover cyan glow, and links unchanged.
5. Do not edit `src/routeTree.gen.ts`; it is already generated correctly and will remain managed by TanStack Router.