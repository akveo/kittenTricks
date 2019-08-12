import { LayoutMenuItemData } from '@src/components/common';

export type ArticlesData = LayoutMenuItemData;

export interface ArticlesContainerData extends ArticlesData {
  route: string;
}
