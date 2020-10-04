import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Axios from 'axios';
import vueCookie from 'vue-cookies';
import Vuelidate from "vuelidate";
import "@/util/util";

Vue.use(Vuelidate);
Vue.use(vueCookie);
Vue.config.productionTip = false;

Axios.defaults.headers.common['Authorization'] = Vue.$cookies.get("access_token") || '';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
