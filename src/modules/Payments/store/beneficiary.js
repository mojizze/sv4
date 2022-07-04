import { defineStore } from "pinia";
import * as Service from "../services/Beneficiary.js";

export const useBeneficiaryStore = defineStore({
  id: "BeneficiaryStore",
  state: () => {
    return {
      searchBy: null,
      limit: 10,
      page: 1,
      beneficiaries: [],
      beneficiary: null,
    };
  },

  actions: {
    async fetchAllBeneficiaries() {
      const params = {
        searchBy: this.searchBy,
        limit: this.limit,
        page: this.page,
      };

      const { beneficiaries } = await Service.index(params);
      this.beneficiaries = beneficiaries;
    },

    async fetchBeneficiary(id) {
      this.beneficiary = await Service.show(id);
    },

    async createBeneficiary(payload) {
      await Service.store(payload);

      await this.fetchBeneficiary();
    },

    async updateBeneficiary(payload, id) {
      await Service.update(payload, id);

      await this.fetchBeneficiary();
    },

    async deleteBeneficiary(id) {
      await Service.destroy(id);

      await this.fetchBeneficiary();
    },
  },
});
