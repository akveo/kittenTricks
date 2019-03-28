import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from '@kitten/theme';
import { Icon } from './icon.component';

export const ArrowIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png', style);
};

export const CameraIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/camera.png', style);
};

export const HeartIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/heart.png', style);
};

export const ListIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/list.png', style);
};

export const EditIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/edit-2.png', style);
};

export const LockIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/lock.png', style);
};

export const MessageIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/message-circle.png', style);
};

export const MoreIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/more-horizontal.png', style);
};

export const PersonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/person-done.png', style);
};

export const SettingsIcon = (style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/settings.png', style);
};
