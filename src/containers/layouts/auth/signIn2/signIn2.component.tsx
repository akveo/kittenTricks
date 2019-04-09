import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  SignInForm2,
  SignIn2FormType,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  Button,
  Text,
} from '@src/components/common';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onSignInPress: (formValue: SignIn2FormType) => void;
  onCreateAccountPress: () => void;
}

export type SignIn2Props = ThemedComponentProps & ComponentProps;

class SignIn2Component extends React.Component<SignIn2Props> {

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onSignInButtonPress = (formValue: SignIn2FormType) => {
    this.props.onSignInPress(formValue);
  };

  private onCreateAccountButtonPress = () => {
    this.props.onCreateAccountPress();
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <View style={themedStyle.container}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.helloLabel}>Hello</Text>
            <Text style={themedStyle.signInLabel}>Sign in to your account</Text>
          </View>
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            onSubmit={this.onSignInButtonPress}
          />
          <View style={themedStyle.createAccountContainer}>
            <Text style={themedStyle.haveAccountLabel}>Don't have an account?</Text>
            <Button
              style={themedStyle.createAccountButton}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={this.onCreateAccountButtonPress}>
              Create
            </Button>
          </View>
        </View>
      </AvoidKeyboard>
    );
  }
}

export const SignIn2 = withStyles(SignIn2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: ['color-white'],
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: theme['color-primary-500'],
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  createAccountContainer: {
    marginTop: 24,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloLabel: {
    fontFamily: 'raleway-extra-bold',
    fontSize: 60,
    lineHeight: 72,
  },
  signInLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 16,
  },
  haveAccountLabel: {
    color: theme['color-basic-600'],
  },
  createAccountButton: {
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
    color: theme['color-basic-600'],
  },
}));

