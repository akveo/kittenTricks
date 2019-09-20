import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SignUpForm2Data } from '@src/components/auth';
import { SignUp3 } from './signUp3.component';

export class SignUp3Container extends React.Component<NavigationStackScreenProps> {

  private navigationKey: string = 'SignUp3Container';

  private onSignUpPress = (data: SignUpForm2Data) => {
    this.props.navigation.goBack();
  };

  private onSignInPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign In 3',
    });
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
