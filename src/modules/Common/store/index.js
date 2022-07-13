import { defineStore } from "pinia";
import * as Service from "../services";

export const useCommonStore = defineStore({
  id: "CommonStore",
  state: () => ({
    states: [],
    industries: [],
    bank: {
      banks: [],
      bank: null,
      limit: 5,
      page: 1,
      searchBy: null,
    },
  }),
  getters: {
    allIndustries: (state) =>
      state.industries.map((industry) => {
        return { name: industry };
      }),

    allStates: (state) =>
      state.states.map((item) => {
        return { name: item.state };
      }),

    stateLgas: (state) => {
      return (item) =>
        state.states.find((itemState) => itemState.state === item);
    },
  },
  actions: {
    async fetchStates() {
      const { statesAndLgas } = await Service.states();
      this.states = statesAndLgas;
    },

    async fetchIndustries() {
      const { industries } = await Service.industries();
      this.industries = industries;
    },

    async optionsFilter(search) {
      if (search.length === 0) {
        await this.fetchIndustries();
        return;
      }
      this.industries = this.industries.filter((industry) => {
        return industry.toLowerCase().includes(search.toLowerCase());
      });
    },

    async fetchPaginatedBanks() {
      const { items } = await Service.fetchPaginatedBanks();
      this.bank.banks = items;
    },
  },
});
