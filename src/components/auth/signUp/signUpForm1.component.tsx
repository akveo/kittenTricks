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
import { SignInForm3Type } from '@src/components/auth';
import {
  textStyle,
  ValidationInput,
} from '@src/components/common';
import {
  DOBValidator,
  EmailValidator,
  NameValidator,
  PasswordValidator,
} from '@src/core/validators';

export interface SignUpForm1Type {
  firstName: string;
  lastName: string;
  date: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onFormValueChange: (value: SignInForm3Type | undefined) => void;
}

export type SignUpForm1Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  firstName: string | undefined;
  lastName: string | undefined;
  date: string | undefined;
  email: string | undefined;
  password: string | undefined;
  termsAccepted: boolean;
}

class SignUpForm1Component extends React.Component<SignUpForm1Props, State> {

  public state: State = {
    firstName: undefined,
    lastName: undefined,
    date: undefined,
    email: undefined,
    password: undefined,
    termsAccepted: false,
  };

  public componentDidUpdate(prevProps: SignUpForm1Props, prevState: State) {
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

  private onFirstNameInputTextChange = (firstName: string) => {
    this.setState({ firstName });
  };

  private onLastNameValidationResult = (lastName: string) => {
    this.setState({ lastName });
  };

  private onDateInputTextChange = (date: string) => {
    this.setState({ date });
  };

  private onEmailInputTextChange = (email: string) => {
    this.setState({ email });
  };

  private onPasswordInputTextChange = (password: string) => {
    this.setState({ password });
  };

  private onTermsAcceptChange = (termsAccepted: boolean) => {
    this.setState({ termsAccepted });
  };

  private isValid = (value: SignUpForm1Type): boolean => {
    const { firstName, lastName, date, email, password, termsAccepted } = value;

    return firstName !== undefined
      && lastName !== undefined
      && date !== undefined
      && email !== undefined
      && password !== undefined
      && termsAccepted;
  };

  private passwordCaption = (): string => {
    return this.state.password ? 'Password entered correctly' : 'Password entered incorrectly';
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <ValidationInput
          style={[themedStyle.input, themedStyle.firstNameInput]}
          textStyle={themedStyle.inputText}
          placeholder='Ally'
          label='FIRST NAME'
          autoCapitalize='words'
          validator={NameValidator}
          onChangeText={this.onFirstNameInputTextChange}
        />
        <ValidationInput
          style={themedStyle.input}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          placeholder='Watsan'
          label='LAST NAME'
          autoCapitalize='words'
          validator={NameValidator}
          onChangeText={this.onLastNameValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          placeholder='18/10/1995'
          label='DATE OF BIRTHDAY'
          validator={DOBValidator}
          onChangeText={this.onDateInputTextChange}
        />
        <ValidationInput
          style={themedStyle.input}
          textStyle={themedStyle.inputText}
          labelStyle={themedStyle.inputLabel}
          placeholder='ally.watsan@gmail.com'
          label='EMAIL'
          validator={EmailValidator}
          onChangeText={this.onEmailInputTextChange}
        />
        <ValidationInput
          style={themedStyle.input}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          captionTextStyle={textStyle.paragraph}
          label='PASSWORD'
          placeholder='Password'
          caption={this.passwordCaption()}
          secureTextEntry={true}
          validator={PasswordValidator}
          onChangeText={this.onPasswordInputTextChange}
        />
        <CheckBox
          style={themedStyle.termsCheckBox}
          textStyle={themedStyle.termsCheckBoxText}
          size='small'
          checked={this.state.termsAccepted}
          text={'By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy'}
          onChange={this.onTermsAcceptChange}
        />
      </View>
    );
  }
}

export const SignUpForm1 = withStyles(SignUpForm1Component, (theme: ThemeType) => ({
  container: {},
  input: {
    marginTop: 16,
  },
  firstNameInput: {
    marginTop: 0,
  },
  termsCheckBox: {
    marginTop: 20,
  },
  termsCheckBoxText: {
    fontSize: 11,
    color: theme['color-basic-600'],
    ...textStyle.paragraph,
  },
}));
