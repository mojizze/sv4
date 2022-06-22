import { defineStore } from "pinia";
import * as Service from "../services";

export const useAuthenticationStore = defineStore({
  id: "AuthenticationStore",
  state: () => {
    return {
      user: null,
      access_token: null,
      phone: null,
      email: null,
    };
  },

  persist: true,

  actions: {
    async register(payload) {
      await Service.register(payload);
    },

    async login(payload) {
      const response = await Service.login(payload);
      this.access_token = response?.jwt;
    },

    async createBusiness(payload) {
      await Service.createBusiness(payload);
    },
  },
});
