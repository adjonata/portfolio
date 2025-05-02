<script setup lang="ts">
import { sections } from "~/constants/sections";
import { ref, computed } from "vue";
import { projects } from "~/constants/projects";

function scrollToProjectView() {
  setTimeout(() => {
    const projectsView = document.getElementById("project-view");
    projectsView?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 200);
}

const openedProjectIndex = ref<number | null>(null);
const isModalOpen = computed(() => openedProjectIndex.value !== null);

function openProject(project: any) {
  const idx = projects.findIndex((p) => p.title === project.title);
  if (idx !== -1) {
    openedProjectIndex.value = idx;
  }
}
function closeModal() {
  openedProjectIndex.value = null;
}
</script>

<template>
  <AtomsSection
    dark-background
    :title="sections.projects.title"
    :subtitle="sections.projects.subtitle"
    :id="sections.projects.id"
    :icon="sections.projects.icon"
  >
    <div class="w-full flex flex-col gap-8 lg:gap-12">
      <MoleculesProjectsCarousel
        @open="
          (value) => {
            openProject(value);
          }
        "
        :opened-project="
          openedProjectIndex !== null ? projects[openedProjectIndex] : undefined
        "
      />
      <MoleculesProjectsProjectsModal
        v-if="isModalOpen && openedProjectIndex !== null"
        :projects="projects"
        :model-value="isModalOpen"
        :start-index="openedProjectIndex"
        @update:modelValue="
          (val) => {
            if (!val) closeModal();
          }
        "
      />
    </div>
  </AtomsSection>
</template>

<style lang="scss" scoped></style>
