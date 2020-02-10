import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const EyeIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='eye'/>
);

export const EyeOffIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='eye-off'/>
);

export const PersonIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='person'/>
);

