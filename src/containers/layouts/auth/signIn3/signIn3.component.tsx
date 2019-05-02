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
} from '@kitten/ui';
import {
  SignInForm2Type,
  SignInForm2,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import { backgroundImage } from '@src/assets/images';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onSignInPress: (formValue: SignInForm2Type) => void;
  onSignUpPress: () => void;
}

export type SignIn3Props = ThemedComponentProps & ComponentProps;

interface State {
  formValue: SignInForm2Type;
}

class SignIn3Component extends React.Component<SignIn3Props, State> {

  public state: State = {
    formValue: undefined,
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress(this.state.formValue);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onFormValueChange = (formValue: SignInForm2Type) => {
    this.setState({ formValue });
  };

  private keyboardOffset = (height: number): number => {
    return height - 56;
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ImageOverlay
        style={themedStyle.container}
        source={backgroundImage}>
        <AvoidKeyboard offset={this.keyboardOffset}>
          <View style={themedStyle.headerContainer}>
            <Text
              style={themedStyle.helloLabel}
              appearance='light'
              category='h2'>
              Hello
            </Text>
            <Text
              style={themedStyle.signInLabel}
              appearance='light'
              category='s1'>
              Sign in to your account
            </Text>
          </View>
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            onFormValueChange={this.onFormValueChange}
          />
          <Button
            style={themedStyle.signInButton}
            textStyle={textStyle.button}
            size='giant'
            disabled={!this.state.formValue}
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
          Don't have an account? Sign Up
        </Button>
      </ImageOverlay>
    );
  }
}

export const SignIn3 = withStyles(SignIn3Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: ['color-white'],
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  helloLabel: textStyle.headline,
  signInLabel: {
    marginTop: 16,
    ...textStyle.subtitle,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: theme['font-light-color'],
    ...textStyle.subtitle,
  },
}));

