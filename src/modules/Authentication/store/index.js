import { defineStore } from "pinia";
import * as Service from "../services";
import { useToast } from "vue-toastification";

export const useAuthenticationStore = defineStore({
  id: "AuthenticationStore",
  state: () => ({
    user: null,
    loading: "",
  }),

  actions: {
    async register(payload) {
      const toast = useToast();
      try {
        await Service.register(payload);
        toast.success("I am a toast");
      } catch (e) {
        toast.error("Something went wrong");
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
