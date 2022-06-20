<template>
  <Card title="Bank Accounts">
    <template #content>
      <div class="mt-4 grid h-full place-items-center lg:-mt-2">
        <div class="text-center">
          <Icon name="emptyFile" class="mx-auto h-[77px] w-[77px]" />
          <p class="text-sm font-bold text-black5">No Accounts Added</p>
          <p class="text-xs text-gray2">
            Click on the add button to add a new account
          </p>
          <div
            class="mx-auto mt-2 grid h-9 w-[204px] place-items-center rounded-lg bg-gray7/40"
          >
            <Icon name="add" class="h-4 w-4 text-gray3" />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/atoms/Card.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>
