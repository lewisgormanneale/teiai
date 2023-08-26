<template>
  <video
    autoplay
    loop
    muted
    playsinline
    class="w-full object-initial transition-all fade-in"
    style="
      mask-image: url(teiai-logo-w.svg);
      mask-repeat: no-repeat;
      mask-size: cover;
      -webkit-mask-image: url(teiai-logo-w.svg);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: cover;
    "
  >
    <source src="gold2.webm" type="video/webm" />
    <source src="gold.mp4" type="video/mp4" />
  </video>
</template>
