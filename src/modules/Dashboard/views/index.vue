<template>
  <AuthenticatedLayout>
    <template #content>
      <div
        class="mt-6 grid max-h-full w-full grid-cols-1 lg:grid-cols-5 lg:gap-6"
      >
        <div class="mr-0 grid w-full lg:col-span-3 lg:flex-col">
          <BankAccounts class="mb-6" />
          <PaymentHistory class="mb-6 lg:mb-0" />
          <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            <RequiresAttention />
            <UpcomingPayment />
          </div>
        </div>
        <div class="mb-20 block w-full lg:col-span-2 lg:mb-0 lg:flex-col">
          <RecentTransaction class="mb-6" />
          <FrequentBeneficiaries class="mb-6 lg:mb-0" />
        </div>
      </div>
    </template>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/components/organisims/AuthenticatedLayout.vue";
import BankAccounts from "../components/BankAccounts.vue";
import RecentTransaction from "../components/RecentTransactions.vue";
import FrequentBeneficiaries from "../components/FrequentBeneficiaries.vue";
import PaymentHistory from "../components/PaymentHistory.vue";
import RequiresAttention from "../components/RequiresAttention.vue";
import UpcomingPayment from "../components/UpcomingPayment.vue";
</script>
