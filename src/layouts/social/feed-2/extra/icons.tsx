import React from 'react';
import { Icon, IconElement } from '@ui-kitten/components';
import { ImageProps } from 'react-native';

export const HeartIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='heart'/>
);

export const PlusIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='plus'/>
);

export const ShareIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='share-outline'/>
);
