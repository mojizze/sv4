<template>
  <el-drawer
    modal-class="bg-black1/50"
    custom-class="!bg-teal2"
    :with-header="false"
    v-model="visible"
  >
    <div
      class="relative flex w-full flex-col items-center justify-center justify-items-center space-y-5 p-2"
    >
      <span
        class="absolute right-0 top-0 mt-6 block cursor-pointer"
        @click="visible = true"
      >
        <Icon name="close" />
      </span>
      <span
        v-if="statement.type === 'single'"
        class="block w-full text-center font-bold text-black1"
        >Single Payment Details</span
      >

      <span v-else class="block w-full text-center font-bold text-black1"
        >Bulk Payment Details</span
      >

      <div
        class="grid w-full justify-items-center space-y-2.5 rounded bg-white p-7"
      >
        <Avatar name="John Doe" size="normal" />
        <span class="text-sm text-black1">Payment Group 1</span>
        <span class="text-xs text-gray3">Transport Expenses</span>
        <span class="text-lg font-bold text-black1">{{
          $priceFormat(12050.15)
        }}</span>
        <div>
          <span class="flex items-center text-xs text-gray3">
            Sent from
            <span class="inline-block">
              <Icon name="wema" class="mx-2 h-4 w-4" />
            </span>
            ALAT by Wema - 1023458967
          </span>
        </div>
      </div>
      <div class="mt-3 w-full space-y-2.5 rounded bg-white p-4">
        <span class="text-sm font-bold text-black">Transaction Details</span>
        <div v-if="statement.type === 'single'" class="mt-4 space-y-6">
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Date</span>
            <span class="text-black1">{{ $timeFormat() }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Amount</span>
            <span class="text-black1">{{ $priceFormat(12000) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Fee</span>
            <span class="text-black1">{{ $priceFormat(50.15) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Account Number</span>
            <span class="text-black1">{{ statement.account.account }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Receiver's Name</span>
            <span class="text-black1">{{ statement.account.account }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Bank Name</span>
            <span class="text-black1">{{ statement.account.bank }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Transaction ID</span>
            <span class="text-black1">80458RE35556dt23444</span>
          </div>
        </div>
        <div v-if="statement.type === 'bulk'" class="mt-4 space-y-6">
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Date</span>
            <span class="text-black1">{{ $timeFormat() }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Amount</span>
            <span class="text-black1">{{ $priceFormat(12000) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Fee</span>
            <span class="text-black1">{{ $priceFormat(50.15) }}</span>
          </div>
          <span class="my-4 block font-bold text-black">Recipient</span>
          <div class="flex items-center justify-between text-sm">
            <div class="flex flex-col text-black1">
              <span class="block">Layor Salami</span>
              <span class="block text-xs">0937162583 Access Bank</span>
            </div>
            <span class="text-black1">{{ $priceFormat(1000345) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <div class="flex flex-col text-black1">
              <span class="block">Layor Salami</span>
              <span class="block text-xs">0937162583 Access Bank</span>
            </div>
            <span class="text-black1">{{ $priceFormat(1000345) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray3">Transaction ID</span>
            <span class="text-black1">80458RE35556dt23444</span>
          </div>
        </div>
      </div>
      <Button label="Download PDF" class="text-sm" />
      <div class="text-2xs">
        Have issues with this payment?
        <span class="text-blue">Report transaction</span>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { computed } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import Avatar from "@/components/atoms/Avatar.vue";
import Button from "@/components/atoms/Button.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  statement: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["visible:update"]);

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("visible:update", value);
  },
});
</script>

<style>
.el-overlay {
  @apply bg-black1/50;
}
</style>
