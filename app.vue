<template>
  <div>
    <!-- Global Navigation -->
    <nav class="sticky top-0 z-50 bg-white shadow-lg drop-shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex flex-wrap items-center justify-between gap-3 py-3">
          <NuxtLink to="/" class="flex min-w-0 items-center gap-2 sm:gap-3" @click="scrollToTop">
            <img :src="logoImage" alt="South Platte Early Learning Programs" class="h-9 w-auto sm:h-10" />
            <h3 class="truncate text-sm font-semibold leading-tight text-gray-800 sm:text-base md:text-lg">South Platte Early Learning Programs</h3>
          </NuxtLink>
          <div class="flex flex-shrink-0 items-center gap-4 sm:gap-6">
            <NuxtLink to="/" class="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 sm:text-base" activeClass="text-blue-600 border-b-2 border-blue-600">Home</NuxtLink>
            <NuxtLink to="/events" class="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 sm:text-base" activeClass="text-blue-600 border-b-2 border-blue-600">Events</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
const logoImage = '/images/logo.png'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Global head configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
