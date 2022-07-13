<template>
  <SelectField
    class="w-full"
    :options="[]"
    placeholder="Select Payment Category"
    display-property="name"
    value-property="name"
    v-model="/* eslint-disable vue/no-mutating-props */ form.categoryId"
  />

  <div class="space-y-6">
    <span class="mb-2 block font-bold text-black1">Preview</span>
    <RecipientDisplay
      name="Layor Salami"
      bank="0937162583 Access Bank"
      amount="1000345"
      :is-bold="true"
    />
    <RecipientDisplay
      name="Layor Salami"
      bank="0937162583 Access Bank"
      amount="1000345"
      :is-bold="true"
    />
  </div>

  <TextField
    type="tel"
    v-model="form.source"
    label="Fund Source"
    placeholderText="Select Text"
  />

  <TextField
    type="tel"
    v-model="form.memo"
    label="Memo"
    placeholderText="Enter Memo"
  />

  <div>
    <label class="text-xs">Transcript Type</label>
    <div class="flex justify-start">
      <CheckField
        v-model="form.transaction_type"
        :value="1"
        class="mr-3"
        type="radio"
        label="Instant"
      />
      <CheckField
        v-model="form.transaction_type"
        :value="2"
        type="radio"
        label="Schedule"
      />
    </div>
  </div>

  <CheckBox
    v-model="isRecurring"
    value="true"
    class="text-sm"
    label="This is a recurring payment"
  />

  <div v-if="isRecurring" class="space-y-5">
    <RecurringPayments :form="form" />
  </div>
</template>

<script setup>
import SelectField from "../../../components/atoms/SelectField.vue";
import TextField from "../../../components/atoms/TextField.vue";
import CheckField from "../../../components/atoms/CheckField.vue";
import CheckBox from "../../../components/atoms/CheckBox.vue";
import RecurringPayments from "../components/RecurringPayments.vue";
import RecipientDisplay from "@/components/templates/RecipientDisplay.vue";

import { ref } from "vue";

defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const isRecurring = ref(false);
</script>
