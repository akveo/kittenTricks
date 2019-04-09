import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
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

export interface SignUp4FormType {
  username: string;
  email: string;
  password: string;
}

interface ComponentProps {
  onSubmit: (value: SignUp4FormType) => void;
}

export type SignUpForm4Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  username: string;
  email: string;
  password: string;
  usernameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  termsAccepted: boolean;
}

class SignUpForm4Component extends React.Component<SignUpForm4Props, State> {

  public state: State = {
    username: '',
    email: '',
    password: '',
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    termsAccepted: false,
  };

  private nameValidator: RegExp = /[a-z ,.'-]+/;
  private emailValidator: RegExp = /\S+@\S+\.\S+/;
  private passwordValidator: RegExp = /[a-z0-9]{8,}/;

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


    const usernameInputStatus: string = usernameValid ? 'success' : 'danger';
    const emailInputStatus: string = emailValid ? 'success' : 'danger';
    const passwordInputStatus: string = passwordValid ? 'success' : 'danger';
    const submitButtonEnabled: boolean = this.isFormValid();

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            style={themedStyle.usernameInput}
            pattern={this.nameValidator}
            status={usernameInputStatus}
            autoCapitalize='none'
            placeholder='User Name'
            value={username}
            icon={PersonIconFill}
            onResult={this.onUsernameValidationResult}
          />
          <ValidationInput
            style={themedStyle.emailInput}
            pattern={this.emailValidator}
            status={emailInputStatus}
            autoCapitalize='none'
            placeholder='Email'
            value={email}
            icon={EmailIconFill}
            onResult={this.onEmailValidationResult}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            pattern={this.passwordValidator}
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

export const SignUpForm4 = withStyles(SignUpForm4Component, (theme: ThemeType) => ({
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
    fontSize: 15,
    color: theme['color-white'],
  },
  submitButton: {
    marginTop: 48,
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
}));
