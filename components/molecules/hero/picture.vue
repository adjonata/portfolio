<script setup lang="ts"></script>

<template>
  <div
    class="hero-picture h-full relative flex items-center justify-end lg:justify-end"
  >
    <div
      class="hidden lg:block w-0 h-0 border-y-[166px] border-y-transparent border-r-[80px]"
    ></div>
    <img
      src="/avatar.jpg"
      alt="Avatar.jpg"
      class="w-[240px] lg:w-[330px] lg:!shadow-none"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero-picture img {
  box-shadow: -15px 15px 0px theme("colors.border");
}
</style>
