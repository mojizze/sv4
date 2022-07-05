<template>
  <el-drawer
    :custom-class="customClasses"
    :with-header="false"
    v-model="visible"
    :size="size"
  >
    <slot name="content"></slot>
  </el-drawer>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: "!bg-white",
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

const size = computed(() => {
  if (window.innerWidth >= 1024) {
    return 439;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    return "50%";
  } else {
    return "100%";
  }
});
</script>
