<template>
  <div class="flex flex-col items-end gap-2 pt-10 w-full">
    <div class="flex flex-col items-end mx-4 sm:mx-8">
      <SectionTitle title="NEWS" />
    </div>
    <div
      class="flex gap-6 flex-wrap items-center justify-end p-5 bg-zinc-900 w-full"
      style="
        background-image: url('images/news/teiai-building.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
      "
    >
      <Article
        title="MANHUNT ONGOING"
        description="Teiai Group is currently seeking the whereabouts of the following individuals"
        href="/careers"
        button-text="Learn More"
        image-src="news/wanted-poster.webp"
        image-alt="Wanted Poster"
      />
    </div>
  </div>
</template>
