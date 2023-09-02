<template>
  <div class="flex flex-col items-end gap-2 mb-5">
    <div class="flex flex-col items-end mx-4 sm:mx-8">
      <SectionTitle title="OPERATIONS" />
    </div>
    <div
      class="flex flex-col sm:flex-row transition-all w-screen z-30 bg-black"
      style="height: 600px"
    >
      <div class="flex flex-wrap w-full sm:w-1/3 h-full">
        <NuxtLink
          to="about"
          class="group flex flex-col items-center justify-center transition-all w-full h-1/2 text-center overflow-hidden relative"
          style="
            background-image: url('images/operations/building.webp');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div
            class="flex flex-col w-full h-full items-center justify-center hover:backdrop-blur-md transition-all"
          >
            <h2 class="text-2xl font-bold">FINANCIAL CONSULTANCY</h2>
            <span class="text-sm hidden group-hover:block group-hover:fade-in">
              Debt solutions text that goes on for a little while
            </span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="about"
          class="group flex flex-col items-center justify-center transition-all w-full h-1/2 text-center overflow-hidden relative"
          style="
            background-image: url('images/operations/underground-mine.webp');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div
            class="flex flex-col w-full h-full items-center justify-center hover:backdrop-blur-md transition-all"
          >
            <h2 class="text-2xl font-bold">MINING & CONSTRUCTION</h2>
            <span class="text-sm hidden group-hover:block group-hover:fade-in">
              Debt solutions text that goes on for a little while
            </span>
          </div>
        </NuxtLink>
      </div>
      <div class="flex flex-wrap w-full sm:w-1/3 h-full">
        <NuxtLink
          to="about"
          class="group flex flex-col items-center justify-center transition-all w-full h-full text-center overflow-hidden relative"
          style="
            background-image: url('images/operations/yen.webp');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div
            class="flex flex-col w-full h-full items-center justify-center hover:backdrop-blur-md transition-all"
          >
            <h2 class="text-2xl font-bold">DEBT RELIEF SOLUTIONS</h2>
            <span class="text-sm hidden group-hover:block group-hover:fade-in">
              Debt solutions text that goes on for a little while
            </span>
          </div>
        </NuxtLink>
      </div>
      <div class="flex flex-wrap w-full sm:w-1/3 h-full">
        <NuxtLink
          to="about"
          class="group flex flex-col items-center justify-center transition-all w-full h-1/2 text-center overflow-hidden relative"
          style="
            background-image: url('images/operations/cruise-ship.webp');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div
            class="flex flex-col w-full h-full items-center justify-center hover:backdrop-blur-md transition-all"
          >
            <h2 class="text-2xl font-bold">EVENTS</h2>
            <span class="text-sm hidden group-hover:block group-hover:fade-in">
              Debt solutions text that goes on for a little while
            </span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="about"
          class="group flex flex-col items-center justify-center transition-all w-full h-1/2 text-center overflow-hidden relative"
          style="
            background-image: url('images/operations/pachinko.webp');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div
            class="flex flex-col w-full h-full items-center justify-center hover:backdrop-blur-md transition-all"
          >
            <h2 class="text-2xl font-bold">CASINOS</h2>
            <span class="text-sm hidden group-hover:block group-hover:fade-in">
              Debt solutions text that goes on for a little while
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
