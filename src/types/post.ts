import { IUser } from "@/types/user";

export interface IPost {
  id: number;
  title: string;
  contents: string;
  user: IUser;
  createdAt: Date;
}
