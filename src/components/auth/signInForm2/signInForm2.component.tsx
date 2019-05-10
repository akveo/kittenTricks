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
import {
  textStyle,
  ValidationInput,
} from '@src/components/common';
import {
  EyeOffIconFill,
  PersonIconFill,
} from '@src/assets/icons';
import {
  NameValidator,
  PasswordValidator,
} from '@src/core/validators';
import { SignInForm2Data } from './type';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onDataChange: (value: SignInForm2Data | undefined) => void;
}

export type SignInForm2Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  username: string | undefined;
  password: string | undefined;
}

class SignInForm2Component extends React.Component<SignInForm2Props, State> {

  public state: State = {
    username: undefined,
    password: undefined,
  };

  public componentDidUpdate(prevProps: SignInForm2Props, prevState: State) {
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

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onUsernameInputTextChange = (username: string) => {
    this.setState({ username });
  };

  private onPasswordInputTextChange = (password: string) => {
    this.setState({ password });
  };

  private isValid = (value: SignInForm2Data): boolean => {
    const { username, password } = value;

    return username !== undefined
      && password !== undefined;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            textStyle={textStyle.paragraph}
            placeholder='User Name'
            icon={PersonIconFill}
            validator={NameValidator}
            onChangeText={this.onUsernameInputTextChange}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            placeholder='Password'
            icon={EyeOffIconFill}
            secureTextEntry={true}
            validator={PasswordValidator}
            onChangeText={this.onPasswordInputTextChange}
          />
          <View style={themedStyle.forgotPasswordContainer}>
            <Button
              style={themedStyle.forgotPasswordButton}
              textStyle={themedStyle.forgotPasswordText}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={this.onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export const SignInForm2 = withStyles(SignInForm2Component, (theme: ThemeType) => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: theme['color-basic-400'],
    ...textStyle.subtitle,
  },
}));
