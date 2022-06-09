<template>
  <img
    v-if="img.length > 0"
    class="inline-block h-7.5 w-7.5 rounded-full"
    :src="img"
    alt=""
  />
  <span
    v-else
    class="inline-flex h-7.5 w-7.5 items-center justify-center rounded-full bg-teal1"
  >
    <span class="text-sm font-normal leading-none text-black1">{{
      initials
    }}</span>
  </span>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  img: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

const initials = computed(() => {
  const name = props.name.split(" ");
  return `${name[0][0]}${name[1][0]}`;
});
</script>
