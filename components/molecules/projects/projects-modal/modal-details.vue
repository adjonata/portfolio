<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  technologies: { name: string }[];
  link?: string;
}>();
</script>
<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-start gap-8 p-8">
    <div class="col-span-1 lg:col-span-8 flex flex-col gap-4">
      <h2 class="text-2xl font-bold text-zinc-100">{{ props.title }}</h2>
      <p class="text-zinc-300 text-md">{{ props.description }}</p>
      <div v-if="props.link">
        <a
          :href="props.link"
          target="_blank"
          rel="noopener"
          class="text-primary underline hover:text-primary/80"
        >
          Ver projeto
        </a>
      </div>
    </div>
    <div class="col-span-1 lg:col-span-4 flex items-start flex-wrap gap-2">
      <span
        v-for="tech in props.technologies"
        :key="tech.name"
        class="bg-zinc-800 text-zinc-200 px-2 py-1 rounded text-xs border border-zinc-700"
      >
        {{ tech.name }}
      </span>
    </div>
    <slot />
  </div>
</template>
