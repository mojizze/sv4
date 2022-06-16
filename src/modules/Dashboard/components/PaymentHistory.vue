<template>
  <Card title="Payment History" class="relative h-[348px] w-full">
    <template #content>
      <div
        class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
      >
        <div class="grid place-items-center">
          <Icon name="emptyFile" class="h-[116px] w-[116px]" />
          <p class="mt-2 font-bold text-black5">No record to display</p>
          <p class="mt-2 text-xs text-gray2">
            Click on send payment to make payment
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
