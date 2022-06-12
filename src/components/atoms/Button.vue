<template>
  <button
    type="button"
    class="font-bold"
    :class="[sizeClasses, typeClasses, shapeClasses]"
    :disabled="state === 'disabled'"
    @click.prevent="$emit('btn:clicked')"
  >
    <div class="flex items-center">
      <div
        v-if="$slots.icon"
        class="grid place-items-center"
        :class="{ 'mr-4.5': shape !== 'round' }"
      >
        <slot name="icon" />
      </div>
      <span>
        <slot name="label">
          {{ label }}
        </slot>
      </span>
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";

defineEmits(["btn:clicked"]);

const props = defineProps({
  type: {
    type: String,
    default: "normal",
    validator(value) {
      return ["normal", "outline"].includes(value);
    },
  },

  state: {
    type: String,
    default: "default",
    validator(value) {
      return ["default", "active", "disabled"].includes(value);
    },
  },

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

  shape: {
    type: String,
    default: "square",
    validator(value) {
      return ["round", "square"].includes(value);
    },
  },
});

const sizeClasses = computed(() => {
  if (props.shape === "round") {
    return "p-4.5";
  }

  switch (props.size) {
    case "small":
      return "px-7 py-3.5 text-sm";
    case "normal":
      return "px-8 py-4";
    case "medium":
      return "px-9 py-4.5 text-lg";
    case "large":
      return "px-10 py-5 text-xl";
    default:
      return "w-full";
  }
});

const typeClasses = computed(() => {
  switch (props.type) {
    case "outline":
      return props.state === "disabled"
        ? "border border-gray4 border-1 text-gray4"
        : "border border-blue border-2 text-blue btn-outlined btn-outlined";
    default:
      return props.state === "disabled"
        ? "bg-gray4 text-white  cursor-not-allowed"
        : "bg-blue text-white hover:bg-deepblue btn-normal";
  }
});

const shapeClasses = computed(() => {
  switch (props.shape) {
    case "square":
      return "rounded-lg";
    default:
      return "rounded-full";
  }
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
      rgba(255 255 255 / 30%),
      rgba(255 255 255 / 30%)
    ),
    #0085ff;
}
</style>
