<script setup lang="ts">
import { sections } from "~/constants/sections";
</script>

<template>
  <AtomsSection
    :title="sections.experiences.title"
    :subtitle="sections.experiences.subtitle"
    :id="sections.experiences.id"
    :icon="sections.experiences.icon"
  >
    <MoleculesExperiencesList />
  </AtomsSection>
</template>

<style lang="scss" scoped></style>
