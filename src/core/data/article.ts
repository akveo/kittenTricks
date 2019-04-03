import { Article } from '@src/core/model';
import { profile1 } from './profile';

export const articles: Article[] = [
  {
    image: 'https://media.self.com/photos/586540bc733664ae3e5ee9f8/4:3/w_728,c_limit/eat-healthy_feature.png',
    title: 'How To Eat Healthy',
    description: 'The easiest way to make sure your inter meal nibbling stays on track is to have...',
    author: profile1,
    date: 'Today 12:35 pm',
    tips: 10,
    comments: 45,
    likes: 320,
  },
  {
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
    title: 'Why Is The Workout Important?',
    description: 'The easiest way to make sure your inter meal nibbling stays',
    author: profile1,
    date: 'Today 12:35 pm',
    tips: 10,
    comments: 45,
    likes: 320,
  },
  {
    image: 'https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'The 5 Rules Of Morning Workouts',
    description: 'This one has to do more with habit than anything. You create the expectation...',
    author: profile1,
    date: 'Today 11:10 am',
    tips: 5,
    comments: 26,
    likes: 245,
  },
  {
    image: 'https://images.unsplash.com/photo-1527239492788-9bab047d3585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    title: 'Light & Easy Breakfasts',
    description: 'This one has to do more with habit than anything. You create the expectation...',
    author: profile1,
    date: 'Today 11:10 am',
    tips: 5,
    comments: 14,
    likes: 125,
  },
];
