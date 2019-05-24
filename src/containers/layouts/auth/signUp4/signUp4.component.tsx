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
  SignUpForm2,
  SignUpForm2Data,
  SocialAuth,
} from '@src/components/auth';
import { ProfilePhoto } from '@src/components/social';
import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import {
  evaIcons,
  IconSource,
  PlusIcon,
} from '@src/assets/icons';
import {
  imageSignUp4Bg,
  ImageSource,
} from '@src/assets/images';

interface ComponentProps {
  onSignUpPress: (formData: SignUpForm2Data) => void;
  onSignInPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onPhotoPress: () => void;
}

export type SignUp4Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignUpForm2Data | undefined;
}

class SignUp4Component extends React.Component<SignUp4Props, State> {

  public state: State = {
    formData: undefined,
  };

  private backgroundImage: ImageSource = imageSignUp4Bg;
  private profileImage: IconSource = evaIcons.personFill;

  private onFormDataChange = (formData: SignUpForm2Data) => {
    this.setState({ formData });
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress(this.state.formData);
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
      <ScrollableAvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={this.backgroundImage.imageSource}>
          <View style={themedStyle.headerContainer}>
            <ProfilePhoto
              style={themedStyle.photo}
              resizeMode='center'
              source={this.profileImage.imageSource}
              button={this.renderPhotoButton}
            />
          </View>
          <SignUpForm2
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.signUpButton}
            textStyle={textStyle.button}
            size='giant'
            disabled={!this.state.formData}
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
            textStyle={themedStyle.signUpText}
            appearance='ghost'
            activeOpacity={0.75}
            onPress={this.onSignInButtonPress}>
            Already have account? Sign In
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignUp4 = withStyles(SignUp4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
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
    backgroundColor: theme['background-color-default-1'],
    tintColor: theme['text-color-hint'],
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
    tintColor: 'white',
  },
  signUpButton: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: 'white',
    ...textStyle.subtitle,
  },
}));

