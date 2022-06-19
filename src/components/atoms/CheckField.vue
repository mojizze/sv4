<template>
  <label class="block">
    <div
      class="flex h-8.75 w-fit items-center justify-start rounded py-2.5 px-3"
      :class="{
        'bg-gray6 text-black3': !isChecked,
        'bg-blue text-white': isChecked,
      }"
    >
      <input
        :checked="isChecked"
        :type="type"
        name="checkbox"
        class="h-4 w-4"
        :value="value"
        :disabled="disabled"
        @change="onInput"
        :class="{
          rounded: type === 'checkbox',
          'rounded-full': type === 'radio',
        }"
      />
      <span class="ml-3 inline-block text-xs">{{ label }}</span>
    </div>
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },

  type: {
    type: String,
    validate: (value) => ["radio", "checkbox"].includes(value),
    default: "checkbox",
  },

  checked: {
    type: [String, Number, Array, Boolean, Object],
    default: false,
  },

  value: {
    type: [String, Number, Boolean],
    default: "",
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["changed"]);

const isChecked = computed(() => {
  if (typeof props.checked !== "boolean" || props.type === "radio") {
    if (!props.value) return false;

    if (Array.isArray(props.checked)) {
      return props.checked.includes(props.value);
    } else {
      return props.checked === props.value;
    }
  }

  return props.checked;
});

const model = computed({
  get() {
    return props.checked;
  },

  set(value) {
    emit("changed", value);
  },
});

function onInput(event) {
  const target = event.target;

  if (!event || !target) return false;

  if (Array.isArray(model.value)) {
    if (target.checked) {
      model.value = [...model.value, target.value];
    } else {
      model.value = model.value.filter((value) => value !== target.value);
    }
  } else if (target.value) {
    if (model.value !== target.value) {
      if (typeof props.value === "number") {
        model.value = Number(target.value);
      } else {
        model.value = target.value;
      }
    } else if (!target.checked) {
      model.value = "";
    }
  } else if (model.value !== target.checked) {
    model.value = target.checked;
  }
}
</script>

<style>
:root {
  --form-control-color: #0085ff;
  --form-control-disabled: #959495;
}

input[type="checkbox"],
input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before,
input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="checkbox"]:checked::before,
input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);
  color: var(--form-control-disabled);
  cursor: not-allowed;
}
</style>
