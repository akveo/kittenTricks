import React from 'react';
import { ImageProps } from 'react-native';
import { Icon as KittenIcon, IconProps, IconElement } from '@kitten/ui';

export const Icon = (name: string, style: IconProps<ImageProps>): IconElement<ImageProps> => {
  return (
    <KittenIcon
      {...style}
      name={name}
    />
  );
};
