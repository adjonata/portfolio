<script setup lang="ts">
defineProps<{
  darkBackground?: boolean;
  noPadding?: boolean;
  icon?: string;
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <section
    :class="[
      'section',
      darkBackground && 'bg-background-dark',
      !noPadding &&
        'pt-[32px] pb-[48px] lg:pt-[110px] lg:pb-[110px] 2xl:pt-[130px] 2xl:pb-[130px]',
    ]"
  >
    <div class="section__content">
      <div class="w-full flex flex-col gap-2" v-if="title || subtitle">
        <div v-if="title" class="flex items-center gap-3">
          <Icon
            :name="icon"
            class="text-primary text-[32px] lg:text-[40px]"
            v-if="icon"
          />
          <h2
            v-if="title"
            class="text-slate-200 text-2xl lg:text-3xl font-semibold uppercase tracking-wider"
          >
            {{ title }}
          </h2>
        </div>

        <div v-if="subtitle" class="flex items-center gap-1">
          <Icon
            name="uil:arrow-right"
            class="text-[34px] lg:text-[34px] text-slate-100"
          />
          <h3 class="text-slate-400 text-xl 2xl:text-2xl tracking-wide">
            {{ subtitle }}
          </h3>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  @apply w-full relative;
  &__content {
    @apply container max-w-[1280px] px-8 flex flex-col gap-6 lg:gap-[56px];
  }
}
</style>
