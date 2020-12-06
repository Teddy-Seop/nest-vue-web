import { RouteConfig } from "vue-router";

import Login from "./Login.vue";

const router: RouteConfig[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { requireAuth: false }
  }
];

export default router;
