<template>
  <div class="flex items-center justify-end w-full">
    <button
      @click="$emit('close')"
      class="text-zinc-700 hover:text-zinc-900 transition text-4xl p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Fechar"
    >
      &times;
    </button>
  </div>
</template>
