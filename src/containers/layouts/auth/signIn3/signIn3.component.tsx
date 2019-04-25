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
  SignInForm2Type,
  SignInForm2,
} from '@src/components/auth';
import { AvoidKeyboard } from '@src/components/common';

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

  private backgroundImage: ImageSourcePropType = {
    uri: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc',
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
            onFormValueChange={this.onFormValueChange}
          />
          <Button
            style={themedStyle.signInButton}
            size='giant'
            disabled={!this.state.formValue}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <Button
            style={themedStyle.signUpButton}
            appearance='ghost'
            activeOpacity={0.75}
            onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
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
  helloLabel: {
    fontFamily: 'raleway-extra-bold',
    fontSize: 60,
    lineHeight: 72,
    color: theme['color-white'],
  },
  signInLabel: {
    marginTop: 16,
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    lineHeight: 24,
    color: theme['color-white'],
  },
  signInButton: {
    marginHorizontal: 16,
    fontFamily: 'opensans-extrabold',
  },
  signUpButton: {
    marginVertical: 12,
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
    color: theme['color-white'],
  },
}));

