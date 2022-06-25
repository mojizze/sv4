<template>
  <AuthenticatedLayout>
    <template #content>
      <div class="mt-6 flex max-h-screen w-full flex-1 flex-col overflow-auto">
        <div
          class="grid h-full gap-6 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-12"
        >
          <BankAccounts
            class="col-span-2 row-auto lg:col-span-4 lg:row-start-1 lg:row-end-5"
          />
          <PaymentHistory
            class="col-span-2 row-auto lg:col-span-4 lg:row-start-5 lg:row-end-10"
          />
          <RecentTransaction
            class="col-span-2 row-auto md:col-span-1 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-8"
          />
          <FrequentBeneficiaries
            class="col-span-2 row-auto md:col-span-1 lg:col-start-5 lg:col-end-7 lg:row-start-8 lg:row-end-13"
          />
          <RequiresAttention
            class="col-span-2 row-auto md:col-span-1 lg:col-start-1 lg:col-end-3 lg:row-start-10 lg:row-end-13"
          />
          <UpcomingPayment
            class="col-span-2 row-auto md:col-span-1 lg:col-start-3 lg:col-end-5 lg:row-start-10 lg:row-end-13"
          />
        </div>
      </div>
    </template>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/components/organisms/AuthenticatedLayout.vue";
import BankAccounts from "../components/BankAccounts.vue";
import RecentTransaction from "../components/RecentTransactions.vue";
import FrequentBeneficiaries from "../components/FrequentBeneficiaries.vue";
import PaymentHistory from "../components/PaymentHistory.vue";
import RequiresAttention from "../components/RequiresAttention.vue";
import UpcomingPayment from "../components/UpcomingPayment.vue";
</script>

<style lang="scss">
/* .sp-db-section-1 {
  flex: 0 1 100%;

  @media only screen and (min-width: 1024px) {
    flex: 0 1 61.5%;
  }

  &__child_1 {
    flex: 0 1 auto;

    @media only screen and (min-width: 1024px) {
      flex: 0 1 24%;
    }
  }

  &__child_2 {
    flex: 0 1 100%;

    @media only screen and (min-width: 1024px) {
      flex: 0 1 50%;
    }
  }

  &__child_3 {
    flex: 0 1 auto;

    @media only screen and (min-width: 1024px) {
      flex: 0 1 23%;
    }
  }
}

.sp-db-section-2 {
  flex: 0 1 100%;

  @media only screen and (min-width: 1024px) {
    flex: 0 1 37.7%;
  }
}

.sp-db-section-2__child_1 {
  flex: 0 1 100%;

  @media only screen and (min-width: 1024px) {
    flex: 0 1 52%;
  }
}

.sp-db-section-2__child_2 {
  flex: 0 1 100%;

  @media only screen and (min-width: 1024px) {
    flex: 0 1 47%;
  }
} */
</style>
