import React from 'react';
import {
  Image,
  ImageProps,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { StyleType } from '@kitten/theme';
import { ListItemProps } from '@kitten/ui';
import { HomeComponent } from './home.component';

export class HomeContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Auth',
      description: 'Auth',
      icon: AuthIcon,
      accessory: SelectIcon,
    },
    {
      title: 'Social',
      description: 'Social',
      icon: SocialIcon,
      accessory: SelectIcon,
    },
    {
      title: 'Articles',
      description: 'Articles',
      icon: ArticlesIcon,
      accessory: SelectIcon,
    },
    {
      title: 'Messaging',
      description: 'Messaging',
      icon: MessagingIcon,
      accessory: SelectIcon,
    },
    {
      title: 'Dashboards',
      description: 'Dashboards',
      icon: DashboardsIcon,
      accessory: SelectIcon,
    },
    {
      title: 'Other',
      description: 'Other',
      icon: OtherIcon,
      accessory: SelectIcon,
    },
  ];


  private onCategorySelect = (route: string) => {
    const { navigation } = this.props;

    navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <HomeComponent
        routes={this.routes}
        onCategorySelect={this.onCategorySelect}
      />
    );
  }
}

const AuthIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/lock.png', index, style);
};

const SocialIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/heart.png', index, style);
};

const ArticlesIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/edit-2.png', index, style);
};

const MessagingIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/message-circle.png', index, style);
};

const DashboardsIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/list.png', index, style);
};

const OtherIcon = (index: number, style: StyleType): React.ReactElement<ImageProps> => {
  return Icon('https://akveo.github.io/eva-icons/fill/png/128/more-horizontal.png', index, style);
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
