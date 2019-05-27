import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from '@kitten/theme';
import { CurrentTheme } from '@src/core/model';

export interface ComponentsListItemData {
  title: string;
  icon: (style: StyleType, theme: CurrentTheme) => React.ReactElement<ImageProps>;
}
