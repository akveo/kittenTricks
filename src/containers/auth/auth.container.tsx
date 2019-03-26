import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AuthComponent } from './auth.component';

export class AuthContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <AuthComponent/>
    );
  }
}
