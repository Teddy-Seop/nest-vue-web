import { RouteConfig } from "vue-router";

import List from "@/post/component/List.vue";
import Write from "@/post/component/Write.vue";
import Post from "@/post/component/Post.vue";

const router: RouteConfig[] = [
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post
  },
  {
    path: "/write",
    name: "Write",
    component: Write
  }
];

export default router;
