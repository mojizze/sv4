<template>
  <div class="flex items-center justify-between text-sm">
    <div class="flex flex-col text-black1">
      <span class="block">{{ name }}</span>
      <span class="mt-2 block text-xs">{{ bank }}</span>
    </div>
    <span :class="[isBold ? 'font-bold' : 'font-normal']" class="text-black1">{{
      $priceFormat(amount)
    }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: null,
  },
  bank: {
    type: String,
    default: null,
  },

  amount: {
    type: String,
    default: null,
  },

  isBold: {
    type: Boolean,
    default: false,
  },
});
</script>
