<script setup lang="ts">
const { isDesktop } = useSizes();
</script>

<template>
  <header class="w-full flex items-center justify-between py-6 lg:py-8 gap-8">
    <MoleculesHeaderSocial />
    <MoleculesHeaderMobileMenu v-if="!isDesktop" class="flex lg:hidden" />
    <MoleculesHeaderDesktopMenu v-else-if="isDesktop" class="hidden lg:flex" />
  </header>
</template>

<style lang="scss" scoped></style>
