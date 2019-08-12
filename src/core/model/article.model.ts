import { ImageSource } from '@src/assets/images';
import { Comment } from './comment.model';
import { Profile } from './profile.model';

export interface Article {
  title: string;
  description: string;
  content: string;
  image: ImageSource;
  author: Profile;
  date: string;
  tips: number;
  comments: Comment[];
  likes: number;
}
