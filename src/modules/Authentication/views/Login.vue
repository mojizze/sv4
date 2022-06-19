<template>
  <AuthBase>
    <template #content>
      <div class="flex flex-1 flex-col space-y-15 py-16">
        <!-- <div class="text-right">
          Don’t have an account?
          <Button label="Sign up" ghost class="text-blue" />
        </div> -->
        <div class="flex justify-center">
          <Button
            label="Individual"
            @click="accountType = 'individual'"
            size="small"
            type="light"
            :ghost="accountType !== 'individual'"
            class="py-3 px-7"
          />
          <Button
            label="Corporate"
            @click="accountType = 'corporate'"
            size="small"
            type="light"
            :ghost="accountType !== 'corporate'"
            class="py-3 px-7"
          />
        </div>
        <div class="mx-auto w-3/4 flex-1 space-y-10 overflow-auto">
          <div class="space-y-1">
            <div class="text-2xl font-semibold">Sign Up to SoftPay</div>
            <div>
              Provide details that match with a valid business document.
            </div>
          </div>
          <div class="space-y-3">
            <div class="grid grid-cols-2 gap-5">
              <TextField label="First Name" placeholderText="E.g Segun" />
              <TextField label="last Name" placeholderText="E.g Doe" />
            </div>
            <TextField label="Email" placeholderText="E.g name@domain.com" />
            <TextField
              label="Business Name"
              placeholderText="E.g SoftPay Limited"
            />
            <div>
              <label class="text-xs text-gray1"
                >Business Type
                <SelectField
                  :options="BUSINESS_OPTIONS"
                  placeholderText="E.g name@domain.com"
                />
              </label>
            </div>
            <TextField
              type="tel"
              label="Business Name"
              placeholderText="E.g SoftPay Limited"
            />
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
import { ref, watch } from "vue";

const accountType = ref("individual");

const BUSINESS_OPTIONS = [
  { label: "Agriculture", value: "agriculture" },
  { label: "Art & Culture", value: "art_culture" },
  { label: "Cloud Management", value: "cloud_management" },
  { label: "Content Creator", value: "content_creator" },
];

watch(accountType, (type) => {
  console.log(type);
});
</script>
