<template>
  <component :is="icon" :class="{ fillStroke: true }" />
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },

  fillStroke: {
    type: String,
    default: null,
  },
});

const icon = computed(() => {
  return defineAsyncComponent(() =>
    import("../../assets/icons/" + props.name + ".svg?component")
  );
});
</script>
