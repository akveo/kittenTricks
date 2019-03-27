import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import { HomeComponent } from './home.component';
import {
  ArrowIcon,
  EditIcon,
  HeartIcon,
  LockIcon,
  ListIcon,
  MessageIcon,
  MoreIcon,
  SettingsIcon,
} from '@src/icons';

export class HomeContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Auth',
      description: 'Auth',
      icon: LockIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Social',
      description: 'Social',
      icon: HeartIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Articles',
      description: 'Articles',
      icon: EditIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Messaging',
      description: 'Messaging',
      icon: MessageIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Dashboards',
      description: 'Dashboards',
      icon: ListIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Other',
      description: 'Other',
      icon: MoreIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Settings',
      description: 'Settings',
      icon: SettingsIcon,
      accessory: ArrowIcon,
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
