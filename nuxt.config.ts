export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      title: "Test application",
      meta: [{ name: "description", content: "A Nuxt 3 Test Application" }],
    },
  },

  runtimeConfig: {
    compilerOptions: {
      strict: true,
    },
  },

  ssr: true,
  css: ["~/assets/styles/general.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
          additionalData: `
          @use "~/assets/styles/_variables.scss" as *;
          @use "~/assets/styles/_mixins.scss" as *;
          @use "~/assets/styles/_reset.scss" as *;
        `,
        },
      },
    },
  },
});
