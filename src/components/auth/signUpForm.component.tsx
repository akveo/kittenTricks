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

export interface SignUpFormType {
  firstName: string;
  lastName: string;
  date: string;
  email: string;
  password: string;
}

interface ComponentProps {
  onSubmit: (value: SignUpFormType) => void;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  isFirstNameValid: boolean;
  isLastNameValid: boolean;
  isDateValid: boolean;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isTermsAccept: boolean;
  firstName: string;
  lastName: string;
  date: string;
  email: string;
  password: string;
}

class SignUpFormComponent extends React.Component<Props, State> {

  public state: State = {
    isFirstNameValid: false,
    isLastNameValid: false,
    isDateValid: false,
    isEmailValid: false,
    isPasswordValid: false,
    isTermsAccept: false,
    firstName: '',
    lastName: '',
    date: '',
    email: '',
    password: '',
  };

  private nameValidator: RegExp = /[a-z ,.'-]+/;
  private dateValidator: RegExp = /\d{1,2}\/\d{1,2}\/\d{4}/;
  private emailValidator: RegExp = /\S+@\S+\.\S+/;
  private passwordValidator: RegExp = /[a-z0-9]{8,}/;

  private onFirstNameValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isFirstNameValid: valid,
      firstName: value,
    });
  };

  private onLastNameValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isLastNameValid: valid,
      lastName: value,
    });
  };

  private onDateValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isDateValid: valid,
      date: value,
    });
  };

  private onEmailValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isEmailValid: valid,
      email: value,
    });
  };

  private onPasswordValidationResult = (valid: boolean, value: string) => {
    this.setState({
      isPasswordValid: valid,
      password: value,
    });
  };

  private onTermsAcceptChange = (value: boolean) => {
    this.setState({
      isTermsAccept: value,
    });
  };

  private isFormValid = (): boolean => {
    return this.state.isFirstNameValid
      && this.state.isLastNameValid
      && this.state.isDateValid
      && this.state.isEmailValid
      && this.state.isPasswordValid
      && this.state.isTermsAccept;
  };

  private onSubmitPress = () => {
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      date: this.state.date,
      email: this.state.email,
      password: this.state.password,
    });
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <View {...restProps}>
        <ValidationInput
          style={[themedStyle.input, themedStyle.firstNameInput]}
          pattern={this.nameValidator}
          status={this.state.isFirstNameValid ? 'success' : 'error'}
          placeholder='First Name'
          value={this.state.firstName}
          onResult={this.onFirstNameValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={this.nameValidator}
          status={this.state.isLastNameValid ? 'success' : 'error'}
          placeholder='Last Name'
          value={this.state.lastName}
          onResult={this.onLastNameValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={this.dateValidator}
          status={this.state.isDateValid ? 'success' : 'error'}
          placeholder='Date of Birth'
          value={this.state.date}
          onResult={this.onDateValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={this.emailValidator}
          status={this.state.isEmailValid ? 'success' : 'error'}
          placeholder='Email'
          value={this.state.email}
          onResult={this.onEmailValidationResult}
        />
        <ValidationInput
          style={themedStyle.input}
          pattern={this.passwordValidator}
          status={this.state.isPasswordValid ? 'success' : 'error'}
          onResult={this.onPasswordValidationResult}
          placeholder='Password'
          value={this.state.password}
          secureTextEntry={true}
        />
        <View style={themedStyle.termsContainer}>
          <CheckBox
            style={themedStyle.termsCheckBox}
            size='small'
            checked={this.state.isTermsAccept}
            onChange={this.onTermsAcceptChange}
            text={'By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy'}
          />
        </View>
        <Button
          style={themedStyle.button}
          disabled={!this.isFormValid()}
          onPress={this.onSubmitPress}>
          SIGN UP
        </Button>
      </View>
    );
  }
}

export const SignUpForm = withStyles(SignUpFormComponent, (theme: ThemeType) => ({
  input: {
    marginTop: 16,
    color: '#8992A3',
  },
  firstNameInput: {
    marginTop: 0,
  },
  termsContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  termsCheckBox: {
    fontFamily: 'opensans-regular',
    fontSize: 11,
    color: '#8992A3',
  },
  button: {
    height: 40,
    marginVertical: 24,
  },
}));
