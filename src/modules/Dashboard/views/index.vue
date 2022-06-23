<template>
  <AuthenticatedLayout>
    <template #content>
      <div
        class="flex max-h-screen min-h-0 w-full flex-col justify-start lg:h-[calc(100vh_-_133px)] lg:flex-row"
      >
        <div
          class="sp-db-section-1 mb-6 flex w-full flex-col justify-start lg:mr-6 lg:mb-0"
        >
          <BankAccounts class="sp-db-section-1__child_1 mb-6" />
          <PaymentHistory class="sp-db-section-1__child_2 mb-0" />
          <div
            class="sp-db-section-1__child_3 mt-6 flex flex-col justify-start lg:flex-row"
          >
            <RequiresAttention class="mb-6 w-full lg:mb-0 lg:mr-6 lg:w-1/2" />
            <UpcomingPayment class="w-full lg:w-1/2" />
          </div>
        </div>
        <div class="sp-db-section-2 flex h-full w-full flex-col justify-start">
          <RecentTransaction class="sp-db-section-2__child_1 mb-6" />
          <FrequentBeneficiaries class="sp-db-section-2__child_2" />
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
.sp-db-section-1 {
  flex: 0 1 100%;

  @media only screen and (min-width: 1024px) {
    flex: 0 1 61.5%;
  }

  &__child_1 {
    flex: 0 1 auto;

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
    flex: 0 1 auto;

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
