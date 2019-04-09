import { Profile } from './profile.model';

export interface Message {
  author: Profile;
  text: string;
  date: string;
  read: boolean;
  delivered: boolean;
}
