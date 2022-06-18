import { defineStore } from "pinia";
import * as Service from "../services";
import { useToast } from "vue-toastification";

export const useAuthenticationStore = defineStore({
  state: () => ({
    user: null,
  }),

  actions: {
    async register(payload) {
      const toast = useToast();
      try {
        await Service.register(payload);
        toast.success("I am a toast");
      } catch (e) {
        toast.error(e.message);
        console.log(e);
      }
    },

    async createBusiness(payload) {
      try {
        await Service.createBusiness(payload);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
