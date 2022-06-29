<template>
  <div class="space-y-5">
    <div class="grid-cols-2 gap-5 lg:grid">
      <TextField
        v-model="form.firstName"
        label="First Name"
        placeholderText="E.g Segun"
        :error-text="
          individualValidation.firstName.$errors[0] &&
          individualValidation.firstName.$errors[0].$message
        "
      />

      <TextField
        v-model="form.lastName"
        label="Last Name"
        placeholderText="E.g Doe"
        :error-text="
          individualValidation.lastName.$errors[0] &&
          individualValidation.lastName.$errors[0].$message
        "
      />
    </div>
    <TextField
      v-model="form.lastName"
      type="email"
      label="Last Name"
      placeholderText="E.g Doe"
      :error-text="
        individualValidation.lastName.$errors[0] &&
        individualValidation.lastName.$errors[0].$message
      "
    />
    <div>
      <label class="text-xs text-gray1"
        >Assign Role
        <SelectField
          class="w-full"
          :options="ROLE_OPTIONS"
          display-property="label"
          value-property="value"
          v-model="form.state"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import TextField from "@components/atoms/TextField.vue";
import SelectField from "@components/atoms/SelectField.vue";

const ROLE_OPTIONS = [
  { label: "Owner", value: "owner" },
  { label: "Admin", value: "admin" },
  { label: "Member", value: "member" },
];
const form = {};
const individualRules = {
  firstName: { required },
  lastName: { required },
};
const individualValidation = useVuelidate(individualRules, form);
</script>

<style lang="scss" scoped></style>
