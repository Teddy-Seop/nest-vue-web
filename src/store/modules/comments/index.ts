import Axios from "axios";
import { IComment } from '@/types/comments';

const actions = {
  fetchComments: (context: any, postsId: number) => {
    return Axios.get(`http://localhost:3000/comments/${postsId}`).then(res => res.data);
  },
  writeComment: (context: any, comment: IComment) => {
    return Axios.post(`http://localhost:3000/comments`, comment);
  },
  deleteComment: (context: any, id: number) => {
    return Axios.delete(`http://localhost:3000/comments/${id}`);
  }
};

export default {
  actions,
};
