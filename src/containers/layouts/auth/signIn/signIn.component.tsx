import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  ButtonAlignments,
} from '@kitten/ui';
import {
  SocialAuth,
  SignInForm,
  SignInFormType,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  ImageOverlay,
  Text,
} from '@src/components/common';
import { overlayLogin1 } from '@src/assets/images';
import { ForwardIcon } from '@src/assets/icons';

interface ComponentProps {
  onLoginPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onSignInPress: (value: SignInFormType) => void;
}

export type SignInProps = ThemedComponentProps & ComponentProps;

class SignInComponent extends React.Component<SignInProps> {

  private onLoginButtonPress = () => {
    this.props.onLoginPress();
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

  private onSignInButtonPress = (value: SignInFormType) => {
    this.props.onSignInPress(value);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={overlayLogin1}>
          <View style={themedStyle.loginContainer}>
            <Text style={themedStyle.loginLabel}>Login</Text>
            <Button
              style={themedStyle.forwardButton}
              activeOpacity={0.5}
              size='giant'
              icon={ForwardIcon}
              alignment={ButtonAlignments.RIGHT}
              onPress={this.onLoginButtonPress}>
              Button
            </Button>
          </View>
          <SignInForm
            style={themedStyle.signInForm}
            onSubmit={this.onSignInButtonPress}
          />
          <SocialAuth
            style={themedStyle.socialAuth}
            hint='Sign with a social account'
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
        </ImageOverlay>
      </AvoidKeyboard>
    );
  }
}

export const SignIn = withStyles(SignInComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginLabel: {
    fontFamily: 'anton-regular',
    fontSize: 32,
  },
  forwardButton: {
    backgroundColor: 'transparent',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  signInForm: {
    marginTop: 96,
  },
  socialAuth: {
    marginHorizontal: 8,
    marginTop: 48,
    marginBottom: 36,
  },
}));


