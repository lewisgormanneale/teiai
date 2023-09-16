<script setup>
import teiaiLogoW from "~/assets/images/teiai-logo-w.svg";
</script>
<template>
  <div class="flex flex-col w-screen items-center">
    <NuxtLink class="flex gap-2" href="/">
      <img :src="teiaiLogoW" width="30" height="30" alt="teiai logo" />
      <h1 class="text-2xl text-center py-2 font-bold font-serif">
        TEIAI GROUP
      </h1>
    </NuxtLink>
    <div class="w-64 h-px bg-white mb-2"></div>
  </div>
</template>
