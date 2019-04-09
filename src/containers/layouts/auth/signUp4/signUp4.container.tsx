import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUp4 } from './signUp4.component';
import { SignUp4FormType } from '@src/components/auth';

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

  private onSignUpPress = (formValue: SignUp4FormType) => {

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
