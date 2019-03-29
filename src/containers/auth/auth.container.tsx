import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import {
  ArrowIcon,
  LockIcon,
} from '@src/assets/icons';
import { AuthComponent } from './auth.component';

export class AuthContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Sign In',
      description: 'Sign In',
      icon: LockIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Sign Up',
      description: 'Sign Up',
      icon: LockIcon,
      accessory: ArrowIcon,
    },
  ];

  private onCategorySelect = (route: string): void => {
    this.props.navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <AuthComponent
        routes={this.routes}
        onCategorySelect={this.onCategorySelect}
      />
    );
  }
}
