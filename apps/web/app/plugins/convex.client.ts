import { ConvexClient } from "convex/browser";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  if (!config.public.convexUrl) {
    throw new Error("CONVEX_URL environment variable is not set");
  }

  const convex = new ConvexClient(config.public.convexUrl);

  return {
    provide: {
      convex,
    },
  };
});
