<script lang="ts" setup>
import {Card, CardContent} from '@/components/ui/card';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import wantedPoster from "~/assets/images/news/wanted-poster.webp";

const plugin = Autoplay({
  delay: 3500,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

const newsItems = [
  {
    title: 'MANHUNT ONGOING',
    description: 'Teiai Group is currently seeking the whereabouts of the following individuals',
    buttonText: 'Learn More',
    imageSrc: wantedPoster,
    imageAlt: 'A wanted poster',
  },
  {
    title: 'MANHUNT ONGOING',
    description: 'Teiai Group is currently seeking the whereabouts of the following individuals',
    buttonText: 'Learn More',
    imageSrc: wantedPoster,
    imageAlt: 'A wanted poster',
  },
  {
    title: 'MANHUNT ONGOING',
    description: 'Teiai Group is currently seeking the whereabouts of the following individuals',
    buttonText: 'Learn More',
    imageSrc: wantedPoster,
    imageAlt: 'A wanted poster',
  },
  {
    title: 'MANHUNT ONGOING',
    description: 'Teiai Group is currently seeking the whereabouts of the following individuals',
    buttonText: 'Learn More',
    imageSrc: wantedPoster,
    imageAlt: 'A wanted poster',
  },
  {
    title: 'MANHUNT ONGOING',
    description: 'Teiai Group is currently seeking the whereabouts of the following individuals',
    buttonText: 'Learn More',
    imageSrc: wantedPoster,
    imageAlt: 'A wanted poster',
  },
];
</script>

<template>
  <div class="flex flex-col items-end gap-2 m-12 w-full">
    <div class="flex flex-col items-end mx-4 sm:mx-8">
      <SectionTitle title="NEWS"/>
    </div>
    <Carousel
        :plugins="[plugin]"
        class="relative w-full max-w-screen-xl mr-8"
        @mouseenter="plugin.stop"
        @mouseleave="() => { plugin.reset(); plugin.play();}"
    >
      <CarouselContent>
        <CarouselItem v-for="(newsItem, index) in newsItems" :key="index" class="md:basis-1/2 lg:basis-1/3">
          <div class="p-1">
            <Card>
              <CardContent class="flex flex-col aspect-square items-center justify-center p-6">
                <div class="mb-4">
                  <img
                      :alt="newsItem.imageAlt"
                      :src="newsItem.imageSrc"
                      height="300"
                      loading="lazy"
                      width="400"
                  />
                </div>
                <h1 class="font-semibold text-xl">
                  {{ newsItem.title }}
                </h1>
                <p class="text-wrap text-gray-400">
                  {{ newsItem.description }}
                </p>
                <Button>{{ newsItem.buttonText }}</Button>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  </div>
</template>