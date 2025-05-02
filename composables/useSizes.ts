import { ref, computed, onMounted, onUnmounted } from "vue";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useSizes() {
  const width = ref(0);

  const breakpoint = computed(() => {
    return (
      Object.entries(breakpoints)
        .reverse()
        .find(([_, size]) => width.value >= size)?.[0] || "xs"
    );
  });

  const updateWidth = () => (width.value = window.innerWidth);

  onMounted(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  });
  onUnmounted(() => window.removeEventListener("resize", updateWidth));

  const isXS = computed(() => breakpoint.value === "xs");
  const isSM = computed(() => breakpoint.value === "sm");
  const isMD = computed(() => breakpoint.value === "md");
  const isLG = computed(() => breakpoint.value === "lg");
  const isXL = computed(() => breakpoint.value === "xl");
  const is2XL = computed(() => breakpoint.value === "2xl");

  const isMobile = computed(() => width.value < breakpoints.md);
  const isTablet = computed(
    () => width.value >= breakpoints.md && width.value < breakpoints.lg
  );
  const isDesktop = computed(() => width.value >= breakpoints.lg);

  return {
    width,
    breakpoint,
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
    is2XL,
    isMobile,
    isTablet,
    isDesktop,
  };
}
