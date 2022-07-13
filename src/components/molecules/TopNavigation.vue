<template>
  <SendPayments
    :model-value="visible"
    :size="632"
    @visible:update="() => (visible = false)"
  />
  <div class="sticky flex items-center justify-between">
    <div class="flex w-full items-center justify-between md:flex-1">
      <div class="hidden md:block" v-if="$route.name === 'dashboard'">
        <p class="text-xl font-bold text-black1">Welcome To Softpay</p>
        <p class="mt-2 text-gray1">{{ store.name }}. Welcome Back</p>
      </div>
      <p v-else class="text-2xl font-bold text-black1">{{ page }}</p>
    </div>
    <div class="hidden md:flex">
      <Button
        id="makePayment"
        size="large"
        label="Send Payment"
        icon="white-send"
        class="mr-6"
        @click="() => (visible = true)"
      />
      <Button size="tiny" class="mr-6 bg-white hover:text-white">
        <template #icon>
          <div class="grid place-items-center">
            <Icon
              name="notification"
              class="h-6 w-6 text-blue hover:text-white"
            />
          </div>
        </template>
      </Button>
      <Button size="tiny" class="bg-white">
        <template #icon>
          <div class="grid place-items-center">
            <Icon name="mode" class="h-6 w-6 text-blue hover:text-white" />
          </div>
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/atoms/Button.vue";
import Icon from "../atoms/Icon.vue";
import { useAuthenticationStore } from "@/modules/Authentication/store";
import SendPayments from "@/modules/Payments/components/SendPayments.vue";
import { ref } from "vue";

defineProps({
  page: {
    type: String,
    default: "Dashboard",
  },
  icon: { type: Boolean, default: false },
});

const store = useAuthenticationStore();

const visible = ref(false);
</script>
