<template>
  <AuthBase>
    <template #content>
      <div
        class="mx-auto flex min-h-0 w-11/12 flex-1 flex-col overflow-hidden py-5 lg:w-[420px] lg:py-16"
      >
        <div class="mb-8.5 flex justify-center">
          <Button
            label="Individual"
            @click="accountType = 'individual'"
            size="small"
            type="light"
            :ghost="accountType !== 'individual'"
            class="px-7 py-3"
            :class="{
              'font-bold text-blue': accountType === 'individual',
              'font-normal text-gray1': accountType !== 'individual',
            }"
          />
          <Button
            label="Corporate"
            @click="accountType = 'corporate'"
            size="small"
            type="light"
            :ghost="accountType !== 'corporate'"
            class="px-7 py-3"
            :class="{
              'font-bold text-blue': accountType === 'corporate',
              'font-normal text-gray1': accountType !== 'corporate',
            }"
          />
        </div>
        <div class="mb-8 space-y-1">
          <div class="text-2xl font-semibold text-black1">
            Sign Up to SoftPay
          </div>
          <div class="text-gray1">
            Provide details that match with a valid business document.
          </div>
        </div>
        <div class="flex min-h-0 w-full flex-1 flex-col overflow-auto">
          <div
            class="flex w-[calc(100%_-_34px)] flex-col space-y-10 lg:w-[386px]"
          >
            <div class="space-y-3 text-black1">
              <div class="grid-cols-2 gap-5 lg:grid">
                <TextField
                  v-model="form.firstName"
                  label="First Name"
                  placeholderText="E.g Segun"
                />

                <TextField
                  v-model="form.lastName"
                  label="Last Name"
                  placeholderText="E.g Doe"
                />
              </div>
              <TextField
                v-model="form.email"
                label="Email"
                placeholderText="E.g name@domain.com"
              />

              <TextField
                label="Business Name"
                placeholderText="E.g SoftPay Limited"
                :class="{ hidden: accountType === 'individual' }"
              />
              <div :class="{ hidden: accountType === 'individual' }">
                <label class="text-xs text-gray1"
                  >Business Type
                  <SelectField
                    class="w-full"
                    :options="BUSINESS_OPTIONS"
                    display-property="label"
                    value-property="value"
                    v-model="form.business_type"
                  />
                </label>
              </div>
              <TextField
                type="tel"
                v-model="form.phone"
                label="Phone Number"
                placeholderText="E.g 08090008900"
              />
              <div>
                <TextField
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  placeholderText="***************"
                  @toggle-password-visibility="showPassword = !showPassword"
                  suffixIcon="eyeShow"
                  v-model="form.password"
                />
                <div class="mt-2 space-x-5 text-xs">
                  <span class="inline-flex items-center space-x-2">
                    <Icon
                      name="checkBlack"
                      :class="[
                        eightCharacterLong ? 'fill-success' : 'fill-error',
                      ]"
                    />
                    <span
                      :class="[
                        eightCharacterLong ? 'text-success' : 'text-error',
                      ]"
                      >at least 8 characters long</span
                    >
                  </span>
                  <span class="inline-flex items-center space-x-2">
                    <Icon
                      name="checkBlack"
                      :class="[
                        atLeastOneNumber ? 'fill-success' : 'fill-error',
                      ]"
                    />
                    <span
                      :class="[
                        atLeastOneNumber ? 'text-success' : 'text-error',
                      ]"
                      >at least 1 number</span
                    >
                  </span>
                </div>
              </div>
              <div class="space-y-10 pt-10">
                <CheckBox
                  v-model="form.confirm"
                  class="text-base"
                  label="I confirm that the details provided match my business details and agree to the User Agreement and Privacy Policy"
                />
                <Button
                  label="Continue"
                  :disabled="!canSubmit"
                  class="w-full"
                  @click="submit"
                />
                <div class="text-center">
                  Already have an account?
                  <Button label="Sign in" ghost class="mb-10 text-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AuthBase>
</template>

<script setup>
import AuthBase from "../components/AuthBase.vue";
import Button from "../../../components/atoms/Button.vue";
import TextField from "../../../components/atoms/TextField.vue";
import SelectField from "../../../components/atoms/SelectField.vue";
import Icon from "../../../components/atoms/Icon.vue";
import CheckBox from "../../../components/atoms/CheckBox.vue";
import { ref, watch, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";

const accountType = ref("individual");
const showPassword = ref(false);
const eightCharacterLong = ref(false);
const atLeastOneNumber = ref(false);

const form = ref({
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  phone: "",
  confirm: false,
  business_type: "",
});

const BUSINESS_OPTIONS = [
  { label: "Agriculture", value: "agriculture" },
  { label: "Art & Culture", value: "art_culture" },
  { label: "Cloud Management", value: "cloud_management" },
  { label: "Content Creator", value: "content_creator" },
];

const rules = {
  firstName: { required },
  lastName: { required },
  password: { required },
  phone: { required, numeric },
  email: { required, email },
};

const v$ = useVuelidate(rules, form);

const canSubmit = computed(() => {
  return (
    form.value.confirm &&
    eightCharacterLong &&
    atLeastOneNumber &&
    !v$.value.$invalid
  );
});

console.log(v$.value);

const submit = async () => {
  const result = await v$.value.$validate();
  console.log(result);
};

watch(
  form,
  (value) => {
    eightCharacterLong.value = value.password.length > 7;
    atLeastOneNumber.value = /\d/.test(value.password);
  },
  { deep: true }
);
</script>
