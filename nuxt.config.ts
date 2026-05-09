export default defineNuxtConfig({
  // Compatibility date
  compatibilityDate: '2026-03-02',

  // Static site generation
  ssr: true,

  // Modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // CSS
  css: ['~/assets/css/main.css'],

  // TypeScript configuration - disable checking for now
  typescript: {
    typeCheck: false
  },

  // App configuration
  app: {
    head: {
      title: 'SPELP - Special Education Learning Program',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Special Education Learning Program providing quality education services.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  },

  // Development server
  devtools: { enabled: false }
})
