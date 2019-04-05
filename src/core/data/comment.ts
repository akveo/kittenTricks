import { Comment } from '@src/core/model';
import {
  profile1,
  profile2,
  profile3,
  profile4,
} from './profile';

export const comments: Comment[] = [
  {
    author: profile1,
    text: 'This is very useful information for me. Thanks for your article!',
    likesCount: 245,
    date: 'Today 11:35 pm',
    comments: [
      {
        author: profile2,
        text: 'Yes! I agree with you!',
        likesCount: 1,
        date: 'Today 15:35 pm',
        comments: [],
      },
    ],
  },
  {
    author: profile3,
    text: 'This is very useful information for me. Thanks for your article!',
    likesCount: 10,
    date: 'Today 10:36 pm',
    comments: [],
  },
  {
    author: profile4,
    text: 'This is very useful information for me. Thanks for your article!',
    likesCount: 2,
    date: 'Today 02:11 pm',
    comments: [],
  },
];
