<template>
  <el-drawer
    modal-class="bg-black1/50"
    v-model="visible"
    title="I am the title"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["visible:update"]);

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("visible:update", value);
  },
});
</script>

<style>
.el-overlay {
  @apply bg-black1/50;
}
</style>
