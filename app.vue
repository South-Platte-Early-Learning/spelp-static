<template>
  <div>
    <!-- Global Navigation -->
    <nav class="sticky top-0 z-50 bg-white shadow-lg drop-shadow-md">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center py-3">
          <NuxtLink to="/" class="flex items-center gap-3 flex-shrink-0" @click="scrollToTop">
            <img :src="logoImage" alt="South Platte Early Learning Programs" class="h-10 w-auto" />
            <h3 class="text-lg font-semibold text-gray-800">South Platte Early Learning Programs</h3>
          </NuxtLink>
          <div class="flex space-x-6">
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-600 transition-colors font-medium" activeClass="text-blue-600 border-b-2 border-blue-600">Home</NuxtLink>
            <NuxtLink to="/events" class="text-gray-700 hover:text-blue-600 transition-colors font-medium" activeClass="text-blue-600 border-b-2 border-blue-600">Events</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
import logoImage from '~/assets/logo/logo.png'

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
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'South Platte Early Learning Programs - Quality preschool and childcare services.' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ]
})
</script>
