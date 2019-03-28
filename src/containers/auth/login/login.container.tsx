import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import {
  ArrowIcon,
  LockIcon,
} from '@src/assets/icons';
import { LoginComponent } from './login.component';

export class LoginContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Login 1',
      description: 'Login 1',
      icon: LockIcon,
      accessory: ArrowIcon,
    },
  ];

  private onCategorySelect = (route: string): void => {
    this.props.navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <LoginComponent
        routes={this.routes}
        onCategorySelect={this.onCategorySelect}
      />
    );
  }
}
