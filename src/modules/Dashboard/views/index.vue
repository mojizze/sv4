<template>
  <AuthenticatedLayout>
    <template #content>
      <div
        class="mt-6 hidden h-full w-full flex-col justify-start lg:flex lg:h-[calc(100vh_-_133px)] lg:flex-row"
      >
        <div class="sp-db-section-1 mr-6 flex w-full flex-col justify-start">
          <BankAccounts class="sp-db-section-1__child_1 mb-6" />
          <PaymentHistory class="sp-db-section-1__child_2 mb-0" />
          <div class="sp-db-section-1__child_3 mt-6 flex justify-start">
            <RequiresAttention class="mr-6 w-1/2" />
            <UpcomingPayment class="w-1/2" />
          </div>
        </div>
        <div class="sp-db-section-2 mb-0 flex w-full flex-col justify-start">
          <RecentTransaction class="sp-db-section-2__child_1 mb-6" />
          <FrequentBeneficiaries class="sp-db-section-2__child_2 mb-0" />
        </div>
      </div>

      <div class="mt-6 flex h-full w-full flex-col justify-start lg:hidden">
        <BankAccounts class="sp-db-section-1__child_1 mb-6" />
        <PaymentHistory class="mb-6 max-h-full min-h-0" />
        <RequiresAttention class="mb-6 w-full" />
        <UpcomingPayment class="mb-6 w-full" />
        <RecentTransaction class="sp-db-section-2__child_1 mb-6" />
        <FrequentBeneficiaries class="sp-db-section-2__child_2 mb-6 lg:mb-0" />
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

<style lang="scss">
.sp-db-section-1 {
  flex: 0 1 100%;

  @media only screen and (min-width: 1024px) {
    flex: 0 1 61.5%;
  }

  &__child_1 {
    flex: 0 1 100%;

    @media only screen and (min-width: 1024px) {
      flex: 0 1 25%;
    }
  }

  &__child_2 {
    //flex: 0 1 100%;

    @media only screen and (min-width: 1024px) {
      flex: 0 1 51%;
    }
  }

  &__child_3 {
    flex: 0 1 100%;

    @media only screen and (min-width: 1024px) {
      flex: 0 1 24%;
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
}
</style>
