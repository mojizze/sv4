import { defineStore } from "pinia";

export const useStatementStore = defineStore({
  id: "StatementStore",
  state: () => {
    return {
      searchBy: null,
      startDate: null,
      endDate: null,
      limit: null,
      page: null,
      statements: [],
    };
  },

  actions: {},
});
