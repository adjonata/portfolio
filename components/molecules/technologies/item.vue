<script setup lang="ts">
import { type Technology } from "~/constants";

const props = defineProps<{
  technology: Technology;
}>();

function openLink() {
  if (props.technology.website) {
    window.open(props.technology.website, "_blank");
  }
}
</script>

<template>
  <button
    :class="['tech-item']"
    @click="openLink"
    :title="technology.description"
  >
    <img :src="technology.image" :alt="technology.name" />
    <span class="tech-item__title">
      {{ technology.name }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
.tech-item {
  @apply w-full flex flex-col lg:flex-row items-center justify-center gap-2 text-center p-2 lg:p-3 bg-border rounded-[5px] border border-solid transition-colors;

  img {
    @apply w-[16px];
  }
  &__title {
    @apply w-full text-base lg:text-base text-slate-200 font-semibold tracking-wide;
  }
}
</style>
