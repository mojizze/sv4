<template>
  <div class="flex min-h-0 flex-1 flex-col">
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
  @apply flex flex-1;

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
    @apply flex flex-col;

    & .el-table__body-wrapper {
      @apply flex-1 overflow-auto;
    }

    &::before {
      @apply hidden;
    }
  }
}
</style>
