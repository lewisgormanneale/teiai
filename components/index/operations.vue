<template>
  <div class="flex flex-col items-end gap-2">
    <div class="flex flex-col items-end mx-4 sm:mx-8">
      <SectionTitle title="OPERATIONS" />
    </div>
    <div
      class="flex flex-col sm:flex-row transition-all w-screen z-30 bg-black"
      style="height: 800px"
    >
      <div class="flex flex-wrap w-full sm:w-1/3 h-full">
        <NuxtLink
          to="error"
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
              Providing the best financial advice for our clients
            </span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="error"
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
              Building a future for our most esteemed clients
            </span>
          </div>
        </NuxtLink>
      </div>
      <div class="flex flex-wrap w-full sm:w-1/3 h-full">
        <NuxtLink
          to="error"
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
              Fair and equitable solutions for all
            </span>
          </div>
        </NuxtLink>
      </div>
      <div class="flex flex-wrap w-full sm:w-1/3 h-full">
        <NuxtLink
          to="error"
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
              Creating memories that last a lifetime
            </span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="error"
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
              State-of-the-art facilities containing unparelleled experiences
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
