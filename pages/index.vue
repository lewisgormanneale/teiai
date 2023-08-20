<template>
  <div class="w-full flex justify-between h-screen overflow-y-visible">
    <div class="w-full mt-10" style="margin-left: -120px">
      <img
        class="bg-white z-20"
        src="~/assets/images/teiai-logo-b-transparent.svg"
      />
    </div>
    <div
      class="flex flex-col justify-evenly items-end gap-2 z-10 w-1/3 h-96 lg:h-full transition-all"
    >
      <div class="flex flex-col justify-center items-end gap-2 w-full pr-8">
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
  <div class="w-full flex justify-between h-screen z-10"></div>
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
