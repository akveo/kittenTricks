import { LayoutMenuItemData } from '@src/components/common';

export type EcommerceData = LayoutMenuItemData;

export interface EcommerceContainerData extends EcommerceData {
  route: string;
}
