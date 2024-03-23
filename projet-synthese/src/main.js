import { createApp } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import App from "./App.vue";
import router from "./router";

library.add(faUser, faClock);

const app = createApp(App);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");
