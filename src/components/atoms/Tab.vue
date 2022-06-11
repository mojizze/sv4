<template>
  <ul class="flex w-full justify-start" v-if="type === 'simple'">
    <li
      v-for="tab in tabs"
      :key="tab.key"
      class="cursor-pointer border-b-2 p-6"
      @click="$emit('update:currentTab', tab.key)"
      :class="{
        'border-b-deepblue font-medium text-deepblue': selected === tab.key,
        'border-b-[#F1F7FA] text-gray2': selected !== tab.key,
      }"
      style="flex: 0 1 50%"
    >
      {{ tab.name }}
    </li>
  </ul>
  <ul
    class="flex w-full justify-start border-b-2 border-b-[#F1F7FA]"
    v-if="type === 'complex'"
  >
    <li
      v-for="tab in tabs"
      :key="tab.key"
      class="mr-12 cursor-pointer p-4"
      @click="$emit('update:currentTab', tab.key)"
      :class="{
        'border-b-2 border-b-deepblue': selected === tab.key,
      }"
    >
      <div class="flex items-center justify-start">
        <img :src="imageUrl(tab.img)" alt="" class="mr-3" />
        <div>
          <p class="text-2xs text-black1">{{ tab.primary_title }}</p>
          <p class="text-2xs font-bold text-black1">
            {{ tab.secondary_title }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },

  selected: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: "simple",
    validator(value) {
      return ["simple", "complex"].includes(value);
    },
  },
});

defineEmits(["update:currentTab"]);

function imageUrl(url) {
  return new URL(url, import.meta.url).href;
}
</script>
