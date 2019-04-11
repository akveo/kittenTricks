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
  SignUpForm2,
  SignUpForm2Type,
} from '@src/components/auth';
import { ProfilePhoto } from '@src/components/social';
import {
  AvoidKeyboard,
  Button,
  Text,
} from '@src/components/common';
import { PlusIcon } from '@src/assets/icons';

interface ComponentProps {
  onSignUpPress: (formValue: SignUpForm2Type) => void;
  onSignInPress: () => void;
  onPhotoPress: () => void;
}

export type SignUp3Props = ThemedComponentProps & ComponentProps;

class SignUp3Component extends React.Component<SignUp3Props> {

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2
    .1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
  };

  private profileImage: ImageSourcePropType = {
    uri: 'https://akveo.github.io/eva-icons/fill/png/128/person.png',
  };

  private onPhotoButtonPress = () => {
    this.props.onPhotoPress();
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  private onSignUpButtonPress = (formValue: SignUpForm2Type) => {
    this.props.onSignUpPress(formValue);
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
              source={this.profileImage}
              button={this.renderPhotoButton}
            />
          </View>
          <SignUpForm2
            style={themedStyle.formContainer}
            onSubmit={this.onSignUpButtonPress}
          />
          <View style={themedStyle.signInContainer}>
            <Text>Already have an account?</Text>
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

export const SignUp3 = withStyles(SignUp3Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: ['color-white'],
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
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
  signInButton: {
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
  },
}));

