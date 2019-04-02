import { Profile } from './profile.model';

export interface Post {
  photo: string;
  date: string;
  likes: number;
  author: Profile;
}
