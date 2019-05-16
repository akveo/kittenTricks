import { Profile } from './profile.model';
import { Message } from './message.model';

export interface Conversation {
  interlocutor: Profile;
  messages: Message[];
  lastSeen?: string;
}
