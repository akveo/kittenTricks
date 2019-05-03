import { LayoutMenuItemData } from '@src/components/common';

export type MessagingData = LayoutMenuItemData;

export interface MessagingContainerData extends MessagingData {
  route: string;
}
