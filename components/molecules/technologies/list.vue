<script setup lang="ts">
import { technologiesCategories } from "~/constants";
</script>

<template>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 2xl:gap-12"
  >
    <MoleculesTechnologiesCategory
      v-for="(category, categoryIndex) in technologiesCategories"
      :key="categoryIndex"
      :category="category"
    />
  </div>
</template>

<style lang="scss" scoped></style>
