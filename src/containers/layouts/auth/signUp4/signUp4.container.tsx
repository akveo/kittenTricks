import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUpForm2Data } from '@src/components/auth';
import { SignUp4 } from './signUp4.component';

export class SignUp4Container extends React.Component<NavigationScreenProps> {

  private onSignUpPress = (data: SignUpForm2Data) => {
    this.props.navigation.goBack();
  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In 4');
  };

  private onGooglePress = () => {

  };

  private onFacebookPress = () => {

  };

  private onTwitterPress = () => {

  };

  private onPhotoPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp4
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
