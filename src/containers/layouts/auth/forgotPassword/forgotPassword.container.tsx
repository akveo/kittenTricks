import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ForgotPasswordFormData } from '@src/components/auth';
import { ForgotPassword } from './forgotPassword.component';

export class ForgotPasswordContainer extends React.Component<NavigationScreenProps> {

  private onResetPress = (data: ForgotPasswordFormData) => {
    this.props.navigation.goBack();
  };

  public render(): React.ReactNode {
    return (
      <ForgotPassword onResetPress={this.onResetPress}/>
    );
  }
}
