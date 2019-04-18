import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInForm2Type } from '@src/components/auth';
import { SignIn4 } from './signIn4.component';

export class SignIn4Container extends React.Component<NavigationScreenProps> {

  private onSignInPress = (value: SignInForm2Type) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up 4');
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.navigate('Forgot Password');
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
