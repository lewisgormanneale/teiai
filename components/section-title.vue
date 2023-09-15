<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <span class="text-2xl sm:text-4xl md:text-5xl transition-all">{{
    title
  }}</span>
  <div class="w-96 h-px bg-white mb-6"></div>
</template>
