<template>
  <AuthBase>
    <template #content>
      <div class="flex min-h-0 flex-1 flex-col space-y-15 py-5 lg:py-16">
        <div class="flex justify-center">
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
        <div class="flex min-h-0 flex-1 flex-col py-5">
          <div class="mx-auto flex flex-col space-y-10 lg:w-3/4">
            <div class="space-y-1">
              <div class="text-2xl font-semibold text-black1">
                Sign Up to SoftPay
              </div>
              <div class="text-gray1">
                Provide details that match with a valid business document.
              </div>
            </div>
            <div class="space-y-3 text-black1">
              <div class="grid-cols-2 gap-5 lg:grid">
                <TextField
                  v-model="form.firstName"
                  label="First Name"
                  placeholderText="E.g Segun"
                />
                <TextField label="last Name" placeholderText="E.g Doe" />
              </div>
              <TextField label="Email" placeholderText="E.g name@domain.com" />
              <TextField
                label="Business Name"
                placeholderText="E.g SoftPay Limited"
                :class="{ hidden: accountType === 'individual' }"
              />
              <div :class="{ hidden: accountType === 'individual' }">
                <label class="text-xs text-gray1"
                  >Business Type
                  <SelectField
                    :options="BUSINESS_OPTIONS"
                    placeholderText="Select an option"
                  />
                </label>
              </div>
              <TextField
                type="tel"
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
                <div class="space-x-5 text-xs">
                  <span class="inline-flex items-center space-x-2">
                    <Icon name="checkBlack" />
                    <span>at least 8 characters long</span>
                  </span>
                  <span class="inline-flex items-center space-x-2">
                    <Icon name="checkBlack" />
                    <span>at least 1 number</span>
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
                  :disabled="!form.confirm"
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
import { ref, watch } from "vue";

const accountType = ref("individual");
const showPassword = ref(false);

const form = ref({
  firstName: "",
  password: "",
  confirm: false,
});

const BUSINESS_OPTIONS = [
  { label: "Agriculture", value: "agriculture" },
  { label: "Art & Culture", value: "art_culture" },
  { label: "Cloud Management", value: "cloud_management" },
  { label: "Content Creator", value: "content_creator" },
];

const submit = () => {};

watch(accountType, (type) => {
  console.log(type);
});
</script>
