import React from 'react';
import { ImageProps } from 'react-native';

export interface MenuItem {
  title: string;
  icon: (props: Partial<ImageProps>) => React.ReactElement;
}
