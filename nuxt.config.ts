export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: "en",
      },
      link: [],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Teiai Group - a dynamic financial consultancy dedicated to helping clients navigate the complexities of modern finance. Find out more information here.",
        },
      ],
      title: "Teiai Group",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  image: {
    dir: "assets/images",
    inject: true,
  },
  googleFonts: {
    families: {
      "Libre Baskerville": true,
      Montserrat: true,
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image",
  ],
});
