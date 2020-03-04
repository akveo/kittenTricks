import React from 'react';
import { ImageProps, ImageStyle } from 'react-native';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';

export const BulbIcon = (props: Partial<ImageProps>): IconElement => {
  const theme = useTheme();
  return (
    <Icon width='24' height='24' fill={theme['text-control-color']} name='bulb-outline'/>
  );
};

export const HeartIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='heart'/>
);

export const MessageCircleIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='message-circle-outline'/>
);

