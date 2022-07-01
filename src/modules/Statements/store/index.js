import { defineStore } from "pinia";
import * as Service from "../services";

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

  actions: {
    async fetchStatements() {
      const params = {
        searchBy: this.searchBy,
        startDate: this.startDate,
        endDate: this.endDate,
        limit: this.limit,
        page: this.page,
      };

      this.statements = Service.index(params);
    },
  },
});
