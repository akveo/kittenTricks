import React from 'react';
import {
  ButtonProps,
  ImageBackground,
  ImageProps,
  ImageSourcePropType,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  SignIn4FormType,
  SignUpForm4,
  SocialAuth,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  Button,
  Text,
} from '@src/components/common';
import { ProfilePhoto } from '@src/components/social';
import { PlusIcon } from '@src/assets/icons';

interface ComponentProps {
  onSignUpPress: (formValue: SignIn4FormType) => void;
  onSignInPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onPhotoPress: () => void;
}

export type SignUp4Props = ThemedComponentProps & ComponentProps;

class SignUp4Component extends React.Component<SignUp4Props> {

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80`,
  };

  private onSignUpButtonPress = (formValue: SignIn4FormType) => {
    this.props.onSignUpPress(formValue);
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

  private onPhotoButtonPress = () => {
    this.props.onPhotoPress();
  };

  private renderPhotoButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return PlusIcon({ ...style, ...themedStyle.photoButtonIcon });
  };

  private renderPhotoButton = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.photoButton}
        icon={this.renderPhotoButtonIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ImageBackground
          style={themedStyle.container}
          source={this.backgroundImage}>
          <View style={themedStyle.headerContainer}>
            <ProfilePhoto
              style={themedStyle.photo}
              resizeMode='center'
              source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/person.png' }}
              button={this.renderPhotoButton}
            />
          </View>
          <SignUpForm4
            style={themedStyle.formContainer}
            onSubmit={this.onSignUpButtonPress}
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
            <Text>Already have account?</Text>
            <Button
              style={themedStyle.signInButton}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={this.onSignInButtonPress}>
              Sign In
            </Button>
          </View>
        </ImageBackground>
      </AvoidKeyboard>
    );
  }
}

export const SignUp4 = withStyles(SignUp4Component, (theme: ThemeType) => ({
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
    paddingHorizontal: 16,
  },
  signUpContainer: {
    marginTop: 24,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
    backgroundColor: theme['color-white'],
    tintColor: theme['color-basic-500'],
  },
  photoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    transform: [{ translateY: 80 }],
  },
  photoButtonIcon: {
    width: 24,
    height: 24,
  },
  socialAuthIcon: {
    tintColor: theme['color-white'],
  },
  signInButton: {
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
  },
}));

