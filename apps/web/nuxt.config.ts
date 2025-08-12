// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@clerk/nuxt",
  ],

  clerk: {
    skipServerMiddleware: true,
  },

  runtimeConfig: {
    public: {
      convexUrl: process.env.CONVEX_URL,
    },
  },
});
