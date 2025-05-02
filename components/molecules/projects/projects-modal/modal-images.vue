<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  images: string[];
  mainIndex: number;
  title: string;
}>();
const emit = defineEmits(["select"]);

// Referência ao container principal do modal
const containerRef = ref<HTMLElement | null>(null);

// Variáveis para armazenar a posição inicial do toque (para swipe)
let touchStartX = 0;
let touchStartY = 0;

/**
 * Lida com eventos de teclado para navegação entre imagens.
 * Seta para cima: imagem anterior
 * Seta para baixo: próxima imagem
 */
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "ArrowDown" && props.mainIndex < props.images.length - 1) {
    emit("select", props.mainIndex + 1);
  } else if (event.key === "ArrowUp" && props.mainIndex > 0) {
    emit("select", props.mainIndex - 1);
  }
}

/**
 * Armazena a posição inicial do toque na tela (início do swipe)
 */
function handleTouchStart(event: TouchEvent) {
  if (event.touches.length === 1) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }
}

/**
 * Detecta a direção do swipe e navega entre as imagens
 */
function handleTouchEnd(event: TouchEvent) {
  if (event.changedTouches.length === 1) {
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;
    // Só considera swipe horizontal se o movimento for predominante na horizontal e significativo
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
      if (dx < 0 && props.mainIndex < props.images.length - 1) {
        emit("select", props.mainIndex + 1); // Swipe para esquerda: próxima imagem
      } else if (dx > 0 && props.mainIndex > 0) {
        emit("select", props.mainIndex - 1); // Swipe para direita: imagem anterior
      }
    }
  }
}

// Adiciona/remover listeners e desabilita scroll da página enquanto o modal está aberto
onMounted(() => {
  // Desabilita scroll da página
  document.body.style.overflow = "hidden";
  // Navegação por teclado
  window.addEventListener("keydown", handleKeyDown);
  // Navegação por swipe (apenas no container do modal)
  if (containerRef.value) {
    containerRef.value.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    containerRef.value.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
  }
});

onUnmounted(() => {
  // Reabilita scroll da página
  document.body.style.overflow = "";
  // Remove listeners de teclado e swipe
  window.removeEventListener("keydown", handleKeyDown);
  if (containerRef.value) {
    containerRef.value.removeEventListener("touchstart", handleTouchStart);
    containerRef.value.removeEventListener("touchend", handleTouchEnd);
  }
});
</script>

<template>
  <div
    ref="containerRef"
    class="w-full flex flex-col items-center justify-center bg-zinc-800 p-2 md:flex-row md:p-4 pt-0"
  >
    <!-- Imagem principal -->
    <div class="flex-1 flex items-center justify-center">
      <img
        :src="props.images[props.mainIndex]"
        :alt="props.title"
        class="rounded-lg max-h-[220px] object-contain border border-zinc-700 bg-zinc-900 w-full md:max-h-[380px]"
      />
    </div>
    <!-- Barra de seleção: horizontal em mobile, vertical em desktop -->
    <div
      class="flex flex-row gap-2 mt-2 w-full max-h-[60px] overflow-x-auto overflow-y-hidden md:flex-col md:ml-4 md:mt-0 md:w-24 md:max-h-[380px] md:gap-2 md:overflow-y-auto md:overflow-x-hidden"
    >
      <img
        v-for="(img, idx) in props.images"
        :key="img"
        :src="img"
        :alt="`${props.title} print ${idx + 1}`"
        class="w-20 h-12 rounded border border-zinc-700 object-cover cursor-pointer hover:scale-105 transition md:w-24 md:h-14"
        :class="{ 'ring-2 ring-primary': idx === props.mainIndex }"
        @click="emit('select', idx)"
      />
    </div>
  </div>
</template>
