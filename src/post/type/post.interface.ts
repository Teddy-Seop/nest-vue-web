import { IUser } from "@/types/user";
import { ILikes } from "../../types/likes";

export interface IPost {
  id: number;
  title: string;
  contents: string;
  user: IUser;
  likes: ILikes[];
  createdAt: Date;
}

export interface IPostList {
  id: number;
  title: string;
  contents: string;
  commentCount: number;
  likeCount: number;
  writer: string;
  createdAt: Date;
}