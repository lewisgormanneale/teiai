<template>
  <div class="w-full flex justify-between overflow-y-visible max-h-screen">
    <div class="w-full mt-10" style="margin-left: -120px">
      <nuxt-img
        class="z-20 w-full"
        src="teiai-logo-b-transparent.svg"
        style="background-image: url(mountains.gif); background-size: cover"
      />
    </div>
    <div
      class="flex flex-col justify-evenly items-end gap-4 z-10 w-1/3 mr-1 sm:mr-5 transition-all"
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
    <div class="flex flex-col items-end gap-2 mr-1 sm:mr-5">
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all">ABOUT</span>
      <span class="text-2xl sm:text-4xl md:text-5xl transition-all"
        >TEIAI GROUP</span
      >
      <div class="w-96 h-px bg-white mb-6"></div>
    </div>
    <div class="w-full sm:w-2/3 lg:w-1/3 transition-all mb-5 mr-1 sm:mr-5">
      <p class="text-right mb-5">
        Teiai Group a dynamic financial consultancy dedicated to helping clients
        navigate the complexities of modern finance. Founded with a commitment
        to excellence, we offer a range of services that include financial
        advice, innovative lending solutions, and exclusive events for our
        esteemed clientele. Under the visionary leadership of President Kazutaka
        Hyōdō, Teiai has evolved into a multifaceted entity that specializes in
        various financial endeavors.
      </p>
      <p class="text-right">
        At Teiai, we value discretion and professionalism, and aim to offer
        solutions that maximize our clients' financial potential. Explore our
        website to learn more about Teiai Corporation and how we can assist you
        in achieving your financial goals. Join us in experiencing the
        dedication and excellence that define Teiai's approach to finance.
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
