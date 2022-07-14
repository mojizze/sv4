<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <slot name="tableSection" />
    <div class="mt-5 px-10">
      <Pagination
        :last-page="store.totalPages"
        :limit="store.itemsPerPage"
        :page="store.currentPage"
        @update:page="handlePageChange"
        @update:limit="handleLimitChange"
        @prev="prev"
        @next="next"
      />
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import Pagination from "../atoms/Pagination.vue";
const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["fetch:data"]);

const handlePageChange = (value) => {
  props.store.currentPage = value;
  emit("fetch:data");
};

const handleLimitChange = (value) => {
  props.store.itemsPerPage = value;
  props.store.currentPage = 1;
  emit("fetch:data");
};

const prev = () => {
  props.store.currentPage = props.store.currentPage - 1
  emit("fetch:data");
}

const next = () => {
  props.store.currentPage = props.store.currentPage + 1
  emit("fetch:data");
}
</script>

<style lang="scss">
.el-table {
  @apply flex flex-1;

  &__empty-text {
    line-height: normal !important;
  }

  & .el-table__cell {
    @apply py-3 px-2;
  }

  & th.el-table__cell {
    @apply font-light;
  }

  & td.el-table__cell {
    @apply border-0 text-black1;
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
    @apply border-b border-t border-gray6 text-gray2;
  }
}
</style>
