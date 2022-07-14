<template>
  <div class="flex justify-between py-2 text-sm">
    <div class="flex items-center space-x-10">
      <div class="flex items-center space-x-5">
        <el-select v-model="currentPage" class="sp-pagination-select">
          <el-option
            v-for="item in lastPage"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <div>of {{ lastPage }}</div>
      </div>
      <div
        class="flex h-full items-center justify-center divide-x divide-gray6 overflow-hidden rounded-lg border border-gray6"
      >
        <Button
          @click="$emit('prev')"
          icon="arrowLeft"
          class="h-full px-4 disabled:cursor-not-allowed disabled:bg-gray5"
          ghost
          :disabled="page === 1"
        />
        <Button
          @click="$emit('next')"
          icon="arrowRight"
          class="h-full px-4 disabled:cursor-not-allowed disabled:bg-gray5"
          ghost
          :disabled="page === lastPage"
        />
      </div>
    </div>
    <div class="flex items-center space-x-5">
      <div>Entries per page</div>
      <el-select v-model="perPage" class="sp-pagination-select">
        <el-option
          v-for="item in limits"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Button from "./Button.vue";

const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },

  lastPage: {
    type: Number,
    default: 1,
  },

  limit: {
    type: Number,
    default: 10,
  },
});

const emit = defineEmits(["update:page"]);
const limits = ref([10, 25, 50, 75, 100]);

const currentPage = computed({
  get() {
    return props.page;
  },

  set(value) {
    emit("update:page", value);
  },
});

const perPage = computed({
  get() {
    return props.limit;
  },

  set(value) {
    emit("update:limit", value);
  },
});
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
