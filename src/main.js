import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
//import fontawsome
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import bootsrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
