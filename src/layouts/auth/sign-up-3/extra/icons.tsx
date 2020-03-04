import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const EmailIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='email'/>
);

export const EyeIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='eye'/>
);

export const EyeOffIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='eye-off'/>
);

export const PersonIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='person'/>
);

export const PlusIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='plus'/>
);


