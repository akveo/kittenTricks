import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import { SocialComponent } from './social.component';
import {
  PersonIcon,
  ArrowIcon,
} from '@src/icons';

export class SocialContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Followers',
      description: 'Followers',
      icon: PersonIcon,
      accessory: ArrowIcon,
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
