import { IUser } from "./user";
import { IPost } from "../post/type/post.interface";

export interface IComment {
  id: number;
  comment: string;
  postsId: number;
  userId: number;
  user: IUser;
  post: IPost;
  createdAt: Date;
}
