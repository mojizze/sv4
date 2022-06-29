<template>
  <div class="grid flex-1 grid-cols-4 bg-white">
    <div class="col-span-1 space-y-5 border-r border-gray5 py-10">
      <div
        v-for="({ title, desc }, index) in MENU_ITEMS"
        :key="index"
        :class="[
          'flex cursor-pointer items-center px-10 py-5',
          { 'border-r-2 border-blue': activeMenu === index },
        ]"
        @click="activeMenu = index"
      >
        <div class="flex-1">
          <div
            :class="['font-semibold', { 'text-blue': activeMenu === index }]"
          >
            {{ title }}
          </div>
          <div class="text-sm text-gray3">{{ desc }}</div>
        </div>
        <Icon name="arrowRight" />
      </div>
    </div>
    <div class="col-auto">content</div>
  </div>
</template>

<script setup>
import Icon from "@components/atoms/Icon.vue";
import { ref } from "vue";

const activeMenu = ref(0);

const MENU_ITEMS = [
  {
    title: "Personal Setting",
    desc: "Lorem ipsum dolor sit amet, conse, ctetur ",
  },
  {
    title: "Company Setting",
    desc: "Lorem ipsum dolor sit amet, conse, ctetur ",
  },
  {
    title: "Security",
    desc: "Change password and Trannsaction PIN",
  },
  {
    title: "Roles",
    desc: "Create user roles and permissions",
  },
  {
    title: "Approval",
    desc: "Specify whether or not approval is required",
  },
  {
    title: "Identification Methods",
    desc: "Provide various means of identification",
  },
];
</script>

<style lang="scss" scoped></style>
