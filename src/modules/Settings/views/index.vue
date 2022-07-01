<template>
  <div class="grid flex-1 grid-cols-4 overflow-auto bg-white">
    <div class="col-span-1 space-y-2 overflow-auto border-r border-gray5 py-10">
      <router-link
        as="div"
        :to="`/settings/${path}`"
        v-for="({ title, desc, path }, index) in MENU_ITEMS"
        :key="index"
        :class="[
          'flex cursor-pointer items-center px-10 py-5',
          { 'border-r-2 border-blue': activeMenu === path },
        ]"
        @click="activeMenu = path"
      >
        <div class="flex-1">
          <div :class="['font-semibold', { 'text-blue': activeMenu === path }]">
            {{ title }}
          </div>
          <div class="text-sm text-gray3">{{ desc }}</div>
        </div>
        <Icon name="arrowRight" />
      </router-link>
    </div>
    <div class="col-span-3 flex flex-col px-20 py-16">
      <RouterView v-slot="{ Component }">
        <FadeInOut entry="center" exit="center" :duration="300" mode="out-in">
          <component :is="Component" />
        </FadeInOut>
      </RouterView>
    </div>
  </div>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import Icon from "@components/atoms/Icon.vue";
import { ref, onMounted } from "vue";
import { FadeInOut } from "vue3-transitions";

const route = useRoute();

const activeMenu = ref("personal");

const MENU_ITEMS = [
  {
    title: "Personal Setting",
    desc: "Lorem ipsum dolor sit amet, conse, ctetur ",
    path: "personal",
  },
  {
    title: "Company Setting",
    desc: "Lorem ipsum dolor sit amet, conse, ctetur ",
    path: "company",
  },
  {
    title: "Security",
    desc: "Change password and Trannsaction PIN",
    path: "security",
  },
  {
    title: "Roles",
    desc: "Create user roles and permissions",
    path: "role",
  },
  {
    title: "Approval",
    desc: "Specify whether or not approval is required",
    path: "approval",
  },
  {
    title: "Identification Methods",
    desc: "Provide various means of identification",
    path: "identification",
  },
];

onMounted(() => {
  const currentRoute = route.path.split("/").pop();
  if (currentRoute !== "settings")
    activeMenu.value = currentRoute.toLowerCase();
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
