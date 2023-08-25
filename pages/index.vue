<template>
  <div class="w-full flex justify-between overflow-y-visible max-h-screen">
    <div class="w-2/3 mt-10" style="margin-left: -120px">
      <video
        autoplay
        loop
        muted
        playsinline
        class="w-full object-initial"
        style="
          mask-image: url(teiai-logo-w.svg);
          mask-repeat: no-repeat;
          mask-size: cover;
          -webkit-mask-image: url(teiai-logo-w.svg);
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: cover;
        "
      >
        <source src="gold.webm" type="video/webm" />
        <source src="gold.mp4" type="video/mp4" />
      </video>
    </div>
    <div
      class="flex flex-col justify-evenly items-end gap-4 z-10 w-1/3 px-2 sm:pr-5 transition-all"
    >
      <div class="flex flex-col justify-center items-end gap-2 w-full pr-4">
        <span
          class="text-2xl sm:text-4xl md:text-5xl transition-all fade-in"
          style="animation-delay: 0.8s"
          >SECURING</span
        >
        <span
          class="text-2xl sm:text-4xl md:text-5xl transition-all fade-in"
          style="animation-delay: 1.6s"
          >YOUR</span
        >
        <span
          class="text-2xl sm:text-4xl md:text-5xl transition-all fade-in text-yellow-500"
          style="animation-delay: 2.4s"
          >FUTURE</span
        >
      </div>
      <div class="mr-8 fade-in" style="animation-delay: 4s">
        <Icon name="ph:arrow-down-bold" color="white" font-size="32px" />
      </div>
    </div>
  </div>
  <div class="w-full flex flex-col items-end z-10 px-2 sm:pr-5">
    <div class="flex flex-col items-end gap-2 px-2">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all">ABOUT</span>
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >TEIAI GROUP</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
    </div>
    <div class="w-full sm:w-2/3 lg:w-1/3 transition-all mb-5">
      <p class="text-right mb-5">
        Teiai Group - a dynamic financial consultancy dedicated to helping
        clients navigate the complexities of modern finance. Under the visionary
        leadership of President Kazutaka Hyōdō, Teiai Group has evolved to offer
        a range of services that include financial advice, innovative lending
        solutions, and exclusive events for our esteemed clientele.
      </p>
      <p class="text-right">
        At Teiai, we value discretion and professionalism, and aim to offer
        solutions that maximize our clients' financial potential. Join us in
        experiencing the dedication and excellence that define Teiai's approach
        to finance.
      </p>
    </div>

    <div class="flex flex-col items-end gap-2 mb-5">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >SOLUTIONS</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
      <div class="flex w-full">
        <nuxt-img src="restricted-rps.jpeg" format="webp"></nuxt-img>
        <nuxt-img src="restricted-rps.jpeg" format="webp"></nuxt-img>
        <nuxt-img src="restricted-rps.jpeg" format="webp"></nuxt-img>
      </div>
    </div>

    <div class="flex flex-col items-end gap-2 mb-5">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >WHO WE ARE</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
      <nuxt-img src="teiai-banner.jpg" format="webp"></nuxt-img>
    </div>
    <div class="flex flex-col items-end gap-2 mb-5">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >NEWSROOM</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
      <nuxt-img src="wanted-poster.webp" format="webp"></nuxt-img>
    </div>
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-in-out forwards;
  animation-delay: 0.8s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
