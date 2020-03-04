import React from 'react';
import { ImageProps } from 'react-native';
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

export const HeartIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='heart'/>
);

export const MessageCircleIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='message-circle-outline'/>
);
