<script setup lang="ts">
defineProps<{
  title: string;
  imageSrc: any;
  imageAlt: string;
  href: string;
  buttonText: string;
  description: string;
}>();
</script>

<template>
  <article
    class="flex flex-col shadow rounded-lg overflow-hidden bg-black"
    style="max-width: 400px"
  >
    <div class="mb-4">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        width="400"
        height="300"
        loading="lazy"
      />
    </div>
    <h1 class="font-bold text-xl mb-2 px-4">
      {{ title }}
    </h1>
    <p class="pb-8 px-4 truncate text-wrap text-gray-400">
      {{ description }}
    </p>
    <div class="px-4 mt-auto mb-4">
      <Button :href="href" :text="buttonText" />
    </div>
  </article>
</template>
