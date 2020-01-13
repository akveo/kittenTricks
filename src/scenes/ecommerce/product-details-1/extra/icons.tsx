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

export const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart'/>
);

export const MessageCircleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='message-circle-outline'/>
);

export const MoreHorizontalIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='more-horizontal'/>
);

export const SearchIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='search'/>
);
