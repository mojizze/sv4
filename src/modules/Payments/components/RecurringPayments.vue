<template>
  <SelectField
    class="w-full"
    :options="frequency"
    label="Frequency"
    placeholder="Select Frequency"
    v-model="/* eslint-disable vue/no-mutating-props */ form.frequency"
  />
  <div class="flex items-center justify-start">
    <div class="mr-3 w-2/4">
      <Calendar v-model="form.start_date" label="Start Date" class="w-full" />
    </div>
    <div class="w-2/4">
      <label class="text-xs">
        Payment Time
        <el-time-picker
          class="!h-[45.59px] !w-full"
          v-model="form.payment_time"
          placeholder="Arbitrary time"
          size="large"
          format="HH:mm a"
        />
      </label>
    </div>
  </div>
  <SelectField
    class="w-full"
    :options="reminder"
    label="Payment Reminder"
    placeholder="Select reminder"
    v-model="form.reminder"
  />
  <CheckBox
    v-model="endDate"
    value="true"
    class="text-sm"
    label="This payment should end on"
  />
  <div v-if="endDate" class="flex items-center justify-start">
    <div class="mr-3 w-2/4">
      <Calendar v-model="form.end_date" label="Start Date" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SelectField from "../../../components/atoms/SelectField.vue";
import CheckBox from "../../../components/atoms/CheckBox.vue";
import Calendar from "@/components/molecules/Calendar.vue";

defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const endDate = ref(false);
const reminder = ref(["12 Hours Before Payment", "24 Hours Before Payment"]);
const frequency = ref(["Everyday", "Weekly", "Monthly"]);
</script>
