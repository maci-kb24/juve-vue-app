import { createApp } from "vue";
import "./assets/css/app.css";

import App from "./App.vue";
import router from "./router";
import firebase from "./firebase/init";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  aliases,
  mdi,
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(firebase);

app.mount("#app");
