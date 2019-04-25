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
import { Button } from '@kitten/ui';
import {
  SocialAuth,
  SignUpForm2,
  SignUpForm2Type,
} from '@src/components/auth';
import { ProfilePhoto } from '@src/components/social';
import { AvoidKeyboard } from '@src/components/common';
import { PlusIcon } from '@src/assets/icons';

interface ComponentProps {
  onSignUpPress: (formValue: SignUpForm2Type) => void;
  onSignInPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onPhotoPress: () => void;
}

export type SignUp4Props = ThemedComponentProps & ComponentProps;

interface State {
  formValue: SignUpForm2Type | undefined;
}

class SignUp4Component extends React.Component<SignUp4Props, State> {

  public state: State = {
    formValue: undefined,
  };

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-1.2]
    .1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80`,
  };

  private onFormValueChange = (formValue: SignUpForm2Type) => {
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
        size='small'
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
          <SignUpForm2
            style={themedStyle.formContainer}
            onFormValueChange={this.onFormValueChange}
          />
          <Button
            style={themedStyle.signUpButton}
            size='giant'
            disabled={!this.state.formValue}
            onPress={this.onSignUpButtonPress}>
            SIGN UP
          </Button>
          <SocialAuth
            iconStyle={themedStyle.socialAuthIcon}
            hint='Or Sign In using Social Media'
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
          <Button
            style={themedStyle.signInButton}
            appearance='ghost'
            activeOpacity={0.75}
            onPress={this.onSignInButtonPress}>
            Already have account? Sign In
          </Button>
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
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 160,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  photo: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignSelf: 'center',
    backgroundColor: theme['color-white'],
    tintColor: theme['color-basic-500'],
  },
  photoButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    transform: [{ translateY: 64 }],
  },
  photoButtonIcon: {
    width: 20,
    height: 20,
  },
  socialAuthIcon: {
    tintColor: theme['color-white'],
  },
  signUpButton: {
    marginVertical: 16,
    marginHorizontal: 16,
    fontFamily: 'opensans-extrabold',
  },
  signInButton: {
    marginVertical: 12,
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
    color: theme['color-white'],
  },
}));

