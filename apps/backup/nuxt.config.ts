// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  colorMode: {
    classSuffix: ''
  }
})
