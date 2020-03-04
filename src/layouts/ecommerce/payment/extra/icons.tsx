import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const CreditCardIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='credit-card'/>
);

export const MoreVerticalIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='more-vertical'/>
);
