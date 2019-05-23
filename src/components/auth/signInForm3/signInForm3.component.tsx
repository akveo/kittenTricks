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
import {
  textStyle,
  ValidationInput,
} from '@src/components/common';
import {
  EmailIconFill,
  LockIconFill,
} from '@src/assets/icons';
import {
  EmailValidator,
  PasswordValidator,
} from '@src/core/validators';
import { SignInForm3Data } from './type';

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onDataChange: (value: SignInForm3Data | undefined) => void;
}

export type SignInForm3Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  email: string | undefined;
  password: string | undefined;
}

class SignInForm3Component extends React.Component<SignInForm3Props, State> {

  public state: State = {
    email: undefined,
    password: undefined,
  };

  public componentDidUpdate(prevProps: SignInForm3Props, prevState: State) {
    const oldFormValid: boolean = this.isValid(prevState);
    const newFormValid: boolean = this.isValid(this.state);

    const becomeValid: boolean = !oldFormValid && newFormValid;
    const becomeInvalid: boolean = oldFormValid && !newFormValid;

    if (becomeValid) {
      this.props.onDataChange(this.state);
    } else if (becomeInvalid) {
      this.props.onDataChange(undefined);
    }
  }

  private onEmailInputTextChange = (email: string | undefined) => {
    this.setState({ email });
  };

  private onPasswordInputTextChange = (password: string | undefined) => {
    this.setState({ password });
  };

  private isValid = (value: SignInForm3Data): boolean => {
    const { email, password } = value;

    return email !== undefined
      && password !== undefined;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, theme, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <ValidationInput
          style={themedStyle.emailInput}
          textStyle={textStyle.paragraph}
          placeholder='Email'
          icon={EmailIconFill}
          validator={EmailValidator}
          onChangeText={this.onEmailInputTextChange}
        />
        <ValidationInput
          style={themedStyle.passwordInput}
          textStyle={textStyle.paragraph}
          placeholder='Password'
          secureTextEntry={true}
          icon={LockIconFill}
          validator={PasswordValidator}
          onChangeText={this.onPasswordInputTextChange}
        />
      </View>
    );
  }
}

export const SignInForm3 = withStyles(SignInForm3Component, (theme: ThemeType) => ({
  container: {},
  emailInput: {},
  passwordInput: {
    marginTop: 16,
  },
}));
