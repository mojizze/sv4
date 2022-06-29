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

  getters: {
    name: (state) => {
      return `${state.user?.firstName} ${state.user?.lastName}`;
    },
  },

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

    async requestForResetOTP(payload) {
      await Service.requestPasswordChangeOTP(payload);
    },

    async loggedOutUserChangePassword(payload) {
      await Service.loggedOutUserChangePassword(payload);
    },

    async loggedInUserChangePassword(payload) {
      await Service.loggedInUserChangePassword(payload);
    },

    async verifyAccount(payload) {
      await Service.verifyAccount(payload);
    },

    async fetchUserProfile() {
      const { profile } = await Service.fetchUserProfile();
      this.user = profile;
    },

    async tourCompleted() {
      await Service.completeTour();
    },

    logout() {
      localStorage.removeItem("AuthenticationStore");
      this.user = null;
      this.access_token = null;

      location.reload();
    },
  },
});
