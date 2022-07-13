<template>
  <ul class="flex w-full justify-start">
    <li class="cursor-pointer">
      <div class="flex items-center justify-start">
        <Icon :name="account.icon" class="h-6 w-6" />
        <div class="ml-2">
          <p :title="account.bank" class="truncate text-sm text-black1">
            {{ account.bank }}
          </p>
          <p :title="account.account" class="truncate text-2xs text-gray2">
            {{ account.account }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/components/atoms/Icon.vue";

defineProps({
  account: {
    type: Object,
    required: true,
  },
});
</script>
