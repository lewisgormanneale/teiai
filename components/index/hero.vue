<template>
  <div class="w-full flex justify-between overflow-y-visible max-h-screen">
    <div class="w-2/3 mt-10" style="margin-left: -120px">
      <LazyAnimatedLogo />
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
</template>
