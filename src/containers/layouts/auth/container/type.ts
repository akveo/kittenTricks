import { LayoutMenuItemData } from '@src/components/common';

export type AuthData = LayoutMenuItemData;

export interface AuthContainerData extends AuthData {
  route: string;
}
