<template>
  <FloatingPanel
    :model-value="visible"
    tablet-size="75%"
    @visible:update="$emit('visible:update')"
  >
    <template #content>
      <div class="mt-10 flex justify-start p-2 lg:mt-20">
        <ul
          class="h-22.5 w-2/6 cursor-pointer border-l border-gray5 text-gray2"
        >
          <li
            @click="() => (tabView = 'single')"
            :class="
              tabView === 'single'
                ? 'border-l border-blue font-bold text-blue'
                : ''
            "
            class="block h-[25px] pl-3"
          >
            Single Payment
          </li>
          <li
            @click="() => (tabView = 'bulk')"
            :class="
              tabView === 'bulk'
                ? 'border-l border-blue font-bold text-blue'
                : ''
            "
            class="mt-9 h-[25px] pl-3"
          >
            Bulk Payment
          </li>
        </ul>
        <div class="w-4/6 pr-12">
          <div class="space-y-5 text-center">
            <el-avatar :size="56" class="!bg-[#C2E2FF]">
              <Icon name="send" class="h-6 w-6 text-blue" />
            </el-avatar>
            <div class="text-lg font-semibold text-black1">
              {{ tabView === "single" ? "Single Payment" : "Bulk Payment" }}
            </div>
          </div>
          <form @submit.prevent class="mt-6 space-y-6">
            <SinglePayment v-if="tabView === 'single'" :form="singleForm" />

            <BulkPayment v-if="tabView === 'bulk'" :form="bulkForm" />

            <Button
              label="Send Payments"
              size="small"
              class="w-full"
              @click="submit"
            />
          </form>
        </div>
      </div>
    </template>
  </FloatingPanel>
</template>

<script setup>
import { computed, ref } from "vue";
import FloatingPanel from "@/components/molecules/FloatingPanel.vue";
import Icon from "@/components/atoms/Icon.vue";
import Button from "@/components/atoms/Button.vue";
import BulkPayment from "../components/BulkPayment.vue";
import SinglePayment from "../components/SinglePayment.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["visible:update"]);

const tabView = ref("single");

const bulkForm = ref({
  categoryId: null,
  source: null,
  memo: null,
  transaction_type: null,
  start_date: null,
  payment_time: null,
  reminder: null,
  frequency: null,
  end_date: null,
});

const singleForm = ref({
  bank_name: null,
  account_number: null,
  account_name: null,
  memo: null,
  amount: null,
  transaction_type: null,
  start_date: null,
  payment_time: null,
  reminder: null,
  frequency: null,
  end_date: null,
});

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("visible:update", value);
  },
});

const submit = () => {};
</script>
