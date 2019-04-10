import {
  Message,
  Profile,
} from './';

export interface Conversation {
  interlocutor: Profile;
  messages: Message[];
  lastSeen?: string;
}
