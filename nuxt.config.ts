export default defineNuxtConfig({
  // Compatibility date
  compatibilityDate: '2026-03-02',

  // Static site generation
  ssr: true,

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://spearlylearning.org'
    }
  },

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
        { name: 'description', content: 'South Platte Early Learning Programs provide preschool and childcare services in Deuel County, Keith County, and surrounding communities.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Development server
  devtools: { enabled: false }
})
