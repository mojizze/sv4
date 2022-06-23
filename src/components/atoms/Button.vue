<template>
  <button
    type="button"
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
          <Icon :name="icon" class="h-5 w-5" />
        </div>
      </slot>
      <span
        v-if="label && !loading"
        :class="{ 'font-semibold underline underline-offset-2': underline }"
        >{{ label }}</span
      >
      <svg
        v-if="loading"
        role="status"
        class="h-6 w-6 animate-spin fill-blue text-gray4 dark:text-gray2"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
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
  loading: {
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
