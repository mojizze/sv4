<template>
  <img
    v-if="img.length > 0"
    class="inline-block h-7.5 w-7.5 rounded-full"
    :src="img"
    alt=""
  />
  <span
    v-else
    class="inline-flex h-7.5 w-7.5 items-center justify-center rounded-full"
    :class="[size === 'small' ? 'h-7.5 w-7.5' : 'h-10 w-10', background]"
  >
    <span class="text-sm font-normal leading-none text-black1">{{
      initials
    }}</span>
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  img: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "small",
    validator(value) {
      return ["small", "normal"].includes(value);
    },
  },
  background: {
    type: String,
    default: "bg-teal1",
  },
});

const initials = computed(() => {
  const name = props.name.split(" ");
  return `${name[0][0]}${name[1][0]}`;
});
</script>
