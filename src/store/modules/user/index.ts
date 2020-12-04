import Axios from "axios";

import { IUser } from "@/types/user";
import router from "@/router";

const state = {
  user: {
    id: "",
    email: "",
    accessToken: ""
  }
};

const getters = {
  getUserInfo: (state: any, getters: any, rootState: any) => {
    return state.user;
  }
};

const mutations = {
  login: (state: any, data: any) => {
    Axios.defaults.headers.common["Authorization"] = data.accessToken;
    state.user = data;
  }
};

const actions = {
  login: (context: any, user: IUser) => {
    return Axios.post(`http://localhost:3000/user/login`, user)
      .then(res => {
        context.commit("login", res.data);
      })
      .catch(error => {
        alert("Fail Login");
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
