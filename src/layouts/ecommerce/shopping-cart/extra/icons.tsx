import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const CloseIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='close'/>
);

export const MinusIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='minus'/>
);

export const PlusIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='plus'/>
);


