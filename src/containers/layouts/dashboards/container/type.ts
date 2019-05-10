import { LayoutMenuItemData } from '@src/components/common';

export type DashboardsData = LayoutMenuItemData;

export interface DashboardsContainerData extends DashboardsData {
  route: string;
}
