import React from 'react';
import { StyleType } from '@kitten/theme';
import { ImageProps } from 'react-native';

export interface LayoutsListItemData {
  title: string;
  icon: (style: StyleType, currentTheme: 'light' | 'dark') => React.ReactElement<ImageProps>;
}
