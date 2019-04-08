import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInFormType } from '@src/components/auth';
import { SignIn1 } from './signIn1.component';

export class SignIn1Container extends React.Component<NavigationScreenProps> {

  private onLoginPress = () => {
    this.props.navigation.navigate('Sign Up');
  };

  private onGooglePress = () => {

  };

  private onFacebookPress = () => {

  };

  private onTwitterPress = () => {

  };

  private onSignInPress = (value: SignInFormType) => {
  };

  public render(): React.ReactNode {
    return (
      <SignIn1
        onLoginPress={this.onLoginPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onSignInPress={this.onSignInPress}
      />
    );
  }
}
