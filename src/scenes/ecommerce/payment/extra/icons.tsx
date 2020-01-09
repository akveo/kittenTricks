import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ArrowIosBackIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-ios-back'/>
);

export const CreditCardIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='credit-card'/>
);

export const MoreVerticalIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='more-vertical'/>
);

export const SearchIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='search'/>
);

export const ShoppingCartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='shopping-cart'/>
);
