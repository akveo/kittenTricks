import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInForm2Data } from '@src/components/auth';
import { SignIn2 } from './signIn2.component';
import { navigateAction } from '@src/core/navigation';

export class SignIn2Container extends React.Component<NavigationScreenProps> {

  private onSignInPress = (data: SignInForm2Data) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.dispatch(navigateAction('Sign Up 2'));
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.dispatch(navigateAction('Forgot Password'));
  };

  public render(): React.ReactNode {
    return (
      <SignIn2
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
