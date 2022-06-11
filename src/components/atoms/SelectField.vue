<template>
  <Listbox v-slot="{ open }" v-model="selectedValue">
    <div class="relative mt-1">
      <ListboxButton
        class="relative h-12 w-full cursor-default rounded-lg border border-gray5 bg-white py-2 pl-3 pr-10 text-left text-xs text-black1 focus:outline-none"
      >
        <span class="block truncate">{{ selectedValue[property] }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 grid place-items-center pr-2"
        >
          <Icon v-if="!open" name="arrow-big" aria-hidden="true" />
          <Icon
            v-else
            name="arrow-big"
            class="rotate-[180deg]"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div>
          <ListboxOptions
            class="absolute mt-1 w-full rounded border border-teal1 bg-white pb-1 text-base shadow-md focus:outline-none sm:text-sm"
          >
            <TextField
              v-if="search"
              class="w-full"
              border-radius="rounded-tr rounded-tl"
              border="border-b"
            />
            <div class="max-h-60 overflow-auto">
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="option in options"
                :key="option[property]"
                :value="option"
                as="template"
              >
                <li
                  :class="[
                    active ? 'text-amber-900 bg-teal1' : 'text-gray-900',
                    'relative cursor-pointer select-none py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ option[label] }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-deepblue"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </div>
          </ListboxOptions>
        </div>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { defineEmits, defineProps, computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/solid";
import TextField from "@/components/atoms/TextField.vue";
import Icon from "./Icon.vue";

const props = defineProps({
  property: {
    type: String,
    default: "id",
  },

  label: {
    type: String,
    default: "name",
  },

  options: {
    type: Array,
    default: () => [],
  },

  modelValue: {
    type: [Object, Array, String, Boolean, null],
    default: null,
  },

  search: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
