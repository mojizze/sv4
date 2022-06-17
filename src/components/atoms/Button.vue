<template>
  <button
    type="button"
    class=""
    :class="[getClasses]"
    :disabled="disabled"
    @click.prevent="$emit('btn:clicked')"
  >
    <div class="flex items-center justify-center">
      <slot name="icon">
        <div
          v-if="icon"
          class="grid place-items-center"
          :class="{
            'mr-4': label && size !== 'tiny',
            'mr-2': label && size === 'tiny',
          }"
        >
          <Icon :name="icon" />
        </div>
      </slot>
      <span
        v-if="label"
        :class="{ 'underline underline-offset-2': underline }"
        >{{ label }}</span
      >
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";
import Icon from "./Icon.vue";

defineEmits(["btn:clicked"]);

const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator(value) {
      return ["default", "outline", "light"].includes(value);
    },
  },
  underline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "normal",
    validator(value) {
      return ["small", "normal", "medium", "large", "tiny"].includes(value);
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
  let classes = "font-bold";

  let disabledClasses =
    "disabled:bg-gray4 disabled:cursor-not-allowed disabled:text-white";

  if (props.ghost) return "";

  if (props.shape !== "circle")
    switch (props.size) {
      case "tiny":
        classes = `${classes} px-5 py-2 text-xs`;
        break;
      case "small":
        classes = `${classes} px-7 py-3 text-sm`;
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
      disabledClasses =
        "disabled:bg-transparent disabled:cursor-not-allowed disabled:text-gray2 disabled:border-gray2 disabled:hover:bg-transparent";
      classes = `${classes} ${disabledClasses} border-2 border-blue border text-blue btn-outlined`;
      break;
    case "light":
      disabledClasses =
        "disabled:bg-transparent disabled:cursor-not-allowed disabled:text-gray2 disabled:border-gray2 disabled:hover:bg-transparent";
      classes = `${classes} ${disabledClasses} text-blue bg-lightblue`;
      break;
    default:
      classes = `${classes} ${disabledClasses} bg-blue hover:bg-deepblue text-white `;
      break;
  }

  switch (props.shape) {
    case "circle":
      classes = `${classes} rounded-full p-4.5 shadow-xl`;
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
