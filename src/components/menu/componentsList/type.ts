import React from 'react';
import { StyleType } from '@kitten/theme';

export interface ComponentsListItemData {
  title: string;
  showcase: (style: StyleType) => React.ReactElement<any>;
}
