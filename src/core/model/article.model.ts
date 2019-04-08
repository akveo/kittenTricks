import { Profile } from './profile.model';
import { Comment } from '@src/core/model/comment.model';

export interface Article {
  title: string;
  description: string;
  content: string;
  image: string;
  author: Profile;
  date: string;
  tips: number;
  comments: Comment[];
  likes: number;
}
