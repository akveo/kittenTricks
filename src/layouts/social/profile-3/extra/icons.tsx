import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ArrowHeadUpIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='arrowhead-up'/>
);

export const ArrowHeadDownIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='arrowhead-down'/>
);
