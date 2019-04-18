import {
  profile1,
  profile2,
  profile3,
  profile4,
} from './profile';
import { Message } from '@src/core/model';
import {
  file1,
  file2,
} from '@src/core/data/file';

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
  text: 'Hello! How are you?',
  date: '4:00 PM',
  read: true,
  delivered: true,
};

export const message12: Message = {
  author: profile2,
  text: 'Hey! I\'m fine. Thanks! And you?',
  date: '4:15 PM',
  read: true,
  delivered: true,
};

export const message13: Message = {
  author: profile1,
  text: 'I\'m fine too! Thanks!',
  date: '4:19 PM',
  read: true,
  delivered: true,
};

export const message14: Message = {
  author: profile1,
  text: 'Do you have any plans today?',
  date: '4:20 PM',
  read: true,
  delivered: true,
};

export const message15: Message = {
  author: profile2,
  text: 'Yes. I\'m gonna go to the cinema. Do you wanna come with me?',
  date: '4:25 PM',
  read: true,
  delivered: true,
};

export const message16: Message = {
  author: profile1,
  text: 'Yes, sure.',
  date: '4:28 PM',
  read: true,
  delivered: true,
};

export const message17: Message = {
  author: profile2,
  text: 'OK! See you then)',
  date: '4:30 PM',
  read: true,
  delivered: true,
};

export const message21: Message = {
  author: profile1,
  text: 'I\'m walking with my dogs',
  date: '4:31 PM',
  read: true,
  delivered: true,
};

export const message22: Message = {
  author: profile2,
  date: '4:32 PM',
  file: file1,
  read: true,
  delivered: true,
};

export const message23: Message = {
  author: profile1,
  date: '4:33 PM',
  file: file2,
  read: true,
  delivered: true,
};

export const message24: Message = {
  author: profile2,
  date: '4:34 PM',
  text: 'Oh they\'re so sweet! Can I join you and walk together?',
  read: true,
  delivered: true,
};
