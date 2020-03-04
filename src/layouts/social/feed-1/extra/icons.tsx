import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ClockIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='clock-outline'/>
);

export const HeartIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='heart-outline'/>
);

export const PlusIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='plus'/>
);

export const ShareIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='share-outline'/>
);
