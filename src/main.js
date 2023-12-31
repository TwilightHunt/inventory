import "./assets/styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { vMaska } from "maska";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App).use(pinia).directive("maska", vMaska);

app.mount("#app");
