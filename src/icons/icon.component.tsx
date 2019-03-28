import React from 'react';
import {
  Image,
  ImageProps,
} from 'react-native';
import { StyleType } from '@kitten/theme';

export const Icon = (source: string, style: StyleType): React.ReactElement<ImageProps> => {
  return (
    <Image
      style={style}
      source={{ uri: source }}
    />
  );
};
