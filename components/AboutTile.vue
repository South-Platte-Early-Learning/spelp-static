<template>
  <div class="about-div">
    <div class="box">
      <h1 class="header">{{ header }}</h1>
    </div>

    <div
      v-for="(boxInfo, index) in info"
      class="box box-row"
      :key="index"
      :style="{
        marginRight: index % 2 === 0 ? 'auto' : 'unset',
        marginLeft: index % 2 !== 0 ? 'auto' : 'unset',
      }"
    >
      <h2 class="text-2xl font-bold mb-4 text-center">{{ boxInfo.header }}</h2>
      <div class="box-text-box">
        <img
          v-if="boxInfo.image_url"
          :src="boxInfo.image_url"
          :alt="boxInfo.header"
          class="box-img"
          :style="{
            float: index % 2 === 0 ? 'left' : 'right',
          }"
        />
        <p
          v-for="(body, bodyIndex) in boxInfo.body"
          :key="`${index}-${bodyIndex}`"
          class="mb-4 text-justify"
        >
          {{ body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HomeText {
  header: string
  body: string[]
  image_url?: string
}

interface Props {
  header: string
  info: HomeText[]
}

defineProps<Props>()
</script>
