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
import { ValidationInput } from '@src/components/common';
import {
  EmailIconFill,
  EyeOffIconFill,
  PersonIconFill,
} from '@src/assets/icons';
import {
  EmailValidator,
  NameValidator,
  PasswordValidator,
} from '@src/core/validators';

export interface SignUpForm2Type {
  username: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onFormValueChange: (value: SignUpForm2Type | undefined) => void;
}

export type SignUpForm2Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  termsAccepted: boolean;
}

class SignUpForm2Component extends React.Component<SignUpForm2Props, State> {

  public state: State = {
    username: undefined,
    email: undefined,
    password: undefined,
    termsAccepted: false,
  };

  public componentDidUpdate(prevProps: SignUpForm2Props, prevState: State) {
    const oldFormValid: boolean = this.isValid(prevState);
    const newFormValid: boolean = this.isValid(this.state);

    const becomeValid: boolean = !oldFormValid && newFormValid;
    const becomeInvalid: boolean = oldFormValid && !newFormValid;

    if (becomeValid) {
      this.props.onFormValueChange(this.state);
    } else if (becomeInvalid) {
      this.props.onFormValueChange(undefined);
    }
  }

  private onTermsValueChange = (termsAccepted: boolean) => {
    this.setState({ termsAccepted });
  };

  private onUsernameInputTextChange = (username: string) => {
    this.setState({ username });
  };

  private onEmailInputTextChange = (email: string) => {
    this.setState({ email });
  };

  private onPasswordInputValidationResult = (password: string) => {
    this.setState({ password });
  };

  private isValid = (value: SignUpForm2Type): boolean => {
    const { username, password, email, termsAccepted } = value;

    return username !== undefined
      && email !== undefined
      && password !== undefined
      && termsAccepted;
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
            autoCapitalize='none'
            placeholder='User Name'
            icon={PersonIconFill}
            validator={NameValidator}
            onChangeText={this.onUsernameInputTextChange}
          />
          <ValidationInput
            style={themedStyle.emailInput}
            autoCapitalize='none'
            placeholder='Email'
            icon={EmailIconFill}
            validator={EmailValidator}
            onChangeText={this.onEmailInputTextChange}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder='Password'
            icon={EyeOffIconFill}
            validator={PasswordValidator}
            onChangeText={this.onPasswordInputValidationResult}
          />
          <CheckBox
            style={themedStyle.termsCheckBox}
            size='small'
            checked={this.state.termsAccepted}
            onChange={this.onTermsValueChange}
            text='I read and agree to Terms & Conditions'
          />
        </View>
      </View>
    );
  }
}

export const SignUpForm2 = withStyles(SignUpForm2Component, (theme: ThemeType) => ({
  container: {},
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
    marginTop: 24,
    fontFamily: 'opensans-semibold',
    color: theme['color-basic-600'],
  },
}));
