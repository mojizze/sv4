<template>
  <button
    type="button"
    class="font-bold"
    :class="[getClasses]"
    :disabled="disabled"
    @click.prevent="$emit('btn:clicked')"
  >
    <div class="flex items-center justify-center">
      <div
        v-if="icon"
        class="grid place-items-center"
        :class="{ 'mr-4': label }"
      >
        <Icon :name="icon" />
      </div>
      <span v-if="label">{{ label }}</span>
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";
import Icon from "../Icon.vue";

defineEmits(["btn:clicked"]);

const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator(value) {
      return ["default", "outline"].includes(value);
    },
  },

  disabled: Boolean,

  size: {
    type: String,
    default: "normal",
    validator(value) {
      return ["small", "normal", "medium", "large"].includes(value);
    },
  },

  label: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  ghost: {
    type: Boolean,
    required: false,
  },

  shape: {
    type: String,
    default: "square",
    validator(value) {
      return ["circle", "square"].includes(value);
    },
  },
});

const getClasses = computed(() => {
  let classes = "disabled:opacity-40 disabled:cursor-not-allowed";

  if (props.ghost) return classes;

  if (props.shape !== "circle")
    switch (props.size) {
      case "small":
        classes = `${classes} px-7 py-3.5 text-sm`;
        break;
      case "normal":
        classes = `${classes} px-8 py-4`;
        break;
      case "medium":
        classes = `${classes} px-9 py-4.5 text-lg`;
        break;
      case "large":
        classes = `${classes} px-10 py-5 text-xl`;
        break;
      default:
        classes = `${classes} w-full`;
        break;
    }

  switch (props.type) {
    case "outline":
      classes = `${classes} border border-blue border text-blue btn-outlined btn-outlined`;
      break;
    default:
      classes = `${classes} bg-blue hover:bg-deepblue text-white`;
      break;
  }

  switch (props.shape) {
    case "circle":
      classes = `${classes} rounded-full p-4.5`;
      break;
    default:
      classes = `${classes} rounded-lg`;
      break;
  }

  return classes;
});
</script>

<style>
.btn-outlined:hover {
  background: linear-gradient(
      0deg,
      rgb(255 255 255 / 80%),
      rgb(255 255 255 / 80%)
    ),
    #0085ff;
}

.btn-outlined:active {
  background: linear-gradient(
      0deg,
      rgb(255 255 255 / 60%),
      rgba(255 255 255 / 60%)
    ),
    #0085ff;
}

.btn-normal:active {
  background: linear-gradient(
      0deg,
      rgb(255 255 255 / 60%),
      rgba(255 255 255 / 60%)
    ),
    #0085ff;
}
</style>
