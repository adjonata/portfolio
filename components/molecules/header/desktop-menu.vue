<script setup lang="ts">
import { sections } from "~/constants/sections";
</script>

<template>
  <div class="w-full flex justify-end items-center gap-[24px]">
    <SButton
      v-for="(section, sectionName) in sections"
      :key="sectionName"
      @click="openSection(section.id)"
      size="lg"
      variant="link"
      class="text-[17px] text-white px-4 tracking-wider"
    >
      <Icon :name="section.icon" size="20px" />
      {{ section.title }}
    </SButton>
  </div>
</template>

<style lang="scss" scoped></style>
