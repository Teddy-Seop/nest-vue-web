import { IUser } from "@/types/user";
import { ILikes } from './likes';

export interface IPost {
  id: number;
  title: string;
  contents: string;
  user: IUser;
  likes: ILikes[];
  createdAt: Date;
}
