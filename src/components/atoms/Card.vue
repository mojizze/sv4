<template>
  <div class="rounded-lg bg-white py-4 px-6">
    <header class="flex items-center justify-between">
      <span class="block font-bold text-black1">{{ title }}</span>
      <slot name="header"></slot>
    </header>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
