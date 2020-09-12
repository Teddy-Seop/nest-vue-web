import Axios from "axios";

const actions = {
  getPosts: (context: any, text?: string) => {
    const posts = [
      {
        title: "Title1",
        writer: "Writer1",
      },
      {
        title: "Title2",
        writer: "Writer2",
      },
      {
        title: "Title3",
        writer: "Writer3",
      },
    ];
    return posts;
    // return Axios.get(`/post`);
  },

  submitPost: (context: any, post: any) => {
    // return Axios.post(`/post`, post);
  },
};

export default {
  actions,
};
