import Axios from "axios";

import { IUser } from "@/types/user";
import router from "@/router";

const actions = {
  login: (context: any, user: IUser) => {
    return Axios.post(`http://localhost:3000/user/login`, user)
      .then((res) => res.data)
      .catch((error) => {
        alert("Fail Login");
      });
  },
};

export default {
  actions,
};
