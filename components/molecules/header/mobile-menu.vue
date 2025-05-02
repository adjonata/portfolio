<script setup lang="ts">
import { sections } from "~/constants/sections";

const openLink = (id: string) => {
  setTimeout(() => {
    openSection(id);
  }, 100);
};
</script>

<template>
  <div class="w-full flex justify-end items-center">
    <SDropdownMenu>
      <SDropdownMenuTrigger as-child>
        <button>
          <Icon name="uil:align-right-justify" size="24px" />
        </button>
      </SDropdownMenuTrigger>
      <SDropdownMenuContent class="w-56 p-2">
        <SDropdownMenuGroup>
          <SDropdownMenuItem
            v-for="(section, sectionName) in sections"
            :key="sectionName"
            @click="openLink(section.id)"
            class="py-3"
          >
            <Icon :name="section.icon" size="18px" />
            <span class="text-[16px] ml-1">{{ section.title }}</span>
          </SDropdownMenuItem>
        </SDropdownMenuGroup>
      </SDropdownMenuContent>
    </SDropdownMenu>
  </div>
</template>

<style lang="scss" scoped></style>
