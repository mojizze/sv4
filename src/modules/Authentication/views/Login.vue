<template>
  <AuthBase>
    <template #content>
      <div class="flex flex-1 items-center justify-center px-10 py-5">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="flex w-full flex-col space-y-10">
            <Header
              title="Login To SoftPay"
              subtitle="Enter login detail to access account."
            />
            <div class="space-y-3">
              <TextField
                v-if="showPhoneNumber"
                type="tel"
                label="Phone Number"
                v-model="formData.uid"
                placeholderText="E.g 08090008900"
                :error-text="v$.uid.$errors[0] && v$.uid.$errors[0].$message"
              />
              <TextField
                v-else
                v-model="formData.uid"
                label="Email"
                placeholderText="E.g name@domain.com"
                :error-text="v$.uid.$errors[0] && v$.uid.$errors[0].$message"
              />
              <Button
                v-if="showPhoneNumber"
                icon="email"
                label="Use email address instead"
                class="text-xs font-light text-blue decoration-solid"
                size="tiny"
                @click="toggleUid"
                ghost
              />
              <Button
                v-else
                icon="call"
                label="Use phone number instead"
                class="text-xs font-light text-blue decoration-solid"
                size="tiny"
                @click="toggleUid"
                ghost
              />
              <TextField
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                placeholderText="***************"
                @toggle-password-visibility="showPassword = !showPassword"
                suffixIcon="eyeShow"
                v-model="formData.password"
                :error-text="
                  v$.password.$errors[0] && v$.password.$errors[0].$message
                "
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
                <Button
                  label="Continue"
                  :loading="loading"
                  class="w-full"
                  @click="submit"
                />
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
import Header from "../components/Header.vue";
import Button from "../../../components/atoms/Button.vue";
import TextField from "../../../components/atoms/TextField.vue";
import CheckBox from "../../../components/atoms/CheckBox.vue";
import { ref } from "vue";
import { useAuthenticationStore } from "@/modules/Authentication/store";
import { email, required, numeric } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
const toast = useToast();
const { push } = useRouter();

const showPhoneNumber = ref(false);
const showPassword = ref(false);
const authenticationStore = useAuthenticationStore();
const loading = ref(false);

const formData = ref({
  password: "",
  uid: "",
  confirm: false,
});

const rules = {
  password: { required },
  uid: showPhoneNumber.value ? { required, numeric } : { email, required },
};

const v$ = useVuelidate(rules, formData);

const submit = async () => {
  loading.value = true;
  try {
    const result = await v$.value.$validate();
    if (result) {
      await authenticationStore.login(formData.value);
      await authenticationStore.fetchUserProfile();
      toast.success("Login Successful");
      await push("/dashboard");
    }
    loading.value = false;
  } catch (e) {
    loading.value = false;
    toast.error(
      e?.message ? e?.message : "Login was not successful, pleas try again."
    );
  }
};

function toggleUid() {
  showPhoneNumber.value = !showPhoneNumber.value;
  formData.value.uid = "";
}
</script>
