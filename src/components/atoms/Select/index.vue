<template>
  <div class="min-w-[70px]" :style="{ width: `${width}px` }">
    <Listbox v-model="selectedPerson">
      <div class="relative">
        <ListboxButton
          class="flex w-full cursor-default justify-between rounded-lg border border-gray6 bg-white p-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-sm"
        >
          <span class="flex flex-1 justify-center truncate">{{
            selectedPerson
          }}</span>
          <span
            class="pointer-events-none inset-y-0 right-0 ml-1 flex items-center"
          >
            <SelectorIcon class="h-5 text-gray2" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray6 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-gray7' : 'text-gray-900',
                  selected
                    ? 'border-l-2 border-l-blue font-medium text-blue'
                    : 'font-normal',
                  'relative cursor-default select-none p-2',
                ]"
              >
                <span :class="['block truncate']">{{ option.label }}</span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { SelectorIcon } from "@heroicons/vue/solid";

const props = defineProps({
  options: Array,
  width: {
    type: Number,
  },
});
const selectedPerson = ref(props.options[0].value);
</script>
