import React from 'react';
import {
  ImageProps,
  View,
} from 'react-native';
import {
  StyleType,
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
  SignInForm1,
  SignInForm1Data,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import {
  ForwardIcon,
  HeartIcon,
} from '@src/assets/icons';
import {
  imageSignIn1Bg,
  ImageSource,
} from '@src/assets/images';

interface ComponentProps {
  onSignInPress: (formData: SignInForm1Data) => void;
  onSignUpPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onEwaPress: () => void;
}

export type SignIn1Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignInForm1Data | undefined;
}

class SignIn1Component extends React.Component<SignIn1Props, State> {

  public state: State = {
    formData: undefined,
  };

  private backgroundImage: ImageSource = imageSignIn1Bg;

  private onSignInButtonPress = () => {
    this.props.onSignInPress(this.state.formData);
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

  private onEwaButtonPress = () => {
    this.props.onEwaPress();
  };

  private onFormDataChange = (formData: SignInForm1Data) => {
    this.setState({ formData });
  };

  private keyboardOffset = (height: number): number => {
    return height - 152;
  };

  private renderEwaButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return HeartIcon({ ...style, ...themedStyle.ewaButtonIcon });
  };

  private renderSignUpButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return ForwardIcon({ ...style, ...themedStyle.signUpButtonIcon });
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ImageOverlay
        style={themedStyle.container}
        source={this.backgroundImage.imageSource}>
        <AvoidKeyboard offset={this.keyboardOffset}>
          <Button
            style={themedStyle.ewaButton}
            textStyle={textStyle.button}
            size='large'
            activeOpacity={0.75}
            icon={this.renderEwaButtonIcon}
            onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signInContainer}>
            <Text
              style={themedStyle.signInLabel}
              appearance='light'
              category='h4'>
              SIGN IN
            </Text>
            <Button
              style={themedStyle.signUpButton}
              textStyle={themedStyle.signUpButtonText}
              activeOpacity={0.75}
              appearance='ghost'
              size='giant'
              icon={this.renderSignUpButtonIcon}
              onPress={this.onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>
          <SignInForm1
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            size='large'
            textStyle={textStyle.button}
            disabled={!this.state.formData}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
        </AvoidKeyboard>
        <SocialAuth
          style={themedStyle.socialAuthContainer}
          iconStyle={themedStyle.socialAuthIcon}
          hint='Sign with a social account'
          onGooglePress={this.onGoogleButtonPress}
          onFacebookPress={this.onFacebookButtonPress}
          onTwitterPress={this.onTwitterButtonPress}
        />
      </ImageOverlay>
    );
  }
}

export const SignIn1 = withStyles(SignIn1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  socialAuthContainer: {
    marginTop: 48,
  },
  ewaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
    backgroundColor: theme['opacity-transparent'],
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  signInLabel: {
    flex: 1,
    ...textStyle.headline,
  },
  signUpButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  signUpButtonText: {
    color: theme['font-light-color'],
  },
  signUpButtonIcon: {
    marginHorizontal: 0,
    tintColor: theme['color-white'],
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  socialAuthIcon: {
    tintColor: theme['color-white'],
  },
}));


