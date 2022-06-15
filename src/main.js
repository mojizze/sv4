import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/css/index.css";
import router from "./router";
import Vue3Transitions from "vue3-transitions";

const app = createApp(App);

app.directive("loading", (el) => {
  // this will be called for both `mounted` and `updated`
  const elm = document.createElement("div");
  elm.innerHTML =
    '<span style="background-color:red;top:0;left;0">loading...</span>';
  el.append(elm);
});

app.use(createPinia());
app.use(router);
app.use(Vue3Transitions);

app.mount("#app");
