import Vue from "vue";
import Vuex from "vuex";

import posts from "@/store/modules/posts";
import user from "@/store/modules/user";
import likes from "@/store/modules/likes"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    posts,
    likes,
  },
});
