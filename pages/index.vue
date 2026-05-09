<template>
  <div>
    <header class="hero-wrap" :style="{ backgroundImage: `url(${heroBackground})` }">
      <div class="hero-overlay">
        <div class="hero-content">
          <img class="hero-logo" :src="heroLogo" alt="South Platte Early Learning Programs logo" />
          <h1 class="hero-title">South Platte Early Learning Programs</h1>
          <p class="hero-subtitle">
            Building strong beginnings with loving care, hands-on learning, and a joyful place to grow.
          </p>
          <div class="mt-6">
            <a href="#contact" class="inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-md">Contact Us</a>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 pb-12">
      <div id="about" class="flex flex-col lg:flex-row gap-8 items-center mt-8 relative z-10">
        <div class="about-box flex-1">
          <div class="about-text-box">
            <p class="text-box">
              South Platte Early Learning Programs provide preschool and childcare services to children in Deuel county, Keith county and the surrounding area. Our programs strive to meet the developmental needs of each child through a hands-on learning environment. Our philosophy is that together we can help children grow by building a strong beginning foundation through the opportunity to experience a safe and loving environment while shaping a child's self-confidence and self-awareness to spark a love for learning and exploring. Our curriculum focuses on play based learning and growing in an enriched academic environment.
            </p>
          </div>
        </div>

        <div class="photos-div flex-1">
          <iframe
            class="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/OkU6g3APbAo?si=j8BJbh8HuGh4bdUt"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>

      <section id="teachers" class="mt-16">
        <AboutTile
          :info="teachersData"
          header="Meet Our Teachers"
        />
      </section>

      <section id="services" class="mt-16">
        <AboutTile
          :info="centersData"
          header="Our Services"
        />
      </section>

      <section id="contact" class="mt-16 mb-8">
        <div class="max-w-2xl mx-auto">
          <div class="inline-block bg-slate-800 text-white px-5 py-2 rounded-t-xl font-semibold tracking-wide">
            Contact Information
          </div>
          <div class="bg-white border border-slate-200 shadow-lg rounded-b-xl rounded-tr-xl p-6">
            <h2 class="text-2xl font-bold text-slate-900 mb-3">Get in Touch</h2>
            <p class="text-slate-600 mb-6">Questions about enrollment, programs, or availability? Reach out and we will be happy to help.</p>

            <div class="space-y-3 text-slate-800">
              <p><span class="font-semibold">Email:</span> <a href="mailto:jblochowitz@spearlylearning.org" class="text-blue-600 hover:text-blue-800 underline">jblochowitz@spearlylearning.org</a></p>
              <p><span class="font-semibold">Facebook:</span> <a href="https://www.facebook.com/people/South-Platte-Early-Learning/100090305586914/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">South Platte Early Learning Programs</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const heroBackground = '/images/hands_lg.jpg'
const heroLogo = '/images/logo.png'
const blochowitzPhoto = '/images/teachers/blochowitz.png'
const marquezPhoto = '/images/teachers/marquez.png'
const preschoolPhoto = '/images/centers/preschool.png'
const daycarePhoto = '/images/centers/daycare.png'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, '')
const canonicalUrl = `${siteUrl}${route.path === '/' ? '' : route.path}`

const teachersData = [
  {
    header: 'Jennifer Blochowitz',
    body: [
      'My name is Jennifer Blochowitz. I am the CEO/Senior Director of South Platte Early Learning Programs. My heart has always been focused on children and I am grateful that I get to continue my passion on this journey with these programs. I have strong family ties to the area; I was raised in Chappell, Nebraska and am a graduate from Chappell High School. I completed my Associated degree in Early Childhood through WNCC. I am a wife to my wonderful husband Kyle of 30 years. We are the parents of three wonderful children, Noah and wife Payton, Gavin and Aleah. When I am not focusing my time at school I enjoy attending all of the many activities our children are involved in as well as camping, crafting, reading and doing puzzles with my daughter.',
      'In 2007 I started this journey with these local programs under Volunteers of America-Western Nebraska by assisting in opening and becoming the director of the preschool in Chappell. In 2012 we expanded our services in to Big Springs and opened South Platte Preschool. For two years I split my time between both communities until we transitioned South Platte Preschool into a full day program. In 2019 I was promoted to Senior Director over the six early childhood programs that operated in the area under VOA-WN.',
      'I am feeling very privileged to now be the CEO of our locally operated non-profit; to be able to continue on with my love and passion for early childhood by focusing on the children of our local communities.'
    ],
    image_url: blochowitzPhoto
  },
  {
    header: 'Kelsey Marquez',
    body: [
      "My name is Kelsey Marquez. I am the Assistant CEO/Director of South Platte Early Learning Programs. My teaching career began here in 2012. In 2014, I graduated from Fort Hays State University with a Bachelor's Degree in Early Childhood Education. As a South Platte alumna, being able to provide this opportunity to the community that helped shaped me, is very important to me.",
      'In 2012, I married my husband, Matt Marquez, also from Big Springs. We have two children; Landon and Kenleigh, and 3 dogs. In my free time, I love spending time with my family, being outdoors, reading, and traveling.',
      "I'm excited for the opportunity to continue working with the youth of our communities. They say this profession isn't for everyone, but I'm so glad it's the one for me. The little giggles will never get old; and I'm so grateful for the many tiny hands that have left a print on my heart"
    ],
    image_url: marquezPhoto
  }
]

const centersData = [
  {
    header: 'Preschool',
    body: [
      'Our preschool program is located in the South Platte Elementary school with Jennifer Blochowitz and Kelsey Marquez as our teachers. The duo have been at it since our preschool program originated in 2012.',
      'Our program operates from September to May with half day or full day options for families. At South Platte Preschool we strive to provide a hands-on learning environment that builds on all domains of the child to include pre-language and literacy skills, early math and science awareness, social-emotional development and the freedom to explore creativity.',
      'We use a combination of teacher created curriculum that highlights important aspects of two different early childhood curriculums, Learning without Tears-Get Set for School and Zoophonics.'
    ],
    image_url: preschoolPhoto
  },
  {
    header: 'Childcare',
    body: [
      'Our childcare program is located in the United Methodist Church of Big Springs. We are thankful to the generosity of this local church community to allow our program to operate within their building; it provides a wonderful space for children to grow.',
      'South Platte Childcare operates year round providing a safe and loving environment for children as young as 6 weeks old through 13 years. Leslie Eskew is our primary care provider there and is assisted as needed by Sheryl Marquez.',
      "A day at our childcare consists of plenty of love and laughter while engaging in crafts, exploration, outdoor time (to include many walks around the neighborhood) and don't forget the ever important breakfast, lunch, snacks and naps!!"
    ],
    image_url: daycarePhoto
  }
]

useSeoMeta({
  title: 'SPELP - Home',
  description: 'South Platte Early Learning Programs provide preschool and childcare services to children in Deuel County, Keith County, and the surrounding area.',
  ogTitle: 'South Platte Early Learning Programs',
  ogDescription: 'Preschool and childcare services in Deuel County, Keith County, and surrounding communities.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ]
})
</script>
