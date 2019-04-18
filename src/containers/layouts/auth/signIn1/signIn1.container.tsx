import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInForm1Type } from '@src/components/auth';
import { SignIn1 } from './signIn1.component';

export class SignIn1Container extends React.Component<NavigationScreenProps> {

  private onSignInPress = (value: SignInForm1Type) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up 1');
  };

  private onGooglePress = () => {

  };

  private onFacebookPress = () => {

  };

  private onTwitterPress = () => {

  };

  private onEwaPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignIn1
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onEwaPress={this.onEwaPress}
      />
    );
  }
}
