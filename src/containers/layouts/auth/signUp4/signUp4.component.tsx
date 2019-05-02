import React from 'react';
import {
  ButtonProps,
  ImageProps,
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
import {
  AvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import { PlusIcon } from '@src/assets/icons';
import { backgroundImage } from '@src/assets/images';

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

  private keyboardOffset = (height: number): number => {
    return height - 160;
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
        textStyle={textStyle.button}
        size='small'
        icon={this.renderPhotoButtonIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ImageOverlay
        style={themedStyle.container}
        source={backgroundImage}>
        <AvoidKeyboard offset={this.keyboardOffset}>
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
            textStyle={textStyle.button}
            size='giant'
            disabled={!this.state.formValue}
            onPress={this.onSignUpButtonPress}>
            SIGN UP
          </Button>
        </AvoidKeyboard>
        <SocialAuth
          iconStyle={themedStyle.socialAuthIcon}
          hint='Or Sign In using Social Media'
          onGooglePress={this.onGoogleButtonPress}
          onFacebookPress={this.onFacebookButtonPress}
          onTwitterPress={this.onTwitterButtonPress}
        />
        <Button
          style={themedStyle.signInButton}
          textStyle={themedStyle.signUpText}
          appearance='ghost'
          activeOpacity={0.75}
          onPress={this.onSignInButtonPress}>
          Already have account? Sign In
        </Button>
      </ImageOverlay>
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
  },
  signInButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: theme['font-light-color'],
    ...textStyle.subtitle,
  },
}));

