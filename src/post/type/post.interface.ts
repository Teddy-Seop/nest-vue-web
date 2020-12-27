import { IUser } from "@/types/user";
import { ILike } from "./like.interface";

export interface IPost {
  id: number;
  title: string;
  contents: string;
  writer: IUser;
  likes: ILike[];
  createdAt: Date;
}

export interface IPostList {
  id: number;
  title: string;
  contents: string;
  commentCount?: number;
  likeCount?: number;
  writer: string;
  createdAt: Date;
}

export interface ISavePost {
  id?: number;
  title: string;
  contents: string;
  userId: number;
  files: File[];
}
