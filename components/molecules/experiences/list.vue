<script setup lang="ts">
import { experiences } from "@/constants/experiences";
import Item from "./item.vue";

function formatDate(date: string | null) {
  return date
    ? new Date(date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "short",
      })
    : "";
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="relative my-0 pl-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12"
    >
      <Item
        v-for="(exp, idx) in experiences"
        :key="exp.company_name + exp.start_date"
        :experience="exp"
        :formatDate="formatDate"
      />
    </div>
  </div>
</template>
