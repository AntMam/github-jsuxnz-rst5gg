// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
  },
});
