import { createApp } from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import "./assets/css/index.css";
import "v-calendar/dist/style.css";
import router from "./router";
import Vue3Transitions from "vue3-transitions";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VCalendar from "v-calendar";
import vClickOutside from "click-outside-vue3";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "v-onboarding/dist/style.css";
import Plugins from "./plugins";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
pinia.use(piniaPluginPersistedstate);
app.use(PiniaVuePlugin);
app.use(router);
app.use(Vue3Transitions);
app.use(vClickOutside);
app.use(VCalendar, {});
app.use(ElementPlus);
app.use(Plugins);

const options = {
  hideProgressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
  showCloseButtonOnHover: true,
  timeout: 10000,
};

app.use(Toast, options);
app.mount("#app");
