import { defineStore } from "pinia";
import * as Service from "../services/Beneficiary.js";

export const useBeneficiaryStore = defineStore({
  id: "BeneficiaryStore",
  state: () => {
    return {
      searchBy: null,
      pagination: {
        itemsPerPage: 10,
        currentPage: 1,
        totalPages: 1,
        totalItems: 1,
      },
      beneficiaries: [],
      beneficiary: null,
    };
  },

  getters: {
    selectBeneficiaries: (state) => {
      return state.beneficiaries
        .map((beneficiary) => {
          return {
            name: `${beneficiary.firstName} ${beneficiary.lastName}`,
            value: beneficiary.id,
          };
        })
        .filter((item) => item.name.trim().length > 0);
    },
  },

  actions: {
    async fetchAllBeneficiaries() {
      const params = {
        searchBy: this.searchBy,
        limit: this.pagination.itemsPerPage,
        page: this.pagination.currentPage,
      };

      const { beneficiaries } = await Service.index(params);
      this.beneficiaries = beneficiaries.items;
      this.pagination = beneficiaries.meta;
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
