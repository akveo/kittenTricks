import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
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
  SignUpForm,
  SignUpFormType,
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
  onSignUpPress: (value: SignUpFormType) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class SignUpComponent extends React.Component<Props> {

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

  private onSignUpButtonPress = (value: SignUpFormType) => {
    this.props.onSignUpPress(value);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ScrollView style={themedStyle.container}>
          <ImageOverlay
            style={themedStyle.header}
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
          </ImageOverlay>
          <View style={themedStyle.signContainer}>
            <SocialAuth
              hintStyle={themedStyle.socialAuthHint}
              iconStyle={themedStyle.socialAuthIcon}
              hint='Sign with a social account'
              onGooglePress={this.onGoogleButtonPress}
              onFacebookPress={this.onFacebookButtonPress}
              onTwitterPress={this.onTwitterButtonPress}
            />
            <View style={themedStyle.orContainer}>
              <View style={themedStyle.divider}/>
              <Text style={themedStyle.orLabel}>OR</Text>
              <View style={themedStyle.divider}/>
            </View>
            <Text style={themedStyle.emailSignLabel}>Sign up with Email</Text>
          </View>
          <SignUpForm
            style={themedStyle.signUpForm}
            onSubmit={this.onSignUpButtonPress}
          />
        </ScrollView>
      </AvoidKeyboard>
    );
  }
}

export const SignUp = withStyles(SignUpComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    height: 192,
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
  signContainer: {
    marginTop: 24,
  },
  socialAuthHint: {
    color: '#0D1C2E',
  },
  socialAuthIcon: {
    tintColor: '#0D1C2E',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 52,
  },
  orLabel: {
    fontFamily: 'anton-regular',
    color: '#0D1C2E',
    fontSize: 24,
    marginHorizontal: 8,
  },
  emailSignLabel: {
    alignSelf: 'center',
    color: '#0D1C2E',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#EDF0F5',
  },
  signUpForm: {
    marginTop: 72,
    paddingHorizontal: 16,
  },
}));

