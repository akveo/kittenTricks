import {
  profile1,
  profile2,
  profile3,
  profile4,
} from './profile';
import { Message } from '@src/core/model';

export const message1: Message = {
  author: profile1,
  text: 'Hey! How are you?',
  date: '4:30 PM',
  read: false,
  delivered: false,
};

export const message2: Message = {
  author: profile2,
  text: 'Hello! Can you send me my favourite book and something else?',
  date: '4:12 PM',
  read: true,
  delivered: true,
};

export const message3: Message = {
  author: profile3,
  text: 'No problem! It\'s fine.',
  date: '12:00 PM',
  read: false,
  delivered: false,
};

export const message4: Message = {
  author: profile4,
  text: 'I am good! Thank you. And how are you?',
  date: '12:00 PM',
  read: false,
  delivered: true,
};


export const message11: Message = {
  author: profile1,
  text: '',
  date: '',
  read: true,
  delivered: true,
};

export const message12: Message = {
  author: profile2,
  text: '',
  date: '',
  read: true,
  delivered: true,
};

export const message13: Message = {
  author: profile1,
  text: '',
  date: '',
  read: true,
  delivered: true,
};

export const message14: Message = {
  author: profile1,
  text: '',
  date: '',
  read: true,
  delivered: true,
};

export const message15: Message = {
  author: profile2,
  text: '',
  date: '',
  read: true,
  delivered: true,
};

export const message16: Message = {
  author: profile1,
  text: '',
  date: '',
  read: true,
  delivered: true,
};

export const message17: Message = {
  author: profile2,
  text: '',
  date: '',
  read: true,
  delivered: true,
};
