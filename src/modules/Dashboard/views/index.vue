<template>
  <div class="mt-6 flex max-h-screen w-full flex-1 flex-col overflow-auto">
    <div
      class="grid h-full gap-6 md:grid-cols-2 xl:grid-cols-6 xl:grid-rows-12"
    >
      <BankAccounts
        class="col-span-2 row-auto xl:col-span-4 xl:row-start-1 xl:row-end-5"
      />
      <PaymentHistory
        class="col-span-2 row-auto xl:col-span-4 xl:row-start-5 xl:row-end-10"
      />
      <RecentTransaction
        class="col-span-2 row-auto md:col-span-1 xl:col-start-5 xl:col-end-7 xl:row-start-1 xl:row-end-8"
      />
      <FrequentBeneficiaries
        class="col-span-2 row-auto md:col-span-1 xl:col-start-5 xl:col-end-7 xl:row-start-8 xl:row-end-13"
      />
      <RequiresAttention
        class="col-span-2 row-auto md:col-span-1 xl:col-start-1 xl:col-end-3 xl:row-start-10 xl:row-end-13"
      />
      <UpcomingPayment
        class="col-span-2 row-auto md:col-span-1 xl:col-start-3 xl:col-end-5 xl:row-start-10 xl:row-end-13"
      />
    </div>
  </div>
</template>

<script setup>
import BankAccounts from "../components/BankAccounts.vue";
import RecentTransaction from "../components/RecentTransactions.vue";
import FrequentBeneficiaries from "../components/FrequentBeneficiaries.vue";
import PaymentHistory from "../components/PaymentHistory.vue";
import RequiresAttention from "../components/RequiresAttention.vue";
import UpcomingPayment from "../components/UpcomingPayment.vue";
</script>
