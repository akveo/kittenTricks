import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignIn2FormType } from '@src/components/auth';
import { SignIn2 } from './signIn2.component';

export class SignIn2Container extends React.Component<NavigationScreenProps> {

  private onForgotPasswordPress = () => {

  };

  private onSignInPress = (formValue: SignIn2FormType) => {

  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up 2');
  };

  public render(): React.ReactNode {
    return (
      <SignIn2
        onForgotPasswordPress={this.onForgotPasswordPress}
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
      />
    );
  }
}
