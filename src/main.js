import { createApp } from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import "./assets/css/index.css";
import router from "./router";
import Vue3Transitions from "vue3-transitions";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(PiniaVuePlugin);
app.use(router);
app.use(Vue3Transitions);
app.use(ElementPlus);

const options = {
  hideProgressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
  showCloseButtonOnHover: true,
  timeout: 10000,
};

app.use(Toast, options);
app.mount("#app");
