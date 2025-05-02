<script setup lang="ts">
import { sections } from "~/constants/sections";
</script>

<template>
  <AtomsSection
    dark-background
    :title="sections.technologies.title"
    :subtitle="sections.technologies.subtitle"
    :id="sections.technologies.id"
    :icon="sections.technologies.icon"
  >
    <MoleculesTechnologiesList />
  </AtomsSection>
</template>

<style lang="scss" scoped></style>
