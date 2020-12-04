import Axios from "axios";
import { IPost } from "@/post/type/post.interface";

const actions = {
  likePost: (context: any, { userId, postsId }: any) => {
    return Axios.post(`http://localhost:3000/likes`, {
      userId: userId,
      postsId: postsId
    });
  },
  unlikePost: (context: any, { userId, postsId }: any) => {
    return Axios.delete(`http://localhost:3000/likes/${postsId}/${userId}`);
  }
};

export default {
  actions
};
