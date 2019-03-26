import React from 'react';
import {
  Image,
  ImageProps,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import { StyleType } from '@kitten/theme';
import { SocialComponent } from './social.component';

export class SocialContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Followers',
      description: 'Followers',
      icon: FollowersIcon,
      accessory: SelectIcon,
    },
  ];

  private onCategorySelect = (route: string): void => {
    this.props.navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <SocialComponent
        routes={this.routes}
        onCategorySelect={this.onCategorySelect}
      />
    );
  }
}

const FollowersIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/person-done.png', index, style);
};

const SelectIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png', index, style);
};

const Icon = (source: string, index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return (
    <Image
      style={style}
      source={{ uri: source }}
    />
  );
};

