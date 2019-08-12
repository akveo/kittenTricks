import React from 'react';
import {
  Avatar,
  AvatarProps,
} from '@kitten/ui';
import { imageProfile1 } from '@src/assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;


export const GiantAvatar = (): AvatarElement => {

  return (
    <Avatar
      size='giant'
      source={imageProfile1.imageSource}
    />
  );
};
