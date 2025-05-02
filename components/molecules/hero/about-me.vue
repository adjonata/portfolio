<script setup lang="ts">
import { aboutMe } from "@/constants/about-me";
import { sections } from "~/constants/sections";
</script>

<template>
  <div
    class="h-full flex flex-col justify-center items-start gap-5 lg:gap-6 text-left"
  >
    <h2 class="text-2xl lg:text-3xl leading-6 text-primary tracking-wide">
      Olá, meu nome é
    </h2>
    <h1
      class="text-4xl lg:text-5xl text-white uppercase font-bold tracking-wider"
    >
      {{ aboutMe.name }}
    </h1>
    <p class="text-lg text-slate-300 tracking-wider">
      {{ aboutMe.description }}
    </p>
    <SButton
      class="font-bold uppercase flex items-center gap-[4px] h-[44px] text-zinc-700"
      @click="openSection(sections.projects.id)"
    >
      <span class="tracking-wide text-[16px]"> Confira meus projetos </span>
      <Icon name="uil:arrow-down" size="22" />
    </SButton>
  </div>
</template>

<style lang="scss" scoped></style>
