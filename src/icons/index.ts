import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from '@kitten/theme';
import { Icon } from './icon.component';

export const ArrowIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png', index, style);
};

export const HeartIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/heart.png', index, style);
};

export const ListIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/list.png', index, style);
};

export const EditIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/edit-2.png', index, style);
};

export const LockIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/lock.png', index, style);
};

export const MessageIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/message-circle.png', index, style);
};

export const MoreIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/more-horizontal.png', index, style);
};

export const PersonIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/person-done.png', index, style);
};

export const SettingsIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/settings.png', index, style);
};
