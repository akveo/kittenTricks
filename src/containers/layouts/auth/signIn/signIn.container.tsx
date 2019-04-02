import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInFormType } from '@src/components/auth';
import { SignIn } from './signIn.component';

type Props = NavigationScreenProps;

export class SignInContainer extends React.Component<Props> {

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
      <SignIn
        onLoginPress={this.onLoginPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onSignInPress={this.onSignInPress}
      />
    );
  }
}
