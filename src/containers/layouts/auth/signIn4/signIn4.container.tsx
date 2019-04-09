import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignIn4 } from './signIn4.component';
import { SignIn3FormType } from '@src/components/auth';

export class SignIn4Container extends React.Component<NavigationScreenProps> {

  private onForgotPasswordPress = () => {

  };

  private onSignInPress = (formValue: SignIn3FormType) => {

  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up 4');
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
        onForgotPasswordPress={this.onForgotPasswordPress}
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
      />
    );
  }
}
