<template>
  <div>
    <Listbox :horizontal="true" v-slot="{ open }" v-model="selectedValue">
      <div class="relative mt-1">
        <ListboxButton
          class="relative flex h-12 w-full cursor-default items-center justify-start rounded border border-gray5 bg-white py-2 pr-10 pl-3 text-left text-xs text-black1 focus:outline-none"
        >
          <span
            v-if="labelPrefix.length > 0"
            class="mr-3 inline-block text-gray1/60"
            >{{ labelPrefix }}</span
          >
          <span v-if="selectedValue" class="inline-block truncate">{{
            selectedValue[displayProperty]
          }}</span>
          <span v-else class="inline-block truncate" v-html="placeholder" />
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
                v-model="query"
                @input="$emit('optionsFilter', query)"
                class="w-full"
                border-radius="rounded-tr rounded-tl"
                border="border-b"
              />
              <div class="max-h-60 overflow-auto" v-if="options.length > 0">
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
              <div v-else class="">
                <ListboxOption as="template">
                  <li class="px-4 py-2 text-xs font-bold text-black1">
                    No Data Available
                  </li>
                </ListboxOption>
              </div>
            </ListboxOptions>
          </div>
        </transition>
      </div>
    </Listbox>
    <div
      v-if="errorText"
      class="mt-1 flex w-full items-center justify-start rounded bg-[#FFD4D4] py-0.5 pl-2 text-xs text-[#DF1818]"
    >
      <Icon name="alarm" class="mr-2" />
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
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

  errorText: {
    type: String,
    default: "",
  },

  labelPrefix: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const query = ref("");

const selectedValue = computed({
  get() {
    return find(props.options, { [props.valueProperty]: props.modelValue });
  },
  set(value) {
    emit("update:modelValue", value[props.valueProperty]);
  },
});
</script>
