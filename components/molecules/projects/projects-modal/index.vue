<script setup lang="ts">
import type { Project } from "@/constants/projects";
import ModalHeader from "./modal-header.vue";
import ModalImages from "./modal-images.vue";
import ModalDetails from "./modal-details.vue";
import ModalNavigation from "./modal-navigation.vue";

// Props recebidas do componente pai
const props = defineProps<{
  projects: Project[];
  startIndex: number;
}>();

// Controle do estado do modal (aberto/fechado)
const modelValue = defineModel<boolean>();

// Índice do projeto atual e da imagem principal
const currentIndex = ref(props.startIndex);
const mainImageIndex = ref(0);

// Atualiza o projeto atual quando o startIndex mudar
watch(
  () => props.startIndex,
  (val) => {
    currentIndex.value = val;
    mainImageIndex.value = 0;
  }
);

// Computeds para facilitar navegação e exibição
const currentProject = computed(() => props.projects[currentIndex.value]);
const hasPrev = computed(() => currentIndex.value > 0);
const hasNext = computed(() => currentIndex.value < props.projects.length - 1);
const nextProjectTitle = computed(() =>
  hasNext.value ? props.projects[currentIndex.value + 1].title : ""
);
const prevProjectTitle = computed(() =>
  hasPrev.value ? props.projects[currentIndex.value - 1].title : ""
);

/**
 * Fecha o modal de projetos
 */
function close() {
  modelValue.value = false;
}

/**
 * Avança para o próximo projeto (resetando imagem)
 */
function next() {
  if (hasNext.value) {
    currentIndex.value++;
    mainImageIndex.value = 0;
  }
}

/**
 * Volta para o projeto anterior (resetando imagem)
 */
function prev() {
  if (hasPrev.value) {
    currentIndex.value--;
    mainImageIndex.value = 0;
  }
}

/**
 * Define imagem principal do projeto
 */
function setMainImage(idx: number) {
  mainImageIndex.value = idx;
}

/**
 * Volta para imagem anterior do projeto atual
 */
function prevImage() {
  if (mainImageIndex.value > 0) mainImageIndex.value--;
}

/**
 * Avança para próxima imagem do projeto atual
 */
function nextImage() {
  if (mainImageIndex.value < currentProject.value.images.length - 1)
    mainImageIndex.value++;
}

/**
 * Lida com eventos de teclado globais
 * - ESC fecha o modal
 * - Seta esquerda/direita navega entre projetos
 */
function handleKeydown(e: KeyboardEvent) {
  if (!modelValue.value) return;
  if (e.key === "Escape") {
    close();
  } else if (e.key === "ArrowLeft") {
    prev();
  } else if (e.key === "ArrowRight") {
    next();
  }
}

// Adiciona e remove event listener global de teclado
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm text-lg"
    @mousedown.self="close"
  >
    <div
      class="relative w-full max-w-3xl max-h-[100vh] flex flex-col bg-zinc-900 rounded-xl shadow-2xl overflow-auto animate-in md:max-w-4xl md:rounded-xl md:m-0 sm:max-w-full sm:rounded-none sm:m-0"
    >
      <!-- Conteúdo do modal -->
      <ModalHeader
        :title="currentProject.title"
        :next-title="nextProjectTitle"
        :prev-title="prevProjectTitle"
        :has-prev="hasPrev"
        :has-next="hasNext"
        @close="close"
        @prev="prev"
        @next="next"
      />
      <ModalImages
        :images="currentProject.images"
        :main-index="mainImageIndex"
        :title="currentProject.title"
        @select="setMainImage"
      />
      <ModalDetails
        :title="currentProject.title"
        :description="currentProject.description"
        :technologies="currentProject.technologies"
        :link="currentProject.link"
      />
      <ModalNavigation
        :has-prev="hasPrev"
        :has-next="hasNext"
        :prev-title="prevProjectTitle"
        :next-title="nextProjectTitle"
        @prev="prev"
        @next="next"
      />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
