<script setup lang="ts">
import { defineProps } from "vue";
import type { Experience } from "@/constants/experiences";

const props = defineProps<{
  experience: Experience;
  formatDate: (date: string | null) => string;
}>();
</script>

<template>
  <div class="relative h-full pl-4">
    <div
      class="absolute -left-4 lg:-left-6 top-1 w-5 h-5 bg-zinc-900 border-4 border-zinc-700 rounded-full shadow-sm flex items-center justify-center"
    >
      <div class="w-2.5 h-2.5 bg-primary rounded-full"></div>
    </div>
    <div class="bg-border h-full rounded-lg p-6 shadow-md">
      <div class="flex flex-col gap-[6px] mb-2">
        <span class="font-bold text-xl text-zinc-50">{{
          experience.company_name
        }}</span>
        <span class="text-lg text-zinc-300">{{ experience.position }}</span>
        <span class="text-md text-zinc-400">
          {{ formatDate(experience.start_date) }} -
          {{ experience.currently ? "Atual" : formatDate(experience.end_date) }}
        </span>
      </div>
      <div class="text-zinc-300 text-lg">
        {{ experience.description }}
      </div>
    </div>
  </div>
</template>
