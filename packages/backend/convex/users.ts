import { query } from "./_generated/server";

export const getUsers = query({
  args: {},
  async handler(ctx) {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});
