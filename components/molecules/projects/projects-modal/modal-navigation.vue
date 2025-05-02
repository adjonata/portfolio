<script setup lang="ts">
const props = defineProps<{
  hasPrev: boolean;
  hasNext: boolean;
  prevTitle: string;
  nextTitle: string;
}>();
const emit = defineEmits(['prev', 'next']);
</script>
<template>
  <div class="flex justify-between items-end mt-auto w-full">
    <button
      v-if="props.hasPrev"
      @click="emit('prev')"
      class="px-4 py-2 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700 transition"
    >
      ← {{ props.prevTitle }}
    </button>
    <button
      v-if="props.hasNext"
      @click="emit('next')"
      class="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition font-bold ml-auto"
    >
      {{ props.nextTitle }} →
    </button>
  </div>
</template>
