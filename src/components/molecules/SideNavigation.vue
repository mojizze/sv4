<template>
  <div
    class="relative flex h-full w-55 flex-col overflow-auto bg-white py-7.5 pr-4 pl-7.5 2xl:w-72"
  >
    <Icon
      name="close"
      @click="$emit('close')"
      class="absolute top-7.5 right-2 cursor-pointer lg:hidden"
    />
    <div class="flex-1 space-y-16">
      <section>
        <p class="text-xl font-bold text-blue">Logo</p>
      </section>

      <section class="">
        <p class="mb-6 text-sm text-gray2">Main Menu</p>
        <Menu :navigation="navigation" />
      </section>

      <section class="">
        <p class="mb-6 text-sm text-gray2">Others</p>
        <Menu :navigation="others" />
      </section>

      <section class="text-base">
        <div class="flex cursor-pointer list-none items-center space-y-10">
          <div
            @click="store.logout()"
            class="flex flex-1 items-center font-normal text-gray2"
          >
            <Icon class="mr-2.5 h-5 w-5" name="logout" />
            <span>Logout</span>
          </div>
        </div>
      </section>
    </div>
    <div class="my-10 flex">
      <div>
        <Avatar class="mr-2" :name="store.name" />
      </div>
      <div class="min-w-0 flex-1">
        <div class="truncate text-sm text-black1">
          The Sharply Africana vision
        </div>
        <div class="text-xs text-gray2">{{ store.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from "./Menu.vue";
import Icon from "@/components/atoms/Icon.vue";
import Avatar from "@/components/atoms/Avatar.vue";
import { MenuDetails, OtherMenuDetails } from "@/helpers/Navigation";
import { useAuthenticationStore } from "@/modules/Authentication/store";
import { ref } from "vue";

defineEmits(["close"]);

const navigation = ref(MenuDetails);

const others = ref(OtherMenuDetails);

const store = useAuthenticationStore();
</script>
