import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignIn3 } from './signIn3.component';
import { SignIn3FormType } from '@src/components/auth';

export class SignIn3Container extends React.Component<NavigationScreenProps> {

  private onForgotPasswordPress = () => {

  };

  private onSignInPress = (formValue: SignIn3FormType) => {

  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up 3');
  };

  public render(): React.ReactNode {
    return (
      <SignIn3
        onForgotPasswordPress={this.onForgotPasswordPress}
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
      />
    );
  }
}
