import { LayoutMenuItemData } from '@src/components/common';

export type NavigationData = LayoutMenuItemData;

export interface NavigationContainerData extends NavigationData {
  route: string;
}
