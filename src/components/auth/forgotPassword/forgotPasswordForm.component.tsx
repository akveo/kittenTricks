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
  ValidationInput,
} from '@src/components/common';
import { EmailIconFill } from '@src/assets/icons';

export interface ForgotPasswordFormType {
  email: string;
}

interface ComponentProps {
  onSubmit: (value: ForgotPasswordFormType) => void;
}

export type ForgotPasswordFormProps = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  email: string;
  emailValid: boolean;
}

class ForgotPasswordFormComponent extends React.Component<ForgotPasswordFormProps, State> {

  public state: State = {
    email: '',
    emailValid: false,
  };

  private emailValidator: RegExp = /\S+@\S+\.\S+/;

  private onSubmitButtonPress = () => {
    const { email } = this.state;

    this.props.onSubmit({ email });
  };

  private onEmailValidationResult = (emailValid: boolean, email: string) => {
    this.setState({
      emailValid,
      email,
    });
  };

  private isFormValid = (): boolean => {
    const { emailValid } = this.state;

    return emailValid;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;
    const { email, emailValid } = this.state;

    const emailInputStatus: string = emailValid ? 'success' : 'danger';
    const submitButtonEnabled: boolean = this.isFormValid();

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <ValidationInput
          style={themedStyle.emailInput}
          pattern={this.emailValidator}
          autoCapitalize='none'
          status={emailInputStatus}
          placeholder='Email'
          value={email}
          icon={EmailIconFill}
          onResult={this.onEmailValidationResult}
        />
        <Button
          style={themedStyle.submitButton}
          size='giant'
          disabled={!submitButtonEnabled}
          onPress={this.onSubmitButtonPress}>
          Reset Password
        </Button>
      </View>
    );
  }
}

export const ForgotPasswordForm = withStyles(ForgotPasswordFormComponent, (theme: ThemeType) => ({
  container: {},
  emailInput: {
    color: theme['color-basic-600'],
  },
  submitButton: {
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
}));
