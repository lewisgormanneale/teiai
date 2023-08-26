<script setup lang="ts">
defineProps<{
  href: string;
  text: string;
}>();
</script>

<template>
  <NuxtLink
    :to="href"
    class="bg-yellow-500 text-black py-2 px-4 hover:bg-yellow-600 transition-all mr-2"
  >
    {{ text }}
  </NuxtLink>
</template>
