<script setup>
import blacksuitsManga from "~/assets/images/team/blacksuits-manga.webp";
import hyodoResting from "~/assets/images/team/hyodo-resting.webp";
</script>
<template>
  <div class="fle x flex-col items-end gap-2 mb-5 py-10 w-full">
    <div class="flex flex-col items-end mx-4 sm:mx-8">
      <SectionTitle title="OUR TEAM" />
    </div>
    <div
      class="flex gap-6 flex-wrap items-center justify-end p-5 bg-zinc-900 w-full"
      :style="{ backgroundImage: `url(${blacksuitsManga})` }"
      style="
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
      "
    >
      <Article
        title="CAREERS"
        description="Join Teiai Group today!"
        href="/error"
        button-text="Learn More"
        image-src="team/hyodo-resting.webp"
        image-alt="Hyodo Resting"
      />
      <Article
        title="LEADERSHIP"
        description="Board Members and Executives"
        href="/error"
        button-text="Learn More"
        image-src="team/peace-signs.webp"
        image-alt="Peace Signs"
      />
    </div>
  </div>
</template>
