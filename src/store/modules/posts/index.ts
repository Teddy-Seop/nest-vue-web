import Axios from "axios";

const actions = {
  getPosts: (context: any, text?: string) => {
    return Axios.get(`http://localhost:3000/posts/`).then((res) => res.data);
  },

  getPost: (context: any, id: number) => {
    return Axios.get(`http://localhost:3000/posts/${id}`).then((res) => res.data);
  },

  submitPost: (context: any, post: any) => {
    return Axios.post(`http://localhost:3000/posts/`, post);
  },
};

export default {
  actions,
};
