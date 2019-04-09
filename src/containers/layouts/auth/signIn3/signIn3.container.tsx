import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignIn3 } from './signIn3.component';
import { SignIn2FormType } from '@src/components/auth';

export class SignIn3Container extends React.Component<NavigationScreenProps> {

  private onSignInPress = (formValue: SignIn2FormType) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up 3');
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.navigate('Forgot Password');
  };

  public render(): React.ReactNode {
    return (
      <SignIn3
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
