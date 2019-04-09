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

export interface SignUp2FormType {
  username: string;
  email: string;
  password: string;
}

interface ComponentProps {
  onSubmit: (value: SignUp2FormType) => void;
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

  private renderUsernameInputIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return PersonIconFill({ ...style, ...themedStyle.inputIcon });
  };

  private renderEmailInputIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return EmailIconFill({ ...style, ...themedStyle.inputIcon });
  };

  private renderPasswordInputIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return EyeOffIconFill({ ...style, ...themedStyle.inputIcon });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;
    const { username, email, password, termsAccepted } = this.state;
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
            placeholder='User Name'
            value={username}
            icon={this.renderUsernameInputIcon}
            onResult={this.onUsernameValidationResult}
          />
          <ValidationInput
            style={themedStyle.emailInput}
            pattern={this.emailValidator}
            autoCapitalize='none'
            placeholder='Email'
            value={email}
            icon={this.renderEmailInputIcon}
            onResult={this.onEmailValidationResult}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            pattern={this.passwordValidator}
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            icon={this.renderPasswordInputIcon}
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
    justifyContent: 'space-between',
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
  inputIcon: {
    tintColor: theme['color-primary-500'],
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
