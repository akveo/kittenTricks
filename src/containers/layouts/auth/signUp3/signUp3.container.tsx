import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUp2FormType } from '@src/components/auth';
import { SignUp3 } from './signUp3.component';
import { SignUp3FormType } from '@src/components/auth/signUp/signUpForm3.component';

export class SignUp3Container extends React.Component<NavigationScreenProps> {

  private onPhotoPress = () => {

  };

  private onSignUpPress = (formValue: SignUp3FormType) => {
  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In 3');
  };

  public render(): React.ReactNode {
    return (
      <SignUp3
        onPhotoPress={this.onPhotoPress}
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
      />
    );
  }
}
