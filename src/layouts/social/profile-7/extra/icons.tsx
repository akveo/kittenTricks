import React from 'react';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';
import { ImageProps } from 'react-native';

export const MessageCircleIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='message-circle'/>
);

export const PersonAddIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='person-add'/>
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
