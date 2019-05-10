import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUpForm2Data } from '@src/components/auth';
import { SignUp3 } from './signUp3.component';

export class SignUp3Container extends React.Component<NavigationScreenProps> {

  private onSignUpPress = (data: SignUpForm2Data) => {
    this.props.navigation.goBack();
  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In 3');
  };

  private onPhotoPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp3
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
