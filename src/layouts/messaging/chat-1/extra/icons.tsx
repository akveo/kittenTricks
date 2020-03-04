import React from 'react';
import { ImageProps } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const CameraIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='camera'/>
);

export const FileIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='file'/>
);

export const ImageIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='image'/>
);

export const MicIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='mic'/>
);

export const PaperPlaneIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='paper-plane'/>
);

export const PeopleIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='people'/>
);

export const PinIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='pin'/>
);

export const PlusIcon = (props: Partial<ImageProps>): IconElement => (
  <Icon {...props} name='plus'/>
);
