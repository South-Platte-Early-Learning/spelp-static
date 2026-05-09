<template>
  <div class="max-w-7xl mx-auto px-4 mt-8">
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold mb-4 shadow-into-light">Events Calendar</h1>
        <p class="text-gray-600">Stay up to date with our events and activities</p>
      </div>

      <div class="calendar-div">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showCalendars=0&title=South%20Platte%20Early%20Learning%20Calendar&src=MDA3MWRkOWRjYzE3ZTkxY2Y1ZjYxMjAwOTg0ZWQ1OWQ0NDczOTczNzcwYmJjNGExNjA4NzNkMWU0ZjdlNDAzMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB"
          class="w-full h-full border-0 rounded-lg shadow-lg"
          scrolling="no"
        />
      </div>
    </div>
</template>

<script setup>
// Set page metadata
useHead({
  title: 'Events - SPELP',
  meta: [
    { name: 'description', content: 'View upcoming events and activities at South Platte Early Learning Programs.' }
  ]
})
</script>
