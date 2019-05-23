import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
  Layout,
} from '@kitten/ui';
import {
  SignInForm2,
  SignInForm2Data,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  onSignInPress: (formData: SignInForm2Data) => void;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
}

export type SignIn2Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignInForm2Data | undefined;
}

class SignIn2Component extends React.Component<SignIn2Props> {

  public state: State = {
    formData: undefined,
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress(this.state.formData);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onFormDataChange = (formData: SignInForm2Data) => {
    this.setState({ formData });
  };

  private keyboardOffset = (height: number): number => {
    return height - 56;
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <Layout style={themedStyle.container}>
        <AvoidKeyboard offset={this.keyboardOffset}>
          <Layout style={themedStyle.headerContainer}>
            <Text
              style={themedStyle.helloLabel}
              category='h1'>
              Hello
            </Text>
            <Text
              style={themedStyle.signInLabel}
              category='s1'>
              Sign in to your account
            </Text>
          </Layout>
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.signInButton}
            textStyle={textStyle.button}
            size='giant'
            disabled={!this.state.formData}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
        </AvoidKeyboard>
        <Button
          style={themedStyle.signUpButton}
          textStyle={themedStyle.signUpText}
          appearance='ghost'
          activeOpacity={0.75}
          onPress={this.onSignUpButtonPress}>
          Don't have an account? Create
        </Button>
      </Layout>
    );
  }
}

export const SignIn2 = withStyles(SignIn2Component, (theme: ThemeType) => {
  return ({
    container: {
      flex: 1,
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 216,
      backgroundColor: theme['color-primary-default'],
    },
    formContainer: {
      flex: 1,
      marginTop: 32,
      paddingHorizontal: 16,
    },
    helloLabel: {
      color: 'white',
      ...textStyle.headline,
    },
    signInLabel: {
      marginTop: 16,
      color: 'white',
      ...textStyle.subtitle,
    },
    signInButton: {
      marginHorizontal: 16,
    },
    signUpButton: {
      marginVertical: 12,
    },
    signUpText: {
      color: theme['text-color-hint'],
      ...textStyle.subtitle,
    },
  });
});

