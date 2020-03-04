import React from 'react';
import { ImageProps, ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ArrowForwardIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='arrow-forward-outline'/>
);

export const GoogleIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='google'/>
);

export const FacebookIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='facebook'/>
);

export const TwitterIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='twitter'/>
);

