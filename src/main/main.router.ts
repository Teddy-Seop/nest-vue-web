import { RouteConfig } from "vue-router";
import Main from "./Main.vue";

const router: RouteConfig[] = [
  {
    path: "/main",
    name: "Main",
    component: Main
  }
];

export default router;
