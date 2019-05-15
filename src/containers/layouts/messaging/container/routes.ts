import {
  chat1LayoutImage,
  chat2LayoutImage,
  chat3LayoutImage,
  conversationListLayoutImage,
} from '@src/assets/images';
import { MessagingContainerData } from './type';

export const routes: MessagingContainerData[] = [
  {
    title: 'Conversations List',
    description: 'Option 1',
    image: conversationListLayoutImage,
    route: 'Conversations List',
  },
  {
    title: 'Chat',
    description: 'Option 1',
    image: chat1LayoutImage,
    route: 'Chat 1',
  },
  {
    title: 'Chat',
    description: 'Option 2',
    image: chat2LayoutImage,
    route: 'Chat 2',
  },
  {
    title: 'Chat',
    description: 'Option 3',
    image: chat3LayoutImage,
    route: 'Chat 3',
  },
];
