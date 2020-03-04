import React from 'react';
import { ImageProps, ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const HeartIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='heart'/>
);

export const MessageCircleIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='message-circle-outline'/>
);

