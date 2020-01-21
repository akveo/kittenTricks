import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';

export const ArrowIosBackIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-ios-back'/>
);

export const DoneAllIcon = (style: ImageStyle): IconElement => {
  const theme = useTheme();
  return (
    <Icon {...style} width={16} height={16} fill={theme['color-primary-default']} name='done-all'/>
  );
};

export const SearchIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='search'/>
);
