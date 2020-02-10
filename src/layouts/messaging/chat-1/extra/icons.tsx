import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const CameraIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='camera'/>
);

export const FileIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='file'/>
);

export const ImageIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='image'/>
);

export const MicIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='mic'/>
);

export const PaperPlaneIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='paper-plane'/>
);

export const PeopleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='people'/>
);

export const PinIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='pin'/>
);

export const PlusIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='plus'/>
);
