import Axios from "axios";
import { IPost } from '@/types/post';

const actions = {
  getPosts: (context: any, text?: string) => {
    return Axios.get(`http://localhost:3000/posts/`).then((res) => res.data);
  },

  getPost: (context: any, id: number) => {
    return Axios.get(`http://localhost:3000/posts/${id}`).then((res) => res.data);
  },

  submitPost: (context: any, post: IPost) => {
    return Axios.post(`http://localhost:3000/posts/`, post);
  },

  deletePost: (context: any, id: number) => {
    return Axios.delete(`http://localhost:3000/posts/${id}`).then(res => res.data);
  },
  getMostLikes: (context: any) => {
    return Axios.get(`http://localhost:3000/posts/top/likes`).then(res => res.data);
  },
  getMostComments: (context: any) => {
    return Axios.get(`http://localhost:3000/posts/top/comments`).then(res => res.data);
  }
};

export default {
  actions,
};
