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

export type SignUp2Props = ThemedComponentProps & ComponentProps;

interface State {
  formValue: SignUpForm2Type;
}

class SignUp2Component extends React.Component<SignUp2Props, State> {

  public state: State = {
    formValue: undefined,
  };

  private onFormValueChange = (formValue: SignUpForm2Type) => {
    this.setState({ formValue });
  };

  private onPhotoButtonPress = () => {
    this.props.onPhotoPress();
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress(this.state.formValue);
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
            onFormValueChange={this.onFormValueChange}
          />
          <Button
            style={themedStyle.signUpButton}
            size='giant'
            disabled={!this.state.formValue}
            onPress={this.onSignUpButtonPress}>
            Sign Up
          </Button>
          <View style={themedStyle.signInContainer}>
            <Text style={themedStyle.signInLabel}>Already have an account?</Text>
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
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
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
  signUpButton: {
    marginHorizontal: 16,
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
  signInLabel: {
    color: theme['color-basic-600'],
  },
  signInButton: {
    paddingHorizontal: 0,
    fontFamily: 'opensans-semibold',
    color: theme['color-basic-600'],
  },
}));

