import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ArrowForwardIconOutline = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='arrow-forward-outline'/>
);

export const FacebookIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='facebook'/>
);

export const GoogleIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='google'/>
);

export const HeartIconFill = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='heart'/>
);

export const TwitterIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='twitter'/>
);
