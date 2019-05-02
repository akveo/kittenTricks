import React from 'react';
import {
  ImageProps,
  ImageSourcePropType,
  ScrollView,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  Button,
  ButtonIconAlignments,
} from '@kitten/ui';
import {
  SocialAuth,
  SignUpForm1,
  SignUpForm1Type,
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

interface ComponentProps {
  onSignUpPress: (value: SignUpForm1Type) => void;
  onSignInPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onEwaPress: () => void;
}

export type SignUp1Props = ThemedComponentProps & ComponentProps;

interface State {
  formValue: SignUpForm1Type;
}

class SignUp1Component extends React.Component<SignUp1Props, State> {

  public state: State = {
    formValue: undefined,
  };

  private headerImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1480264104733-84fb0b925be3?ixlib=rb-1.2
    .1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
  };

  private onFormValueChange = (formValue: SignUpForm1Type) => {
    this.setState({ formValue });
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress(this.state.formValue);
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
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

  private renderEwaButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return HeartIcon({ ...style, ...themedStyle.ewaButtonIcon });
  };

  private renderSignInButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return ForwardIcon({ ...style, ...themedStyle.signInButtonIcon });
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ScrollView style={themedStyle.container}>
          <ImageOverlay
            style={themedStyle.headerContainer}
            source={this.headerImage}>
            <Button
              style={themedStyle.ewaButton}
              textStyle={textStyle.button}
              size='large'
              activeOpacity={0.75}
              icon={this.renderEwaButtonIcon}
              onPress={this.onEwaButtonPress}>
              EWA
            </Button>
            <View style={themedStyle.signUpContainer}>
              <Text
                style={themedStyle.signInLabel}
                appearance='light'
                category='h4'>
                SIGN UP
              </Text>
              <Button
                style={themedStyle.signInButton}
                textStyle={themedStyle.signInButtonText}
                appearance='ghost'
                size='giant'
                activeOpacity={0.75}
                iconAlignment={ButtonIconAlignments.RIGHT}
                icon={this.renderSignInButtonIcon}
                onPress={this.onSignInButtonPress}>
                Sign In
              </Button>
            </View>
          </ImageOverlay>
          <SocialAuth
            style={themedStyle.socialAuthContainer}
            hintStyle={themedStyle.socialAuthHint}
            iconStyle={themedStyle.socialAuthIcon}
            hint='Sign with a social account'
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
          <View style={themedStyle.orContainer}>
            <View style={themedStyle.divider}/>
            <Text
              style={themedStyle.orLabel}
              appearance='dark'
              category='h5'>
              OR
            </Text>
            <View style={themedStyle.divider}/>
          </View>
          <Text
            style={themedStyle.emailSignLabel}
            appearance='dark'>
            Sign up with Email
          </Text>
          <SignUpForm1
            style={themedStyle.formContainer}
            onFormValueChange={this.onFormValueChange}
          />
          <Button
            style={themedStyle.signUpButton}
            textStyle={textStyle.button}
            size='large'
            disabled={!this.state.formValue}
            onPress={this.onSignUpButtonPress}>
            SIGN UP
          </Button>
        </ScrollView>
      </AvoidKeyboard>
    );
  }
}

export const SignUp1 = withStyles(SignUp1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 200,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  formContainer: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  ewaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
    backgroundColor: theme['opacity-transparent'],
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
  },
  signInLabel: {
    flex: 1,
    ...textStyle.headline,
  },
  signInButton: {
    paddingHorizontal: 0,
  },
  signInButtonText: {
    color: theme['font-light-color'],
    ...textStyle.button,
  },
  signInButtonIcon: {
    marginHorizontal: 0,
    tintColor: theme['color-white'],
  },
  signUpButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  socialAuthHint: {
    color: theme['font-primary-color'],
    ...textStyle.paragraph,
  },
  socialAuthIcon: {
    tintColor: theme['font-primary-color'],
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 52,
  },
  orLabel: {
    marginHorizontal: 8,
    ...textStyle.headline,
  },
  emailSignLabel: {
    alignSelf: 'center',
    marginTop: 8,
    ...textStyle.paragraph,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme['color-basic-200'],
  },
}));

