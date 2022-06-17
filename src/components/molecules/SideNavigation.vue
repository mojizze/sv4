<template>
  <div
    class="relative h-full flex-col items-center justify-between overflow-auto bg-white py-7.5 pl-7.5 pr-4"
  >
    <div class="">
      <section>
        <p class="text-xl font-bold text-blue">Logo</p>
      </section>

      <section class="mt-16 mb-7.5">
        <p class="mb-6 text-sm text-gray2">Main Menu</p>
        <Menu :navigation="navigation" />
      </section>

      <section class="mt-16">
        <p class="mb-6 text-sm text-gray2">Others</p>
        <Menu :navigation="others" />
      </section>

      <section class="mt-16">
        <MenuItem :menu="logout">
          <template #icon>
            <Icon class="mr-2.5 h-5 w-5" :name="logout.icon" />
          </template>
        </MenuItem>
      </section>
    </div>
    <div class="mt-16 flex">
      <Avatar class="mr-2" name="Layor Pan" />
      <div>
        <p class="text-sm text-black1">The Sharply Africa...</p>
        <p class="text-xs text-gray2">Layor Pan</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from "./Menu.vue";
import MenuItem from "@/components/atoms/MenuItem.vue";
import Icon from "@/components/atoms/Icon.vue";
import Avatar from "@/components/atoms/Avatar.vue";
import { MenuDetails } from "@/helpers/Navigation";
import { ref } from "vue";
const navigation = ref(MenuDetails);

const others = ref([
  {
    name: "Teams",
    link: "#",
    children: null,
    icon: "teams",
  },
  {
    name: "Settings",
    link: "#",
    children: null,
    icon: "setting",
  },
  {
    name: "Help Center",
    link: "#",
    children: null,
    icon: "help",
  },
]);

const logout = ref({
  name: "Logout",
  link: "#",
  children: null,
  icon: "logout",
});
</script>
