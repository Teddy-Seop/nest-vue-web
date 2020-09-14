import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Mypage from "../views/Mypage.vue";
import Write from '@/components/Write.vue';
import Post from '@/components/Post.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // views
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
  },

  // components
  {
    path: "/write",
    name: "Write",
    component: Write,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
