<script setup lang="ts">
import type { Project } from "~/constants/projects";

const props = defineProps<{
  project: Project;
  selected?: boolean;
}>();
const emit = defineEmits<{
  (e: "open"): void;
}>();
</script>

<template>
  <div class="w-full h-[226px] lg:h-[256px] pr-2">
    <button
      class="project-card w-full h-[200px] lg:h-[250px] relative overflow-hidden"
      :class="selected && 'selected'"
      @click="$emit('open')"
    >
      <div
        class="background-blur"
        :style="{
          backgroundImage: `url(${project.thumbnail})`,
        }"
      ></div>
      <div
        class="w-full h-full flex items-center justify-center text-center border-[5px] border-zinc-700 bg-[rgba(0,0,0,0.70)] hover:bg-[rgba(0,0,0,0.60)] transition-all p-4 lg:p-6"
        :class="[selected && '!bg-[rgba(0,0,0,0.40)] !border-white']"
      >
        <div class="flex items-center gap-3 select-none pb-2">
          <Icon name="uil:folder-open" class="text-[24px] text-white" />
          <h3
            class="text-zinc-300 text-xl uppercase tracking-wider font-semibold max-w-[140px]"
          >
            {{ project.title }}
          </h3>
        </div>
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  box-shadow: 7px 7px 0px theme("colors.secondary.DEFAULT");
}

.background-blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transform: scale(
    1.1
  ); /* Escala a imagem para garantir que o desfoque cubra toda a área */
  z-index: -1; /* Coloca a imagem atrás do conteúdo */
}
</style>
