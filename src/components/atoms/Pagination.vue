<template>
  <div class="flex justify-between px-10 py-2 text-sm">
    <div class="flex items-center space-x-10">
      <div class="flex items-center space-x-5">
        <el-select v-model="pageNum" class="sp-pagination-select">
          <el-option
            v-for="item in OPTIONS"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div>of 10</div>
      </div>
      <div
        class="flex h-full items-center justify-center divide-x divide-gray6 overflow-hidden rounded-lg border border-gray6"
      >
        <Button
          icon="arrowLeft"
          class="h-full px-4 disabled:cursor-not-allowed disabled:bg-gray5"
          ghost
        />
        <Button
          icon="arrowRight"
          class="h-full px-4 disabled:cursor-not-allowed disabled:bg-gray5"
          ghost
          disabled
        />
      </div>
    </div>
    <div class="flex items-center space-x-5">
      <div>Entries per page</div>
      <el-select v-model="perPage" class="sp-pagination-select">
        <el-option
          v-for="item in OPTIONS"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const pageNum = ref(1);
const perPage = ref(1);
const OPTIONS = new Array(124)
  .fill()
  .map((_, i) => ({ label: i + 1, value: i + 1 }));
</script>

<style lang="scss">
.sp-pagination-select.el-select {
  & .el-input__wrapper {
    & .el-input__inner {
      @apply w-6;
    }
  }
}
</style>
