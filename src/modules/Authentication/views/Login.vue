<template>
  <AuthBase>
    <template #content>
      <div class="flex min-h-0 flex-1 flex-col space-y-15 py-5 lg:py-16">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="mx-auto flex flex-col space-y-10 lg:w-3/4">
            <div class="space-y-1">
              <div class="text-2xl font-medium text-black1">
                Login To SoftPay
              </div>
              <div>Enter login detail to access account.</div>
            </div>
            <div class="space-y-3">
              <TextField
                v-if="showPhoneNumber"
                type="tel"
                label="Phone Number"
                placeholderText="E.g 08090008900"
              />
              <TextField
                v-else
                label="Email"
                placeholderText="E.g name@domain.com"
              />
              <Button
                icon="call"
                :label="`Use ${
                  !showPhoneNumber ? 'phone number' : 'email'
                } instead`"
                class="text-xs font-light text-blue decoration-solid"
                size="tiny"
                @click="showPhoneNumber = !showPhoneNumber"
                ghost
              />
              <TextField
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                placeholderText="***************"
                @toggle-password-visibility="showPassword = !showPassword"
                suffixIcon="eyeShow"
                v-model="formData.password"
              />
              <CheckBox
                v-model="formData.confirm"
                class="text-base"
                label="Remember Me"
              />
              <div class="space-y-10 pt-10">
                <div class="text-center">
                  Forgot Password?
                  <Button
                    label="Reset Password"
                    ghost
                    class="text-blue"
                    underline
                    @click="$router.push('/forgot-password')"
                  />
                </div>
                <Button label="Continue" class="w-full" @click="submit" />
                <div class="text-center">
                  New user?
                  <Button
                    label="Create Account"
                    ghost
                    class="text-blue"
                    underline
                    @click="$router.push('/register')"
                  />
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
import CheckBox from "../../../components/atoms/CheckBox.vue";
import { ref } from "vue";

const showPhoneNumber = ref(false);
const showPassword = ref(false);

const formData = ref({
  password: "",
  confirm: false,
});

const submit = () => {
  console.log(formData.value);
};
</script>
