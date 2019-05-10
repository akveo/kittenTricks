import { ComponentsListItemData } from '@src/components/menu';

export type ComponentsData = ComponentsListItemData;

export interface ComponentsContainerData extends ComponentsData {
  route: string;
}
