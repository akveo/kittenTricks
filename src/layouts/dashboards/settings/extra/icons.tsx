import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ArrowIosBackIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='arrow-ios-back'/>
);
