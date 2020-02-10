import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';

export const ClockIcon = (): IconElement => {
  const theme = useTheme();

  return (
    <Icon
      width='24'
      height='24'
      fill={theme['text-hint-color']}
      name='clock-outline'
    />
  );
};

export const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart'/>
);

export const MessageCircleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='message-circle-outline'/>
);
