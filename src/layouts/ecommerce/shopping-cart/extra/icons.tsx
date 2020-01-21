import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const CloseIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='close'/>
);

export const MinusIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='minus'/>
);

export const PlusIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='plus'/>
);


