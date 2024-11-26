<script setup>
import teiaiLogoW from "~/assets/images/teiai-logo-w.svg";
</script>
<template>
  <footer
    class="flex flex-col justify-center items-center gap-4 py-8 bg-zinc-900"
  >
    <img :src="teiaiLogoW" width="50" height="50" alt="teiai logo" />
    <div class="flex gap-10">
      <NuxtLink href="/error">About</NuxtLink>
      <NuxtLink href="/error">Operations</NuxtLink>
      <NuxtLink href="/error">Team</NuxtLink>
      <NuxtLink href="/error">Newsroom</NuxtLink>
    </div>
  </footer>
</template>
