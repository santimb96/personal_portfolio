import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
library.add(fab);
library.add(fas);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
