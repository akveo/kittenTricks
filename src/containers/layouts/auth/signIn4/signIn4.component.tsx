import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  View,
} from 'react-native';
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
  SocialAuth,
  SignInForm2,
  SignInForm2Type,
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
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
}

export type SignIn4Props = ThemedComponentProps & ComponentProps;

interface State {
  formValue: SignInForm2Type;
}

class SignIn4Component extends React.Component<SignIn4Props, State> {

  public state: State = {
    formValue: undefined,
  };

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress(this.state.formValue);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

  private onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

  private onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

  private onFormValueChange = (formValue: SignInForm2Type) => {
    this.setState({ formValue });
  };

  private keyboardOffset = (height: number): number => {
    return height - 176;
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
        <SocialAuth
          style={themedStyle.socialAuthContainer}
          iconStyle={themedStyle.socialAuthIcon}
          hint='Or Sign In using Social Media'
          onGooglePress={this.onGoogleButtonPress}
          onFacebookPress={this.onFacebookButtonPress}
          onTwitterPress={this.onTwitterButtonPress}
        />
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

export const SignIn4 = withStyles(SignIn4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  helloLabel: textStyle.headline,
  signInLabel: {
    marginTop: 16,
    ...textStyle.subtitle,
  },
  socialAuthIcon: {
    tintColor: theme['color-white'],
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

