import { ILoginUser } from "./type/login.interface";

const state = {
  user: {
    id: "",
    email: "",
    name: "",
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
    state.user = data;
  }
};

const actions = {
  login: (context: any, user: ILoginUser) => {
    context.commit("login", user);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
