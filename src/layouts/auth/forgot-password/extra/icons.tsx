import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const EmailIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='email'/>
);
