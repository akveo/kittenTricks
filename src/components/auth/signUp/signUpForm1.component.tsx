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
  Button,
  CheckBox,
} from '@kitten/ui';
import { ValidationInput } from '@src/components/common';
import {
  PATTERN_DOB,
  PATTERN_EMAIL,
  PATTERN_NAME,
  PATTERN_PASSWORD,
} from '@src/core/validators';

export interface SignUpForm1Type {
  firstName: string;
  lastName: string;
  date: string;
  email: string;
  password: string;
}

interface ComponentProps {
  onSubmit: (value: SignUpForm1Type) => void;
}

export type SignUpForm1Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  firstName: string;
  lastName: string;
  date: string;
  email: string;
  password: string;
  firstNameValid: boolean;
  lastNameValid: boolean;
  dateValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  termsAccepted: boolean;
}

class SignUpForm1Component extends React.Component<SignUpForm1Props, State> {

  public state: State = {
    firstName: '',
    lastName: '',
    date: '',
    email: '',
    password: '',
    firstNameValid: false,
    lastNameValid: false,
    dateValid: false,
    emailValid: false,
    passwordValid: false,
    termsAccepted: false,
  };

  private onFirstNameValidationResult = (firstNameValid: boolean, firstName: string) => {
    this.setState({ firstNameValid, firstName });
  };

  private onLastNameValidationResult = (lastNameValid: boolean, lastName: string) => {
    this.setState({ lastNameValid, lastName });
  };

  private onDateValidationResult = (dateValid: boolean, date: string) => {
    this.setState({ dateValid, date });
  };

  private onEmailValidationResult = (emailValid: boolean, email: string) => {
    this.setState({ emailValid, email });
  };

  private onPasswordValidationResult = (passwordValid: boolean, password: string) => {
    this.setState({ passwordValid, password });
  };

  private onTermsAcceptChange = (termsAccepted: boolean) => {
    this.setState({ termsAccepted });
  };

  private isFormValid = (): boolean => {
    const {
      firstNameValid,
      lastNameValid,
      dateValid,
      emailValid,
      passwordValid,
      termsAccepted,
    } = this.state;

    return firstNameValid && lastNameValid && dateValid && emailValid && passwordValid && termsAccepted;
  };

  private onSubmitPress = () => {
    const { firstName, lastName, date, email, password } = this.state;

    this.props.onSubmit({ firstName, lastName, date, email, password });
  };

  private getInputStatus = (valid: boolean): string => {
    return valid ? 'success' : 'danger';
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;
    const { firstName, lastName, date, email, password } = this.state;
    const {
      firstNameValid,
      lastNameValid,
      dateValid,
      emailValid,
      passwordValid,
      termsAccepted,
    } = this.state;

    const firstNameInputStatus: string = this.getInputStatus(firstNameValid);
    const lastNameInputStatus: string = this.getInputStatus(lastNameValid);
    const dateInputStatus: string = this.getInputStatus(dateValid);
    const emailInputStatus: string = this.getInputStatus(emailValid);
    const passwordInputStatus: string = this.getInputStatus(passwordValid);
    const signUpButtonEnabled: boolean = this.isFormValid();

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <ValidationInput
          style={[themedStyle.input, themedStyle.firstNameInput]}
          pattern={PATTERN_NAME}
          autoCapitalize='none'
          status={firstNameInputStatus}
          placeholder='First Name'
          value={firstName}
          onResult={this.onFirstNameValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={PATTERN_NAME}
          autoCapitalize='none'
          status={lastNameInputStatus}
          placeholder='Last Name'
          value={lastName}
          onResult={this.onLastNameValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={PATTERN_DOB}
          autoCapitalize='none'
          status={dateInputStatus}
          placeholder='Date of Birth'
          value={date}
          onResult={this.onDateValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={PATTERN_EMAIL}
          autoCapitalize='none'
          status={emailInputStatus}
          placeholder='Email'
          value={email}
          onResult={this.onEmailValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={PATTERN_PASSWORD}
          status={passwordInputStatus}
          autoCapitalize='none'
          secureTextEntry={true}
          placeholder='Password'
          value={password}
          onResult={this.onPasswordValidationResult}
        />
        <CheckBox
          style={themedStyle.termsCheckBox}
          size='small'
          checked={termsAccepted}
          text={'By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy'}
          onChange={this.onTermsAcceptChange}
        />
        <Button
          style={themedStyle.submitButton}
          size='giant'
          disabled={!signUpButtonEnabled}
          onPress={this.onSubmitPress}>
          Sign Up
        </Button>
      </View>
    );
  }
}

export const SignUpForm1 = withStyles(SignUpForm1Component, (theme: ThemeType) => ({
  container: {},
  input: {
    marginTop: 16,
    color: theme['color-basic-600'],
  },
  firstNameInput: {
    marginTop: 0,
  },
  termsCheckBox: {
    marginTop: 20,
    fontFamily: 'opensans-regular',
    fontSize: 11,
    color: theme['color-basic-600'],
  },
  submitButton: {
    marginVertical: 24,
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
}));
