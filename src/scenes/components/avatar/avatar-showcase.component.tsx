import React from 'react';
import { Avatar, AvatarElement, AvatarProps } from '@ui-kitten/components';

export const AvatarShowcase = (props?: AvatarProps): AvatarElement => (
  <Avatar
    {...props}
    source={require('../../../assets/images/image-app-icon.png')}
  />
);
