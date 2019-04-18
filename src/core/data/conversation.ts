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
  message11,
  message12,
  message13,
  message14,
  message15,
  message16,
  message17,
  message21,
  message22,
  message23,
  message24,
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

export const conversation5: Conversation = {
  interlocutor: profile2,
  lastSeen: 'just now',
  messages: [
    message11,
    message12,
    message13,
    message14,
    message15,
    message16,
    message17,
  ],
};

export const conversation6: Conversation = {
  interlocutor: profile2,
  lastSeen: 'just now',
  messages: [
    message11,
    message12,
    message13,
    message21,
    message22,
    message23,
    message24,
    message16,
  ],
};
