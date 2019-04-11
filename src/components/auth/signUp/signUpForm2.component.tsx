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
import { CheckBox } from '@kitten/ui';
import {
  Button,
  ValidationInput,
} from '@src/components/common';
import {
  EmailIconFill,
  EyeOffIconFill,
  PersonIconFill,
} from '@src/assets/icons';
import {
  PATTERN_EMAIL,
  PATTERN_NAME,
  PATTERN_PASSWORD,
} from '@src/core/validators';

export interface SignUpForm2Type {
  username: string;
  email: string;
  password: string;
}

interface ComponentProps {
  onSubmit: (value: SignUpForm2Type) => void;
}

export type SignUpForm2Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  username: string;
  email: string;
  password: string;
  usernameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  termsAccepted: boolean;
}

class SignUpForm2Component extends React.Component<SignUpForm2Props, State> {

  public state: State = {
    username: '',
    email: '',
    password: '',
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    termsAccepted: false,
  };

  private onTermsValueChange = (termsAccepted: boolean) => {
    this.setState({ termsAccepted });
  };

  private onSubmitButtonPress = () => {
    const { username, email, password } = this.state;

    this.props.onSubmit({ username, email, password });
  };

  private onUsernameValidationResult = (usernameValid: boolean, username: string) => {
    this.setState({ usernameValid, username });
  };

  private onEmailValidationResult = (emailValid: boolean, email: string) => {
    this.setState({ emailValid, email });
  };

  private onPasswordValidationResult = (passwordValid: boolean, password: string) => {
    this.setState({ passwordValid, password });
  };

  private isFormValid = (): boolean => {
    const { usernameValid, passwordValid, termsAccepted } = this.state;

    return usernameValid && passwordValid && termsAccepted;
  };

  private getInputStatus = (valid: boolean): string => {
    return valid ? 'success' : 'danger';
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;
    const {
      username,
      email,
      password,
      usernameValid,
      emailValid,
      passwordValid,
      termsAccepted,
    } = this.state;


    const usernameInputStatus: string = this.getInputStatus(usernameValid);
    const emailInputStatus: string = this.getInputStatus(emailValid);
    const passwordInputStatus: string = this.getInputStatus(passwordValid);
    const submitButtonEnabled: boolean = this.isFormValid();

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            style={themedStyle.usernameInput}
            pattern={PATTERN_NAME}
            status={usernameInputStatus}
            autoCapitalize='none'
            placeholder='User Name'
            value={username}
            icon={PersonIconFill}
            onResult={this.onUsernameValidationResult}
          />
          <ValidationInput
            style={themedStyle.emailInput}
            pattern={PATTERN_EMAIL}
            status={emailInputStatus}
            autoCapitalize='none'
            placeholder='Email'
            value={email}
            icon={EmailIconFill}
            onResult={this.onEmailValidationResult}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            pattern={PATTERN_PASSWORD}
            status={passwordInputStatus}
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            icon={EyeOffIconFill}
            onResult={this.onPasswordValidationResult}
          />
          <CheckBox
            style={themedStyle.termsCheckBox}
            checked={termsAccepted}
            onChange={this.onTermsValueChange}
            text='I read and agree to Terms & Conditions'
          />
        </View>
        <Button
          style={themedStyle.submitButton}
          size='giant'
          disabled={!submitButtonEnabled}
          onPress={this.onSubmitButtonPress}>
          Sign Up
        </Button>
      </View>
    );
  }
}

export const SignUpForm2 = withStyles(SignUpForm2Component, (theme: ThemeType) => ({
  container: {
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  usernameInput: {
    color: theme['color-basic-600'],
  },
  emailInput: {
    marginTop: 16,
    color: theme['color-basic-600'],
  },
  passwordInput: {
    marginTop: 16,
    color: theme['color-basic-600'],
  },
  termsCheckBox: {
    marginTop: 28,
    fontFamily: 'opensans-semibold',
    color: theme['color-basic-600'],
  },
  submitButton: {
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
}));
