<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { cn } from "@/utils/shadcn/utils";
import { Button } from "@/components/shadcn/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { useCarousel } from "./useCarousel";

const props = defineProps<WithClassAsProps>();

const { orientation, canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="
      cn(
        'touch-manipulation absolute h-10 w-10 rounded-lg p-0',
        orientation === 'horizontal'
          ? 'right-[-10px] lg:right-[-56px] top-[73%] lg:top-[35%] translate-y-1/2'
          : 'bottom-12 left-1/2 translate-x-1/2 rotate-90',
        props.class
      )
    "
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight class="h-4 w-4 text-current" />
    </slot>
  </Button>
</template>
