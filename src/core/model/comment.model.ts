import { Profile } from './profile.model';

export interface Comment {
  author: Profile;
  text: string;
  likesCount: number;
  date: string;
  comments?: Comment[];
}
