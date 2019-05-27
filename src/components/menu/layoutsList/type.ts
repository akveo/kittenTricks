import React from 'react';
import { StyleType } from '@kitten/theme';
import { ImageProps } from 'react-native';
import { CurrentTheme } from '@src/core/model';

export interface LayoutsListItemData {
  title: string;
  icon: (style: StyleType, currentTheme: CurrentTheme) => React.ReactElement<ImageProps>;
}
