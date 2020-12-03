import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/login/Login.vue";
import Main from "@/views/Main.vue";
import Home from "@/views/Home.vue";
import List from "@/post/component/List.vue";
import Mypage from "@/mypage/Mypage.vue";
import Write from "@/post/component/Write.vue";
import Post from "@/post/component/Post.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { requireAuth: false }
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requireAuth: false },
    children: [
      // views
      {
        path: "/main",
        name: "Main",
        component: Main
      },
      {
        path: "/list",
        name: "List",
        component: List
      },
      {
        path: "/mypage",
        name: "Mypage",
        component: Mypage
      },

      // components
      {
        path: "/write",
        name: "Write",
        component: Write
      },
      {
        path: "/post/:id",
        name: "Post",
        component: Post
      }
    ]
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
    if (
      localStorage.getItem("userId") !== null &&
      Vue.$cookies.get("access_token")
    ) {
      next("/main");
    } else {
      next();
    }
  }
});

export default router;
