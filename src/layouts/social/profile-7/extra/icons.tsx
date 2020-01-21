import React from 'react';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';
import { ImageStyle } from 'react-native';

export const MessageCircleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='message-circle'/>
);

export const PersonAddIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='person-add'/>
);

export const PinIcon = (): IconElement => {
  const theme = useTheme();
  return (
    <Icon
      width={16}
      height={16}
      fill={theme['text-control-color']}
      name='pin'
    />
  );
};
