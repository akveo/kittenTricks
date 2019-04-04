import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Auth } from './auth.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class AuthContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [
    {
      title: 'Layout',
      description: 'Sign In',
      route: 'Sign In',
    },
    {
      title: 'Layout',
      description: 'Sign Up',
      route: 'Sign Up',
    },
  ];

  private onItemSelect = (index: number): void => {
    const { [index]: selectedItem } = this.items;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Auth
        items={this.items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
