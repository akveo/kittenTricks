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
  SocialAuth,
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
  onSignUpPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
}

export type SignIn4Props = ThemedComponentProps & ComponentProps;

class SignIn4Component extends React.Component<SignIn4Props> {

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-1.2
    .1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80`,
  };

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onSignInButtonPress = (formValue: SignIn2FormType) => {
    this.props.onSignInPress(formValue);
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
          <SocialAuth
            style={themedStyle.socialAuthContainer}
            iconStyle={themedStyle.socialAuthIcon}
            hint='Or Sign In using Social Media'
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
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
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  signUpContainer: {
    marginVertical: 32,
    flexDirection: 'row',
    alignSelf: 'center',
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
  socialAuthIcon: {
    tintColor: theme['color-white'],
  },
  signUpButton: {
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
  },
  socialMediaLabel: {
    marginTop: 32,
    alignSelf: 'center',
    fontFamily: 'opensans-semibold',
  },
}));

