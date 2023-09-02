<template>
  <video
    autoplay
    loop
    muted
    playsinline
    class="w-full object-initial transition-all fade-in"
    style="
      mask-image: url(images/teiai-logo-w.svg);
      mask-repeat: no-repeat;
      mask-size: cover;
      -webkit-mask-image: url(images/teiai-logo-w.svg);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: cover;
    "
  >
    <source src="videos/gold.webm" type="video/webm" />
    <source src="videos/gold.mp4" type="video/mp4" />
  </video>
</template>
