<script setup lang="ts">
import type { TechnologyCategory } from "~/constants";

const props = defineProps<{
  category: TechnologyCategory;
}>();
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <h3 class="text-2xl font-semibold tracking-wide text-zinc-200">
      {{ category.categoryName }}
    </h3>

    <div class="w-full grid grid-cols-3 lg:grid-cols-4 gap-4">
      <MoleculesTechnologiesItem
        v-for="(technology, technologyIndex) in category.technologies"
        :key="technologyIndex"
        :technology="technology"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
