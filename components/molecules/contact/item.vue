<script setup lang="ts">
import type { ContactItem } from "~/constants";

const props = defineProps<{
  item: ContactItem;
}>();

function openLink() {
  window.open(props.item.link, "_blank");
}
</script>

<template>
  <button
    class="flex w-full items-center gap-6 text-left bg-border hover:bg-zinc-700 p-4 py-3 rounded-md"
    @click="openLink"
  >
    <Icon :name="item.icon" class="text-[32px] text-primary" />
    <div class="flex flex-col items-start gap-1">
      <span class="text-zinc-200 text-xl font-semibold">{{ item.title }}</span>
      <span class="text-zinc-300 text-lg">{{ item.username }}</span>
    </div>
  </button>
</template>

<style lang="scss" scoped></style>
