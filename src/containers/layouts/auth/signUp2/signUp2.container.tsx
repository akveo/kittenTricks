import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUp2FormType } from '@src/components/auth';
import { SignUp2 } from './signUp2.component';

export class SignUp2Container extends React.Component<NavigationScreenProps> {

  private onPhotoPress = () => {

  };

  private onSignUpPress = (formValue: SignUp2FormType) => {
  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In 2');
  };

  public render(): React.ReactNode {
    return (
      <SignUp2
        onPhotoPress={this.onPhotoPress}
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
      />
    );
  }
}
