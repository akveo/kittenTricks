import { Profile } from './profile.model';
import { File } from './file.model';

export interface Message {
  author: Profile;
  text?: string;
  file?: File;
  date: string;
  read: boolean;
  delivered: boolean;
}
