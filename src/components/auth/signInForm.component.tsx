import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import { ValidationInput } from '@src/components/common';

export interface SignInFormType {
  email: string;
  password: string;
}

interface ComponentProps {
  onSubmit: (value: SignInFormType) => void;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  isEmailValid: boolean;
  isPasswordValid: boolean;
  email: string;
  password: string;
}

class SignUpFormComponent extends React.Component<Props, State> {

  public state: State = {
    isEmailValid: false,
    isPasswordValid: false,
    email: '',
    password: '',
  };

  private emailValidator: RegExp = /\S+@\S+\.\S+/;
  private passwordValidator: RegExp = /[a-z0-9]{8,}/;

  private onEmailValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isEmailValid: valid,
      email: value,
    });
  };

  private onPasswordValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isPasswordValid: valid,
      password: value,
    });
  };

  private isFormValid = (): boolean => {
    return this.state.isEmailValid && this.state.isPasswordValid;
  };

  private onSubmitPress = () => {
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <View {...restProps}>
        <ValidationInput
          style={themedStyle.input}
          pattern={this.emailValidator}
          status={this.state.isEmailValid ? 'success' : 'error'}
          placeholder='Email'
          value={this.state.email}
          onResult={this.onEmailValidationResult}
        />
        <ValidationInput
          style={[themedStyle.input, themedStyle.passwordInput]}
          pattern={this.passwordValidator}
          status={this.state.isPasswordValid ? 'success' : 'error'}
          placeholder='Password'
          value={this.state.password}
          onResult={this.onPasswordValidationResult}
        />
        <Button
          style={themedStyle.button}
          onPress={this.onSubmitPress}
          disabled={!this.isFormValid()}>
          SIGN IN
        </Button>
      </View>
    );
  }
}

export const SignInForm = withStyles(SignUpFormComponent, (theme: ThemeType) => ({
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white',
  },
  passwordInput: {
    marginTop: 40,
  },
  button: {
    height: 48,
    marginTop: 86,
  },
}));
