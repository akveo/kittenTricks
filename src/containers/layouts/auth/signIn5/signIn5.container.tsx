import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  SignInForm3Data,
  SignInForm4Data,
} from '@src/components/auth';
import { SignIn5 } from './signIn5.component';

export class SignIn5Container extends React.Component<NavigationScreenProps> {

  private onSignInEmailPress = (data: SignInForm3Data) => {
    this.props.navigation.goBack();
  };

  private onSignInSMSPress = (data: SignInForm4Data) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up 4');
  };

  public render(): React.ReactNode {
    return (
      <SignIn5
        onSignInEmailPress={this.onSignInEmailPress}
        onSignInSMSPress={this.onSignInSMSPress}
        onSignUpPress={this.onSignUpPress}
      />
    );
  }
}
