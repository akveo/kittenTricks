import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUpFormType } from '@src/components/auth';
import { SignUp } from './signUp.component';

type Props = NavigationScreenProps;

export class SignUpContainer extends React.Component<Props> {

  private onLoginPress = () => {
    this.props.navigation.navigate('Sign In');
  };

  private onGooglePress = () => {

  };

  private onFacebookPress = () => {

  };

  private onTwitterPress = () => {

  };

  private onSignUpPress = (value: SignUpFormType) => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp
        onLoginPress={this.onLoginPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onSignUpPress={this.onSignUpPress}
      />
    );
  }
}
