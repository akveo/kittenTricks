import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignIn2 } from './signIn2.component';

export class SignIn2Container extends React.Component<NavigationScreenProps> {

  private onForgotPasswordPress = () => {

  };

  private onSignInPress = () => {

  };

  private onCreateAccountPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignIn2
        onForgotPasswordPress={this.onForgotPasswordPress}
        onSignInPress={this.onSignInPress}
        onCreateAccountPress={this.onCreateAccountPress}
      />
    );
  }
}
