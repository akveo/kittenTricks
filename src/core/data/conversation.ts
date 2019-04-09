import { Conversation } from '@src/core/model';
import {
  profile1,
  profile2,
  profile3,
  profile4,
} from './profile';
import {
  message1,
  message2,
  message3,
  message4,
} from './message';

export const conversation1: Conversation = {
  interlocutor: profile1,
  messages: [message1],
};

export const conversation2: Conversation = {
  interlocutor: profile2,
  messages: [message2],
};

export const conversation3: Conversation = {
  interlocutor: profile3,
  messages: [message3],
};

export const conversation4: Conversation = {
  interlocutor: profile4,
  messages: [message4],
};
