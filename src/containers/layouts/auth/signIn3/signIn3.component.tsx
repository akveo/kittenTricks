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
  SignIn2FormType,
  SignInForm2,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  Button,
  Text,
} from '@src/components/common';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onSignInPress: (formValue: SignIn2FormType) => void;
  onSignUpPress: () => void;
}

export type SignIn3Props = ThemedComponentProps & ComponentProps;

class SignIn3Component extends React.Component<SignIn3Props> {

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2
    .1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
  };

  private onSignInButtonPress = (formValue: SignIn2FormType) => {
    this.props.onSignInPress(formValue);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ImageBackground
          style={themedStyle.container}
          source={this.backgroundImage}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.helloLabel}>Hello</Text>
            <Text style={themedStyle.signInLabel}>Sign in to your account</Text>
          </View>
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            onSubmit={this.onSignInButtonPress}
          />
          <View style={themedStyle.signUpContainer}>
            <Text>Don't have an account?</Text>
            <Button
              style={themedStyle.signUpButton}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={this.onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>
        </ImageBackground>
      </AvoidKeyboard>
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
  signUpContainer: {
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
  signUpButton: {
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
  },
}));

