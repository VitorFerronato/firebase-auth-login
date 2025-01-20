import { createApp } from "vue";
import "./style.css";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "../firebaseConfig";
import App from "./App.vue";
import router from "./router/index";
import { Icon } from "@iconify/vue";

const app = createApp(App);

app.component("Icon", Icon);

app.use(router);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount("#app");
