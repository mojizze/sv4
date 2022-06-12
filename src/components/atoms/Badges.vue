<template>
  <div
    class="flex w-fit items-center justify-start rounded-[20px] py-1 pl-2 pr-8"
    :class="[background, color]"
  >
    <Icon :name="icon" class="mr-2.5" />
    <span class="block text-sm">{{ title }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Icon from "./Icon.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  background: {
    type: String,
    default: "bg-blue/30",
  },
  color: {
    type: String,
    default: "text-blue",
  },
});
</script>
