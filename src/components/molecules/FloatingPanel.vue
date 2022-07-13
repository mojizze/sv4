<template>
  <el-drawer
    :custom-class="customClasses"
    :with-header="false"
    v-model="visible"
    :size="size"
  >
    <span
      class="absolute right-6 top-7 z-10 block cursor-pointer"
      @click="$emit('visible:update')"
    >
      <Icon name="close" class="h-6 w-6" />
    </span>
    <slot name="content"></slot>
  </el-drawer>
</template>

<script setup>
import { computed } from "vue";
import Icon from "@/components/atoms/Icon.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: "!bg-white relative",
  },
  size: {
    type: [String, Number],
    default: null,
  },

  tabletSize: {
    type: [String, Number],
    default: null,
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
    if (props.size) {
      return props.size;
    }

    return 439;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    if (props.tabletSize) {
      return props.tabletSize;
    }
    return "50%";
  } else {
    return "100%";
  }
});
</script>
