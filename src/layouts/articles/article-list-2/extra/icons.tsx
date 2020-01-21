import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';

export const BulbIcon = (style: ImageStyle): IconElement => {
  const theme = useTheme();
  return (
    <Icon width='24' height='24' fill={theme['text-control-color']} name='bulb-outline'/>
  );
};

export const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart'/>
);

export const MessageCircleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='message-circle-outline'/>
);

