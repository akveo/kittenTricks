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
import {
  PATTERN_EMAIL,
  PATTERN_PASSWORD,
} from '@src/core/validators';

export interface SignInFormType {
  email: string;
  password: string;
}

interface ComponentProps {
  onSubmit: (value: SignInFormType) => void;
}

export type SignInFormProps = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  email: string;
  password: string;
  emailValid: boolean;
  passwordValid: boolean;
}

class SignInForm1Component extends React.Component<SignInFormProps, State> {

  public state: State = {
    email: '',
    password: '',
    passwordValid: false,
    emailValid: false,
  };

  private onSubmitPress = () => {
    const { email, password } = this.state;

    this.props.onSubmit({ email, password });
  };

  private onEmailValidationResult = (emailValid: boolean, email: string) => {
    this.setState({ emailValid, email });
  };

  private onPasswordValidationResult = (passwordValid: boolean, password: string) => {
    this.setState({ passwordValid, password });
  };

  private isFormValid = (): boolean => {
    const { emailValid, passwordValid } = this.state;

    return emailValid && passwordValid;
  };

  private getInputStatus = (valid: boolean): string => {
    return valid ? 'success' : 'danger';
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;
    const { email, password, emailValid, passwordValid } = this.state;

    const emailInputStatus: string = this.getInputStatus(emailValid);
    const passwordInputStatus: string = this.getInputStatus(passwordValid);
    const submitButtonEnabled: boolean = this.isFormValid();

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <ValidationInput
          style={themedStyle.emailInput}
          pattern={PATTERN_EMAIL}
          placeholderTextColor='#FFFFFF'
          autoCapitalize='none'
          status={emailInputStatus}
          placeholder='Email'
          value={email}
          onResult={this.onEmailValidationResult}
        />
        <ValidationInput
          style={themedStyle.passwordInput}
          pattern={PATTERN_PASSWORD}
          placeholderTextColor='#FFFFFF'
          autoCapitalize='none'
          status={passwordInputStatus}
          placeholder='Password'
          value={password}
          onResult={this.onPasswordValidationResult}
        />
        <Button
          style={themedStyle.submitButton}
          size='giant'
          disabled={!submitButtonEnabled}
          onPress={this.onSubmitPress}>
          Sign In
        </Button>
      </View>
    );
  }
}

export const SignInForm1 = withStyles(SignInForm1Component, (theme: ThemeType) => ({
  container: {},
  emailInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  passwordInput: {
    marginTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  submitButton: {
    marginTop: 86,
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
}));
