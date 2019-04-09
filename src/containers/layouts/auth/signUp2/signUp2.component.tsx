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
import {
  SignUpForm2,
  SignUp2FormType,
} from '@src/components/auth';
import { ProfilePhoto } from '@src/components/social';
import {
  AvoidKeyboard,
  Button,
  Text,
} from '@src/components/common';
import { PlusIcon } from '@src/assets/icons';

interface ComponentProps {
  onPhotoPress: () => void;
  onSignUpPress: (formValue: SignUp2FormType) => void;
  onSignInPress: () => void;
}

export type SignUp2Props = ThemedComponentProps & ComponentProps;

class SignUp2Component extends React.Component<SignUp2Props> {

  private onPhotoButtonPress = () => {
    this.props.onPhotoPress();
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  private onSignUpButtonPress = (formValue: SignUp2FormType) => {
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
        activeOpacity={0.95}
        icon={this.renderPhotoButtonIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <View style={themedStyle.container}>
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
            onSubmit={this.onSignUpButtonPress}
          />
          <View style={themedStyle.haveAccountContainer}>
            <Text style={themedStyle.haveAccountLabel}>Already have an account?</Text>
            <Button
              style={themedStyle.signInButton}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={this.onSignInButtonPress}>
              Sign In
            </Button>
          </View>
        </View>
      </AvoidKeyboard>
    );
  }
}

export const SignUp2 = withStyles(SignUp2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: ['color-white'],
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: theme['color-primary-500'],
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  haveAccountContainer: {
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
    tintColor: theme['color-primary-500'],
  },
  photoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    transform: [{ translateY: 80 }],
    backgroundColor: theme['color-primary-100'],
  },
  photoButtonIcon: {
    width: 24,
    height: 24,
    tintColor: theme['blue-primary'],
  },
  haveAccountLabel: {
    color: theme['color-basic-600'],
  },
  signInButton: {
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
    color: theme['color-basic-600'],
  },
}));

