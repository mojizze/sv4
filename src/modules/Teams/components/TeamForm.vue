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
      v-model="form.email"
      type="email"
      label="Email"
      placeholderText="E.g name@domain.com"
      :error-text="
        individualValidation.lastName.$errors[0] &&
        individualValidation.lastName.$errors[0].$message
      "
    />
    <div>
      <label class="text-xs text-gray1"
        >Assign Role
        <el-select
          class="w-full"
          placeholder="Select role"
          size="large"
          clearable
          v-model="form.role"
        >
          <el-option
            v-for="item in ROLE_OPTIONS"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </label>
    </div>
    <div class="text-center">
      <Button label="Send Invite" class="mt-10 w-fit px-24" @click="submit" />
    </div>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import TextField from "@components/atoms/TextField.vue";
import Button from "@components/atoms/Button.vue";
import { ref } from "vue";

const ROLE_OPTIONS = [
  { label: "Owner", value: "owner" },
  { label: "Admin", value: "admin" },
  { label: "Member", value: "member" },
];

const form = ref({
  role: "",
});
const individualRules = {
  firstName: { required },
  lastName: { required },
};
const individualValidation = useVuelidate(individualRules, form);
</script>

<style lang="scss" scoped></style>
