import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const CartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='shopping-cart'/>
);
