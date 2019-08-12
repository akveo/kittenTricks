import { Post } from '@src/core/model';
import {
  profile2,
  profile3,
} from '@src/core/data/profile';
import {
  imagePost1Bg,
  imagePost2Bg,
} from '@src/assets/images';

export const posts: Post[] = [
  {
    photo: imagePost2Bg,
    date: 'Today 12:35 pm',
    likes: 125,
    author: profile2,
  },
  {
    photo: imagePost1Bg,
    date: 'Today 12:35 pm',
    likes: 232,
    author: profile3,
  },
];
