// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { shortenerRouter } from "./shortener";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("shortener.", shortenerRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
