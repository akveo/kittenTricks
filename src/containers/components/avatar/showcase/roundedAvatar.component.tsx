import React from 'react';
import {
  Avatar,
  AvatarProps,
} from '@kitten/ui';
import { imageProfile1 } from '@src/assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;

export const RoundedAvatar = (): AvatarElement => {
  return (
    <Avatar
      shape='rounded'
      source={imageProfile1.imageSource}
    />
  );
};
