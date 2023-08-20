<template>
  <div class="w-full flex justify-between overflow-y-visible max-h-screen">
    <div class="w-full mt-10" style="margin-left: -120px">
      <nuxt-img
        class="z-20"
        src="teiai-logo-b-transparent.svg"
        style="background-image: url(sea.gif); background-size: cover"
      />
    </div>
    <div
      class="flex flex-col justify-evenly items-end gap-2 z-10 w-1/3 h-96 transition-all"
    >
      <div class="flex flex-col justify-center items-end gap-2 w-full pr-4">
        <span
          class="text-2xl sm:text-4xl md:text-5xl transition-all fade-in"
          style="animation-delay: 0.5s"
          >SECURING</span
        >
        <span
          class="text-2xl sm:text-4xl md:text-5xl transition-all fade-in"
          style="animation-delay: 1s"
          >YOUR</span
        >
        <span
          class="text-2xl sm:text-4xl md:text-5xl transition-all fade-in text-yellow-500"
          style="animation-delay: 1.5s"
          >FUTURE</span
        >
      </div>
      <div class="mr-8 fade-in" style="animation-delay: 2.5s">
        <Icon name="ph:arrow-down-bold" color="white" font-size="32px" />
      </div>
    </div>
  </div>
  <div class="w-full flex flex-col items-end z-10">
    <div class="flex flex-col items-end gap-2">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all">ABOUT</span>
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >TEIAI GROUP</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
    </div>
    <div class="w-full md:w-1/3 transition-all">
      <p class="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim
        atque consectetur similique explicabo ea ullam amet unde voluptatibus
        cumque quas voluptatem vitae totam odio aliquid, sequi, corporis soluta
        reprehenderit!
      </p>
      <p class="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim
        atque consectetur similique explicabo ea ullam amet unde voluptatibus
        cumque quas voluptatem vitae totam odio aliquid, sequi, corporis soluta
        reprehenderit!
      </p>
    </div>

    <div class="flex flex-col items-end gap-2">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >SOLUTIONS</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
      <nuxt-img src="restricted-rps.jpeg" format="webp"></nuxt-img>
    </div>

    <div class="flex flex-col items-end gap-2">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >WHO WE ARE</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
      <nuxt-img src="teiai-banner.jpg" format="webp"></nuxt-img>
    </div>
    <div class="flex flex-col items-end gap-2">
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
  animation: fadeIn 0.5s ease-in-out forwards;
  animation-delay: 0.5s;
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
