import { IPost } from "../post/type/post.interface";
import { IUser } from "./user";

export interface ILikes {
  id: number;
  postId: number;
  userId: number;
}
