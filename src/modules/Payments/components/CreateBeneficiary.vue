<template>
  <FloatingPanel
    :custom-class="customClasses"
    :model-value="visible"
    @visible:update="$emit('@visible:update')"
  >
    <template #content>
      <div
        class="relative flex w-full flex-col items-center justify-center justify-items-center space-y-5 p-10"
      >
        <span
          class="absolute right-0 top-0 mt-6 block cursor-pointer"
          @click="visible = true"
        >
          <Icon name="close" />
        </span>

        <div class="grid justify-items-center">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#C2E2FF]"
          >
            <Icon name="add" class="h-6 w-6 text-blue" />
          </div>
          <span class="font-medium text-black1">Add a Beneficiary</span>
        </div>

        <div class="w-full space-y-6">
          <TextField
            v-model="form.firstName"
            label="First Name"
            placeholderText="E.g John"
            :error-text="
              v$.firstName.$errors[0] && v$.firstName.$errors[0].$message
            "
          />

          <TextField
            v-model="form.lastName"
            label="First Name"
            placeholderText="E.g Doe"
            :error-text="
              v$.lastName.$errors[0] && v$.lastName.$errors[0].$message
            "
          />
          <SelectField
            class="w-full"
            label="Bank Name"
            :search="true"
            :options="[]"
            display-property="name"
            value-property="name"
            v-model="form.bankCode"
            :error-text="
              v$.bankCode.$errors[0] && v$.bankCode.$errors[0].$message
            "
          />
          <TextField
            v-model="form.email"
            label="Email"
            placeholderText="john@doe.com"
            :error-text="v$.email.$errors[0] && v$.email.$errors[0].$message"
          />

          <TextField
            v-model="form.phone"
            label="Phone Number"
            placeholderText="09096191234"
            :error-text="v$.email.$errors[0] && v$.email.$errors[0].$message"
          />

          <div class="flex w-full flex-col items-center">
            <Button @click="submit" label="Save Details" class="text-sm" />
          </div>
        </div>
      </div>
    </template>
  </FloatingPanel>
</template>

<script setup>
import { computed, ref } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import TextField from "@/components/atoms/TextField.vue";
import SelectField from "@/components/atoms/SelectField.vue";
import FloatingPanel from "@/components/molecules/FloatingPanel.vue";
import useVuelidate from "@vuelidate/core";
import Button from "@/components/atoms/Button.vue";
import { required, email, numeric } from "@vuelidate/validators";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: "!bg-white",
  },
});

const emit = defineEmits(["visible:update"]);

const form = ref({
  businessId: null,
  firstName: null,
  lastName: null,
  middleName: null,
  accountNumber: null,
  bankCode: null,
  phone: null,
  email: null,
});

const rules = {
  firstName: { required },
  lastName: { required },
  accountNumber: { required, numeric },
  bankCode: { required },
  phone: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, form);

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("visible:update", value);
  },
});

async function submit() {
  const result = await v$.value.$validate();

  if (result) {
    //
  }
}
</script>
