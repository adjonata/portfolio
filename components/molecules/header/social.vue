<script setup lang="ts">
import { socialItems } from "~/constants/links";
</script>

<template>
  <div class="flex justify-end items-center gap-6">
    <SButton
      v-for="item in socialItems"
      :key="item.link"
      @click="
        navigateTo(item.link, {
          external: true,
          open: {
            target: '_blank',
          },
        })
      "
      :title="item.title"
      variant="link"
      size="icon"
      class="text-white"
    >
      <Icon :name="item.icon" size="26px" />
    </SButton>
  </div>
</template>

<style lang="scss" scoped></style>
