import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ArrowHeadUpIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrowhead-up'/>
);

export const ArrowHeadDownIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrowhead-down'/>
);
