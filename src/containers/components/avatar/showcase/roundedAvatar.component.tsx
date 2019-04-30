import React from 'react';
import {
  Avatar,
  AvatarProps,
} from '@kitten/ui';

type AvatarElement = React.ReactElement<AvatarProps>;

export const RoundedAvatar = (): AvatarElement => {
  return (
    <Avatar
      shape='rounded'
      source={{ uri: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7790309/cena.jpg' }}
    />
  );
};
