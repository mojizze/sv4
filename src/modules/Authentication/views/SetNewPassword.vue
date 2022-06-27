<template>
  <AuthBase baseImage="password-base">
    <template #content>
      <div class="flex flex-1 items-center justify-center px-10 py-5">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="flex w-full flex-col space-y-10">
            <Header
              title="Set New Password"
              subtitle="Choose a new password to complete process."
            />
            <div class="space-y-3">
              <TextField
                :type="showPassword ? 'text' : 'password'"
                label="OTP"
                placeholderText="***************"
                v-model="form.token"
                :error-text="
                  v$.token.$errors[0] && v$.token.$errors[0].$message
                "
              />
              <div>
                <TextField
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  placeholderText="***************"
                  @toggle-password-visibility="showPassword = !showPassword"
                  suffixIcon="eyeShow"
                  v-model="form.newPassword"
                  :error-text="
                    v$.newPassword.$errors[0] &&
                    v$.newPassword.$errors[0].$message
                  "
                />
                <div class="mt-2 space-x-5 text-xs">
                  <span class="inline-flex items-center space-x-2">
                    <Icon
                      name="checkBlack"
                      :class="[
                        eightCharacterLong
                          ? 'fill-success'
                          : form.newPassword.length > 0
                          ? 'fill-error'
                          : 'fill-gray1',
                      ]"
                    />
                    <span
                      :class="[
                        eightCharacterLong
                          ? 'text-success'
                          : form.newPassword.length > 0
                          ? 'text-error'
                          : 'text-gray1',
                      ]"
                      >at least 8 characters long</span
                    >
                  </span>
                  <span class="inline-flex items-center space-x-2">
                    <Icon
                      name="checkBlack"
                      :class="[
                        atLeastOneNumber
                          ? 'fill-success'
                          : form.newPassword.length > 0
                          ? 'fill-error'
                          : 'fill-gray1',
                      ]"
                    />
                    <span
                      :class="[
                        atLeastOneNumber
                          ? 'text-success'
                          : form.newPassword.length > 0
                          ? 'text-error'
                          : 'text-gray1',
                      ]"
                      >at least 1 number</span
                    >
                  </span>
                </div>
              </div>
              <TextField
                :type="showPassword ? 'text' : 'password'"
                label="Repeat Password"
                placeholderText="***************"
                v-model="form.confirmNewPassword"
                :error-text="
                  v$.confirmNewPassword.$errors[0] &&
                  v$.confirmNewPassword.$errors[0].$message
                "
              />
              <div class="space-y-10 pt-10">
                <Button label="Continue" class="w-full" @click="submit" />
                <div class="text-center">
                  <Button
                    label="Back to Login"
                    ghost
                    underline
                    class="text-blue"
                    @click="$router.push('/login')"
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
import Header from "../components/Header.vue";
import Button from "../../../components/atoms/Button.vue";
import TextField from "../../../components/atoms/TextField.vue";
import Icon from "../../../components/atoms/Icon.vue";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, required, numeric } from "@vuelidate/validators";
import { useAuthenticationStore } from "@/modules/Authentication/store";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const showPassword = ref(false);
const atLeastOneNumber = ref(false);
const eightCharacterLong = ref(false);
const loading = ref(false);
const store = useAuthenticationStore();
const toast = useToast();
const { push } = useRouter();

const form = ref({
  confirmNewPassword: "",
  newPassword: "",
  token: "",
});

const passwordConfirmation = (value) => value === form.value.newPassword;
const rules = {
  confirmNewPassword: {
    passwordConfirmation: helpers.withMessage(
      "This does not match your password",
      passwordConfirmation
    ),
    required,
  },
  token: { required, numeric },
  newPassword: { required },
};

const v$ = useVuelidate(rules, form);

watch(
  form,
  (value) => {
    eightCharacterLong.value = value.newPassword.length > 7;
    atLeastOneNumber.value = /\d/.test(value.newPassword);
  },
  { deep: true }
);

const submit = async () => {
  loading.value = true;
  try {
    const result = await v$.value.$validate();
    if (result) {
      await store.loggedOutUserChangePassword(form.value);
      toast.success("Check your email for an OTP");
      await push("/set-password");
    }
    loading.value = false;
  } catch (e) {
    loading.value = false;
    toast.error(
      e?.message ? e?.message : "Login was not successful, pleas try again."
    );
  }
};
</script>
