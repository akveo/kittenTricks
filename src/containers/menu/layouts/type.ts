import { LayoutsListItemData } from '@src/components/menu';

export type LayoutsData = LayoutsListItemData;

export interface LayoutsContainerData extends LayoutsData {
  route: string;
}
