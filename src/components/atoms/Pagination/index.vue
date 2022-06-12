<template>
  <div class="flex justify-between text-sm">
    <div class="flex items-center space-x-10">
      <div class="flex items-center space-x-5">
        <Select :options="OPTIONS" />
        <div>of 10</div>
      </div>
      <div
        class="flex h-full items-center justify-center divide-x divide-gray6 rounded-lg border border-gray6"
      >
        <Button icon="leftArrow" class="h-full px-4" ghost />
        <Button icon="rightArrow" class="h-full px-4" ghost disabled />
      </div>
    </div>
    <div class="flex items-center space-x-5">
      <div>Entries per page</div>
      <Select :options="OPTIONS" />
    </div>
  </div>
</template>

<script setup>
import Select from "../Select/index.vue";
import Button from "../Button/index.vue";

const OPTIONS = new Array(124)
  .fill()
  .map((_, i) => ({ label: i + 1, value: i + 1 }));
</script>

<style lang="scss" scoped></style>
