import { RouteConfig } from "vue-router";

import Mypage from "./Mypage.vue";

const router: RouteConfig[] = [
  {
    path: "/mypage",
    name: "MyPage",
    component: Mypage
  }
];

export default router;
