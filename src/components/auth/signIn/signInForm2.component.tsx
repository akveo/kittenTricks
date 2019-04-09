import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  ValidationInput,
} from '@src/components/common';
import {
  EyeOffIconFill,
  PersonIconFill,
} from '@src/assets/icons';

export interface SignIn2FormType {
  username: string;
  password: string;
}

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onSubmit: (value: SignIn2FormType) => void;
}

export type SignInForm2Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  username: string;
  password: string;
  usernameValid: boolean;
  passwordValid: boolean;
}

class SignInForm2Component extends React.Component<SignInForm2Props, State> {

  public state: State = {
    username: '',
    password: '',
    usernameValid: false,
    passwordValid: false,
  };

  private nameValidator: RegExp = /[a-z ,.'-]+/;
  private passwordValidator: RegExp = /[a-z0-9]{8,}/;

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onSubmitButtonPress = () => {
    const { username, password } = this.state;

    this.props.onSubmit({ username, password });
  };

  private onUsernameValidationResult = (usernameValid: boolean, username: string) => {
    this.setState({ usernameValid, username });
  };

  private onPasswordValidationResult = (passwordValid: boolean, password: string) => {
    this.setState({ passwordValid, password });
  };

  private isFormValid = (): boolean => {
    const { usernameValid, passwordValid } = this.state;

    return usernameValid && passwordValid;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;
    const { username, password, usernameValid, passwordValid } = this.state;

    const usernameInputStatus: string = usernameValid ? 'success' : 'danger';
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
            autoCapitalize='none'
            status={usernameInputStatus}
            placeholder='User Name'
            value={username}
            icon={PersonIconFill}
            onResult={this.onUsernameValidationResult}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            pattern={this.passwordValidator}
            autoCapitalize='none'
            status={passwordInputStatus}
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            icon={EyeOffIconFill}
            onResult={this.onPasswordValidationResult}
          />
          <View style={themedStyle.forgotPasswordContainer}>
            <Button
              style={themedStyle.forgotPasswordButton}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={this.onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>
        <Button
          style={themedStyle.submitButton}
          size='giant'
          disabled={!submitButtonEnabled}
          onPress={this.onSubmitButtonPress}>
          Sign In
        </Button>
      </View>
    );
  }
}

export const SignInForm2 = withStyles(SignInForm2Component, (theme: ThemeType) => ({
  container: {
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  usernameInput: {
    color: theme['color-basic-600'],
  },
  passwordInput: {
    marginTop: 16,
    color: theme['color-basic-600'],
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
    fontSize: 15,
    fontWeight: 'normal',
    color: theme['color-basic-600'],
  },
  submitButton: {
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
}));
