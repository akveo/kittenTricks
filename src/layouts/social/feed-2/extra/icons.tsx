import React from 'react';
import { Icon, IconElement } from '@ui-kitten/components';
import { ImageStyle } from 'react-native';

export const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart'/>
);

export const PlusIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='plus'/>
);

export const ShareIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='share-outline'/>
);
