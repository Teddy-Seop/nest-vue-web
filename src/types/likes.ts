import { IPost } from './post';
import { IUser } from './user';

export interface ILikes {
    id: number;
    postId: number;
    userId: number;
}