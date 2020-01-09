import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const ArrowIosBackIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-ios-back'/>
);

export const BookmarkIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='bookmark'/>
);

export const BookmarkOutlineIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='bookmark-outline'/>
);

export const SearchIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='search'/>
);
