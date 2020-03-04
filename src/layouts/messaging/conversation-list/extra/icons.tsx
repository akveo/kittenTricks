import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';

export const ArrowIosBackIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='arrow-ios-back'/>
);

export const DoneAllIcon = (props: Partial<ImageProps>): IconElement => {
  const theme = useTheme();
  return (
    <Icon {...props} width={16} height={16} fill={theme['color-primary-default']} name='done-all'/>
  );
};

export const SearchIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='search'/>
);
