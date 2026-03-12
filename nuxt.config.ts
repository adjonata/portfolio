// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@formkit/auto-animate",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
  ],
  shadcn: {
    prefix: "S",
    componentDir: "./components/shadcn/ui",
  },
  googleFonts: {
    families: {
      "Open Sans": true,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://alexdjonata.work/favicon.png",
        },
      ],
    },
  },
  site: {
    url: "https://alexdjonata.work",
    name: "Portfólio - Alex Djonata",
  },
});
