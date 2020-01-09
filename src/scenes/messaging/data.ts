import { LayoutItem } from '../../model/layout-item.model';

export interface MessagingData extends LayoutItem {
  route: string;
}

export const data: MessagingData[] = [
  {
    title: 'Chat',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-chat-1.jpg'),
    route: 'Chat1',
  },
  {
    title: 'Chat',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-chat-2.jpg'),
    route: 'Chat2',
  },
  {
    title: 'Conversation List',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-conversation-list.jpg'),
    route: 'ConversationList',
  },
];
