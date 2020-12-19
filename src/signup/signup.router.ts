import { RouteConfig } from "vue-router";

import Signup from "./signup.vue";

const router: RouteConfig[] = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { requireAuth: false }
  }
];

export default router;
