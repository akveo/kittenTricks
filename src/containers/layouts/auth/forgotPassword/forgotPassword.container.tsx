import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ForgotPasswordFormData } from '@src/components/auth';
import { ForgotPassword } from './forgotPassword.component';

export class ForgotPasswordContainer extends React.Component<NavigationStackScreenProps> {

  private onResetPress = (data: ForgotPasswordFormData) => {
    this.props.navigation.goBack();
  };

  public render(): React.ReactNode {
    return (
      <ForgotPassword onResetPress={this.onResetPress}/>
    );
  }
}
