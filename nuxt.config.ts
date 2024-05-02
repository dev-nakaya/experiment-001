// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  srcDir: 'src/',
  runtimeConfig: {
    apiUrl: '',
    apiKey: '',
  },
})
