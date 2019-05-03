import React from 'react';
import { StyleType } from '@kitten/theme';
import { ImageProps } from 'react-native';

export interface LayoutsListItemData {
  title: React.ReactText;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
}
