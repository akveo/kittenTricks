import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
} from 'react-native';

export const Icon = (source: string, style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
  return (
    <Image
      style={style}
      source={{ uri: source }}
    />
  );
};
