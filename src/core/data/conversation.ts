import { Conversation } from '@src/core/model';
import {
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
  profile9,
  profile10,
  profile1,
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
  interlocutor: profile7,
  messages: [message1],
};

export const conversation2: Conversation = {
  interlocutor: profile8,
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
  interlocutor: profile9,
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
  interlocutor: profile9,
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

export const conversation7: Conversation = {
  interlocutor: profile5,
  lastSeen: 'just now',
  messages: [
    message21,
  ],
};

export const conversation8: Conversation = {
  interlocutor: profile6,
  lastSeen: 'just now',
  messages: [
    message16,
  ],
};

export const conversation9: Conversation = {
  interlocutor: profile1,
  lastSeen: 'just now',
  messages: [
    message14,
  ],
};

export const conversation10: Conversation = {
  interlocutor: profile2,
  lastSeen: 'just now',
  messages: [
    message13,
  ],
};

export const conversation11: Conversation = {
  interlocutor: profile9,
  lastSeen: 'just now',
  messages: [
    message11,
  ],
};

export const conversation12: Conversation = {
  interlocutor: profile10,
  lastSeen: 'just now',
  messages: [
    message17,
  ],
};
