import { createFileRoute } from "@tanstack/react-router";

type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS"
  | "HEAD";

export type ApiRouteHandlerContext = {
  request: Request;
};

type ApiRouteHandlers = Partial<
  Record<HttpMethod, (ctx: ApiRouteHandlerContext) => Response | Promise<Response>>
>;

/**
 * TanStack Start file routes with `server.handlers` — supported at runtime;
 * not yet reflected on `createFileRoute` option types.
 */
export function createApiRoute(path: string) {
  return (handlers: ApiRouteHandlers) =>
    createFileRoute(path as never)({
      server: { handlers },
    } as never);
}
