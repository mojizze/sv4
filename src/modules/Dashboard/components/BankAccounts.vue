<template>
  <Card title="Bank Accounts" class="h-[188px] w-full">
    <template #content>
      <div class="-mt-6 grid place-items-center">
        <Icon name="emptyFile" class="h-[77px] w-[77px]" />
        <p class="font-bold text-black5">No Accounts Added</p>
        <p class="text-xs text-gray2">
          Click on the add button to add a new account
        </p>
        <div
          class="mt-2 grid h-9 w-[204px] place-items-center rounded-lg bg-gray7"
        >
          <Icon name="add" class="text-gray3" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/atoms/Card.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>
