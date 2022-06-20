<template>
  <Card title="Recent Transactions" class="w-full">
    <template #header>
      <span class="cursor-pointer text-xs font-bold text-blue lg:text-base"
        >View All</span
      >
    </template>
    <template #content>
      <div class="mt-4 grid h-full place-items-center lg:-mt-2">
        <div class="text-center">
          <Icon name="emptyFile" class="mx-auto h-[116px] w-[116px]" />
          <p class="mt-2 text-sm font-bold text-black5">No Accounts Added</p>
          <p class="mt-2 text-xs text-gray2">
            Click on the add button to add a new account
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/atoms/Card.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>
