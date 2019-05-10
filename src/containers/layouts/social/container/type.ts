import { LayoutMenuItemData } from '@src/components/common';

export type SocialData = LayoutMenuItemData;

export interface SocialContainerData extends SocialData {
  route: string;
}
