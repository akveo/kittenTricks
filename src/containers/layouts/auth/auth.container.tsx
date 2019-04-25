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
      route: 'Sign In 1',
    },
    {
      title: 'Layout - V2',
      description: 'Sign In',
      route: 'Sign In 2',
    },
    {
      title: 'Layout - V3',
      description: 'Sign In',
      route: 'Sign In 3',
    },
    {
      title: 'Layout - V4',
      description: 'Sign In',
      route: 'Sign In 4',
    },
    {
      title: 'Layout - V5',
      description: 'Sign In',
      route: 'Sign In 5',
    },
    {
      title: 'Layout',
      description: 'Sign Up',
      route: 'Sign Up 1',
    },
    {
      title: 'Layout - V2',
      description: 'Sign Up',
      route: 'Sign Up 2',
    },
    {
      title: 'Layout - V3',
      description: 'Sign Up',
      route: 'Sign Up 3',
    },
    {
      title: 'Layout - V4',
      description: 'Sign Up',
      route: 'Sign Up 4',
    },
    {
      title: 'Layout',
      description: 'Forgot Password',
      route: 'Forgot Password',
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
