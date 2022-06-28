<template>
  <div class="flex h-full flex-1 flex-col">
    <slot name="tableSection" />

    <Pagination :options="OPTIONS" />
  </div>
</template>

<script setup>
import Pagination from "../atoms/Pagination.vue";
const OPTIONS = new Array(124)
  .fill()
  .map((_, i) => ({ label: i + 1, value: i + 1 }));
</script>

<style lang="scss">
.el-table {
  @apply flex h-full flex-1;

  &__empty-text {
    line-height: normal !important;
  }

  & .el-table__cell {
    @apply py-5 px-7;
  }

  & th.el-table__cell {
    @apply font-light;
  }

  & td.el-table__cell {
    @apply border-0;
  }

  & .el-table__inner-wrapper {
    @apply flex h-full flex-col;

    & .el-table__body-wrapper {
      @apply min-h-0 flex-1 overflow-auto;

      & .el-scrollbar__view {
        @apply h-full;
      }
    }

    &::before {
      @apply hidden;
    }
  }

  & .el-table__header tr th {
    @apply border-y border-gray6 text-gray2;
  }
}
</style>
