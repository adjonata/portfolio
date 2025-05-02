<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";
import { projects, type Project } from "~/constants/projects";

const props = defineProps<{
  openedProject?: Project;
}>();
const emit = defineEmits<{
  (e: "open", value: Project | undefined): void;
}>();
</script>

<template>
  <Carousel class="relative w-full">
    <CarouselContent>
      <CarouselItem
        v-for="(project, index) in projects"
        :key="index"
        class="md:basis-1/2 lg:basis-1/3 relative"
      >
        <MoleculesProjectsCard
          :project="project"
          :selected="openedProject?.title === project.title"
          @open="
            () => {
              if (openedProject?.title === project.title) {
                emit('open', undefined);
                return;
              }
              emit('open', project);
            }
          "
        />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
