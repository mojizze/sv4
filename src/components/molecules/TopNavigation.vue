<template>
  <div class="flex items-center justify-between">
    <div class="flex w-full items-center justify-between md:flex-1">
      <div class="hidden md:block" v-if="$route.name === 'dashboard'">
        <p class="text-xl font-bold text-black1">Welcome To Softpay</p>
        <p class="mt-2 text-gray1">Hi Layor Salami. Welcome Back</p>
      </div>
      <p v-else class="text-2xl font-bold text-black1">{{ page }}</p>
    </div>
    <div class="hidden md:flex">
      <Menu as="div" class="relative mr-6 inline-block text-left">
        <div>
          <MenuButton
            class="flex items-center rounded-lg bg-blue px-9 py-4.5 text-lg font-bold text-white hover:bg-deepblue"
          >
            <Icon name="white-send" class="mr-4" />
            Send Payment
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right rounded bg-white shadow focus:outline-none"
          >
            <div class="space-y-6 p-6">
              <MenuItem>
                <a href="#" class="block font-bold text-black1"
                  >Single Payment</a
                >
              </MenuItem>
              <MenuItem>
                <a href="#" class="block font-bold text-black1">Bulk Payment</a>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <Button size="tiny" class="mr-6 bg-white" icon="notification" />
      <Button size="tiny" class="bg-white" icon="mode">
        <template #icon>
          <div v-if="icon" class="grid place-items-center">
            <Icon name="mode" :fill-stroke="'text-blue'" />
          </div>
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/atoms/Button.vue";
import Icon from "../atoms/Icon.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

defineProps({
  page: {
    type: String,
    default: "Dashboard",
  },
});
</script>
