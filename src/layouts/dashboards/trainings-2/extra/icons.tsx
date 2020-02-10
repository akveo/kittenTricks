import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ActivityIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='activity'/>
);

export const ClockIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='clock'/>
);

