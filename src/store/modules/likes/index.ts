import Axios from "axios";
import { IPost } from '@/types/post';

const actions = {
  likePost: (context: any, { userId, postsId }: any) => {
    return Axios.post(`http://localhost:3000/likes`, { userId: userId, postsId: postsId });
  }
};

export default {
  actions,
};
