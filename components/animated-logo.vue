<script setup>
import goldWebm from "~/assets/videos/gold.webm";
import goldMp4 from "~/assets/videos/gold.mp4";
import teiaiLogoW from "~/assets/images/teiai-logo-w.svg";
</script>
<template>
  <video
    autoplay
    loop
    muted
    playsinline
    class="w-full object-initial transition-all fade-in"
    :style="{ maskImage: `url(${teiaiLogoW})` }"
    style="
      mask-repeat: no-repeat;
      mask-size: cover;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: cover;
    "
  >
    <source :src="goldWebm" type="video/webm" />
    <source :src="goldMp4" type="video/mp4" />
  </video>
</template>
