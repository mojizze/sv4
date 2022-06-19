<template>
  <Listbox v-slot="{ open }" v-model="selectedValue">
    <div class="relative mt-1">
      <ListboxButton
        class="relative h-12 w-full cursor-default rounded-lg border border-gray5 bg-white py-2 pr-10 pl-3 text-left text-xs text-black1 focus:outline-none"
      >
        <span v-if="selectedValue" class="block truncate">{{
          selectedValue[displayProperty]
        }}</span>
        <span v-else class="block truncate">{{ placeholder }}</span>
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
            class="absolute z-10 mt-1 w-full rounded border border-teal1 bg-white pb-1 text-base shadow-md focus:outline-none sm:text-sm"
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
                :key="option[valueProperty]"
                :value="option"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-teal1' : 'text-black',
                    'relative cursor-pointer select-none py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ option[displayProperty] }}</span
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
import { computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/solid";
import TextField from "@/components/atoms/TextField.vue";
import Icon from "./Icon.vue";
import { find } from "lodash";

const props = defineProps({
  displayProperty: {
    type: String,
    default: "id",
  },

  valueProperty: {
    type: String,
    default: "id",
  },

  placeholder: {
    type: String,
    default: "Make a selection",
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
    return find(props.options, { [props.valueProperty]: props.modelValue });
  },
  set(value) {
    emit("update:modelValue", value[props.valueProperty]);
  },
});
</script>
