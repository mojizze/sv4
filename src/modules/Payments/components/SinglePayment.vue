<template>
  <SelectField
    class="w-full"
    :options="store.selectBeneficiaries"
    :placeholder="placeHolder"
    display-property="name"
    value-property="value"
    v-model="/* eslint-disable vue/no-mutating-props */ beneficiary"
  />

  <SelectField
    class="w-full"
    :options="commonStore.bank.banks"
    :disable="!!form.bank_name"
    placeholder="Select Bank"
    display-property="name"
    value-property="id"
    v-model="form.bank_name"
    label="Bank Name"
  />

  <TextField
    type="tel"
    v-model="form.account_number"
    label="Account Number"
    :disable="!!form.account_number"
    placeholderText="Enter Account Number"
  />

  <TextField
    v-model="form.account_name"
    label="Account Name"
    :disable="!!form.account_name"
    placeholderText="Enter Account Name"
  />

  <TextField
    type="number"
    v-model="form.amount"
    label="Amount"
    placeholderText="Enter Amount"
  />

  <TextField v-model="form.memo" label="Memo" placeholderText="Enter Amount" />

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
/* eslint-disable vue/no-mutating-props */
import SelectField from "../../../components/atoms/SelectField.vue";
import TextField from "../../../components/atoms/TextField.vue";
import CheckField from "../../../components/atoms/CheckField.vue";
import CheckBox from "../../../components/atoms/CheckBox.vue";
import RecurringPayments from "../components/RecurringPayments.vue";
import { useBeneficiaryStore } from "@/modules/Payments/store/beneficiary";
import { useCommonStore } from "@/modules/Common/store";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const isRecurring = ref(false);
const placeHolder = ref("Loading...");
const store = useBeneficiaryStore();
const commonStore = useCommonStore();
const beneficiary = ref(null);
const selectedBeneficiary = ref(null);

onMounted(async () => {
  await store.fetchAllBeneficiaries();
  await commonStore.fetchPaginatedBanks();
  placeHolder.value = "Select a beneficiary";
});

watch(beneficiary, (value) => {
  if (value) {
    selectedBeneficiary.value = store.beneficiaries.find(
      (item) => item.id === beneficiary.value
    );

    props.form.account_number = selectedBeneficiary.value.accountNumber;
    props.form.bank_name = selectedBeneficiary.value.bankCode;
  }
});
</script>
