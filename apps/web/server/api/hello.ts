import { api } from "@workspace/backend";

import convexServerClient from "../lib/convex";

export default defineEventHandler(async (event) => {
  const users = (await convexServerClient.query(api.users.getUsers)) ?? [];

  return {
    users,
  };
});
