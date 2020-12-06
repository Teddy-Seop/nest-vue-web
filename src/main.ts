import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "@/plugins/router";
import vuetify from "./plugins/vuetify";
import vueCookie from "vue-cookies";
import Vuelidate from "vuelidate";
import VueApollo from "vue-apollo";
import { apolloProvider } from "./plugins/apollo";
import "@/util/util";

Vue.use(VueApollo);
Vue.use(Vuelidate);
Vue.use(vueCookie);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
