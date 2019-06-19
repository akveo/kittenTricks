import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInForm2Data } from '@src/components/auth';
import { SignIn4 } from './signIn4.component';
import { navigateAction } from '@src/core/navigation';

export class SignIn4Container extends React.Component<NavigationScreenProps> {

  private onSignInPress = (data: SignInForm2Data) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.dispatch(navigateAction('Sign Up 4'));
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.dispatch(navigateAction('Forgot Password'));
  };

  private onGooglePress = () => {

  };

  private onFacebookPress = () => {

  };

  private onTwitterPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignIn4
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
      />
    );
  }
}
