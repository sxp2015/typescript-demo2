import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";

import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/dist/index.css";
const app = createApp(App);

app.use(router);
app.use(store as any);
app.use(ElementPlus as any);
app.mount("#app");