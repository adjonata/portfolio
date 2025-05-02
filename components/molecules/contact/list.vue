<script setup lang="ts">
import { contactItems } from "~/constants/links";
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <MoleculesContactItem
      v-for="(item, idx) in contactItems"
      :key="idx"
      :item="item"
    />
  </div>
</template>

<style lang="scss" scoped></style>
