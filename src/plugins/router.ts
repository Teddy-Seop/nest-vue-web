import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import { PostRouter } from "@/post";
import { MypageRouter } from "@/mypage";
import { LoginRouter } from "@/login";
import MainRouter from "@/main/main.router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...LoginRouter,
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requireAuth: true },
    children: [...MainRouter, ...PostRouter, ...MypageRouter]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (
      localStorage.getItem("userId") === null ||
      Vue.$cookies.get("access_token") === null
    ) {
      next("/");
    } else {
      next();
    }
  } else {
    if (localStorage.getItem("userId") && Vue.$cookies.get("access_token")) {
      next("/main");
    } else {
      next();
    }
  }
});

export default router;
