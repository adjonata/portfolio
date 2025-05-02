<script setup lang="ts">
import { sections } from "~/constants/sections";
</script>

<template>
  <AtomsSection
    :title="sections.contact.title"
    :subtitle="sections.contact.subtitle"
    :id="sections.contact.id"
    :icon="sections.contact.icon"
  >
    <div class="w-full grid grid-cols-12 gap-4 xl:gap-[56px]">
      <MoleculesContactList
        class="order-2 lg:order-1 col-span-12 lg:col-span-5"
      />
      <div
        class="order-1 lg:order-2 col-span-12 lg:col-span-7 p-6 flex items-center justify-center lg:justify-end xl:pr-[80px] rounded-lg"
      >
        <img src="/contact.svg" alt="Contato" class="w-[80%] lg:w-[450px]" />
      </div>
    </div>
  </AtomsSection>
</template>

<style lang="scss" scoped></style>
