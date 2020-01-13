import React from 'react';
import { ImageStyle } from 'react-native';

export interface MenuItem {
  title: string;
  icon: (style: ImageStyle) => React.ReactElement;
}
