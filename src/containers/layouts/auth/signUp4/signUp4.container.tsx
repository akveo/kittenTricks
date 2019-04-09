import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUpForm2Type } from '@src/components/auth';
import { SignUp4 } from './signUp4.component';

export class SignUp4Container extends React.Component<NavigationScreenProps> {

  private onGooglePress = () => {

  };

  private onFacebookPress = () => {

  };

  private onTwitterPress = () => {

  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In 4');
  };

  private onSignUpPress = (formValue: SignUpForm2Type) => {

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
