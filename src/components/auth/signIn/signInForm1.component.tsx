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
  EmailValidator,
  PasswordValidator,
} from '@src/core/validators';

export interface SignInForm1Type {
  email: string;
  password: string;
}

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onFormValueChange: (value: SignInForm1Type | undefined) => void;
}

export type SignInForm1Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  email: string | undefined;
  password: string | undefined;
}

class SignInForm1Component extends React.Component<SignInForm1Props, State> {

  public state: State = {
    email: undefined,
    password: undefined,
  };

  public componentDidUpdate(prevProps: SignInForm1Props, prevState: State) {
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

  private onEmailInputTextChange = (email: string) => {
    this.setState({ email });
  };

  private onPasswordInputTextChange = (password: string) => {
    this.setState({ password });
  };

  private isValid = (value: SignInForm1Type): boolean => {
    const { email, password } = value;

    return email !== undefined && password !== undefined;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, theme, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <ValidationInput
          style={themedStyle.emailInput}
          textStyle={themedStyle.inputText}
          labelStyle={themedStyle.inputLabel}
          placeholderTextColor={theme['color-white']}
          label='EMAIL'
          placeholder='Email'
          validator={EmailValidator}
          onChangeText={this.onEmailInputTextChange}
        />
        <ValidationInput
          style={themedStyle.passwordInput}
          textStyle={themedStyle.inputText}
          labelStyle={themedStyle.inputLabel}
          placeholderTextColor={theme['color-white']}
          secureTextEntry={true}
          placeholder='Password'
          label='PASSWORD'
          validator={PasswordValidator}
          onChangeText={this.onPasswordInputTextChange}
        />
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
    marginTop: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  inputLabel: {
    color: theme['font-light-color'],
    ...textStyle.label,
  },
  inputText: {
    color: theme['font-light-color'],
    ...textStyle.paragraph,
  },
}));
