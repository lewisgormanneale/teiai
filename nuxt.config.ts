export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Libre Baskerville": true,
    },
  },
});
