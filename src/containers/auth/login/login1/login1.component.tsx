import React from 'react';
import {
  ImageBackground,
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
  AvoidKeyboard,
  Input,
  Text,
} from '@src/components/common';
import { SocialAuth } from '@src/components/auth';
import { overlayLogin1 } from '@src/assets/images';
import { ForwardIcon } from '@src/assets/icons';

interface Login1ComponentProps {
  onButtonPress: (email: string, password: string) => void;
  onGoogleButtonPress: () => void;
  onFacebookButtonPress: () => void;
  onTwitterButtonPress: () => void;
  onForgotPasswordPress: () => void;
}

type Props = ThemedComponentProps & Login1ComponentProps;

class Login1Component extends React.Component<Props> {

  private onGooglePress = () => {
    this.props.onGoogleButtonPress();
  };

  private onFacebookPress = () => {
    this.props.onFacebookButtonPress();
  };

  private onTwitterPress = () => {
    this.props.onTwitterButtonPress();
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ImageBackground
          style={themedStyle.container}
          source={overlayLogin1}>
          <View style={themedStyle.loginContainer}>
            <Text
              style={themedStyle.loginLabel}
              category='h2'>
              Login
            </Text>
            <Button
              style={themedStyle.forwardButton}
              activeOpacity={0.5}
              size='giant'
              icon={ForwardIcon}
              alignment={ButtonAlignments.RIGHT}>
              Button
            </Button>
          </View>
          <Input
            style={[themedStyle.input, themedStyle.emailInput]}
            defaultValue='ally.watsan@gmail.com'
          />
          <Input
            style={[themedStyle.input, themedStyle.passwordInput]}
            secureTextEntry={true}
            defaultValue='qw3rty123'
          />
          <Button style={themedStyle.button}>BUTTON</Button>
          <SocialAuth
            style={themedStyle.socialAuth}
            hint='Sign with a social account'
            onGooglePress={this.onGooglePress}
            onFacebookPress={this.onFacebookPress}
            onTwitterPress={this.onTwitterPress}
          />
        </ImageBackground>
      </AvoidKeyboard>
    );
  }
}

export const Login1 = withStyles(Login1Component, (theme: ThemeType) => ({
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
  emailInput: {
    marginTop: 96,
  },
  passwordInput: {
    marginTop: 40,
  },
  button: {
    height: 48,
    marginTop: 86,
  },
  socialAuth: {
    marginHorizontal: 8,
    marginTop: 48,
    marginBottom: 36,
  },
}));


