export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Libre Baskerville": true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image",
  ],
});
