import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUpForm1Type } from '@src/components/auth';
import { SignUp1 } from './signUp1.component';

export class SignUp1Container extends React.Component<NavigationScreenProps> {

  private onSignUpPress = (value: SignUpForm1Type) => {
    this.props.navigation.goBack();
  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In 1');
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
      <SignUp1
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onEwaPress={this.onEwaPress}
      />
    );
  }
}
