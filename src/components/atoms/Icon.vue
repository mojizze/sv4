<template>
  <component :is="icon" />
</template>

<script setup>
import { defineProps, computed, defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icon = computed(() => {
  return defineAsyncComponent(() =>
    import("../../assets/icons/" + props.name + ".svg?component")
  );
});
</script>
