import { LayoutMenuItemData } from '@src/components/common';

export type WalkthroughData = LayoutMenuItemData;

export interface WalkthroughContainerData extends WalkthroughData {
  route: string;
}
