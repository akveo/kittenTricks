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
  isUsernameValid: boolean;
  isPasswordValid: boolean;
}

class SignInForm2Component extends React.Component<SignInForm2Props, State> {

  public state: State = {
    username: '',
    password: '',
    isUsernameValid: false,
    isPasswordValid: false,
  };

  private nameValidator: RegExp = /[a-z ,.'-]+/;
  private passwordValidator: RegExp = /[a-z0-9]{8,}/;

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onSignInButtonPress = () => {
    const { username, password } = this.state;

    this.props.onSubmit({
      username,
      password,
    });
  };

  private onUsernameValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isUsernameValid: valid,
      username: value,
    });
  };

  private onPasswordValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isPasswordValid: valid,
      password: value,
    });
  };

  private isFormValid = (): boolean => {
    const { isUsernameValid, isPasswordValid } = this.state;

    return isUsernameValid && isPasswordValid;
  };

  private renderUsernameInputIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const themedStyle: StyleType = { ...style, ...this.props.themedStyle.inputIcon };

    return PersonIconFill(themedStyle);
  };

  private renderPasswordInputIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const themedStyle: StyleType = { ...style, ...this.props.themedStyle.inputIcon };

    return EyeOffIconFill(themedStyle);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            style={themedStyle.usernameInput}
            pattern={this.nameValidator}
            placeholder='User Name'
            icon={this.renderUsernameInputIcon}
            value={this.state.username}
            onResult={this.onUsernameValidationResult}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            pattern={this.passwordValidator}
            secureTextEntry={true}
            placeholder='Password'
            icon={this.renderPasswordInputIcon}
            value={this.state.password}
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
          style={themedStyle.signInButton}
          size='giant'
          disabled={!this.isFormValid()}
          onPress={this.onSignInButtonPress}>
          Sign In
        </Button>
      </View>
    );
  }
}

export const SignInForm2 = withStyles(SignInForm2Component, (theme: ThemeType) => ({
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
  passwordInput: {
    marginTop: 16,
    color: theme['color-basic-600'],
  },
  inputIcon: {
    tintColor: theme['color-primary-500'],
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
    fontSize: 15,
    fontWeight: 'normal',
    color: theme['color-basic-600'],
  },
  signInButton: {
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
}));
