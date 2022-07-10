<template>
  <div class="">
    <label v-if="label" class="text-xs">{{ label }}</label>
    <DatePicker
      title-position="left"
      v-model="date"
      popover-visibility="hidden"
    >
      <template #default="{ togglePopover }">
        <div
          class="z-20 flex cursor-pointer items-center justify-start rounded border border-gray5 px-4 py-3 text-sm"
          @click.stop="dateSelected($event, togglePopover)"
        >
          <span
            v-if="!label"
            class="pointer-events-none z-10 mr-2 hidden w-full text-gray1/60 xl:block"
            >{{ displayText }}:
          </span>
          <div
            class="pointer-events-none z-10 flex w-full items-center justify-between text-gray1/60"
          >
            <span class="mr-2.5">{{ date.toLocaleDateString() }}</span>
            <Icon name="calendar-gray" />
          </div>
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<script setup>
import { computed } from "vue";
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";
import Icon from "../atoms/Icon.vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },

  displayText: {
    type: String,
    default: "Start Date",
  },

  label: {
    type: String,
    default: null,
  },
});

const emits = defineEmits(["update:modelValue"]);

const date = computed({
  get() {
    return props.modelValue || new Date();
  },

  set(value) {
    emits("update:modelValue", value);
  },
});

function dateSelected(e, toggle) {
  toggle({ ref: e.target });
}
</script>

<style>
.vc-container {
  border: none !important;
}

.vc-weekday {
  @apply text-blue;
}

.vc-title {
  @apply text-blue;
  @apply text-base;
}

.vc-header {
  @apply mb-4;
}

.vc-arrow.is-left {
  @apply text-blue;
}

.vc-arrow.is-right {
  @apply text-blue;
}

.vc-day-content:hover,
.vc-day-content:focus {
  @apply rounded-full bg-deepblue text-white;
}
</style>
