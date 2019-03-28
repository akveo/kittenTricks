import React from 'react';
import { Login1 } from './login1.component';

export class Login1Container extends React.Component {

  private onButtonPress = (email: string, password: string) => {

  };

  private onGoogleButtonPress = () => {

  };

  private onFacebookButtonPress = () => {

  };

  private onTwitterButtonPress = () => {

  };

  private onForgotPasswordPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <Login1
        onButtonPress={this.onButtonPress}
        onGoogleButtonPress={this.onGoogleButtonPress}
        onFacebookButtonPress={this.onFacebookButtonPress}
        onTwitterButtonPress={this.onTwitterButtonPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
