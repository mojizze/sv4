<template>
  <Card title="Recent Transactions" class="h-[388px] w-full">
    <template #header>
      <span class="cursor-pointer font-bold text-blue">View All</span>
    </template>
    <template #content>
      <div class="mt-18 grid place-items-center">
        <Icon name="emptyFile" class="h-[116px] w-[116px]" />
        <p class="mt-2 font-bold text-black5">No Accounts Added</p>
        <p class="mt-2 text-xs text-gray2">
          Click on the add button to add a new account
        </p>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/atoms/Card.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>
