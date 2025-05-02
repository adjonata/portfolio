<script setup lang="ts">
const show = ref(false);
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <button @click="show = !show">
      <div class="w-full flex items-center justify-start gap-4">
        <slot name="title"></slot>
        <div class="w-6 h-6 flex items-center justify-center">
          <Icon
            :name="
              show
                ? 'ic:baseline-keyboard-arrow-up'
                : 'ic:baseline-keyboard-arrow-down'
            "
            class="text-xl text-white"
          />
        </div>
      </div>
    </button>
    <div v-if="show">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
