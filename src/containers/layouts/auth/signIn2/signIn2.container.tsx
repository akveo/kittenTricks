import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SignInForm2Data } from '@src/components/auth';
import { SignIn2 } from './signIn2.component';

export class SignIn2Container extends React.Component<NavigationStackScreenProps> {

  private navigationKey: string = 'SignIn2Container';

  private onSignInPress = (data: SignInForm2Data) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 2',
    });
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  public render(): React.ReactNode {
    return (
      <SignIn2
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
