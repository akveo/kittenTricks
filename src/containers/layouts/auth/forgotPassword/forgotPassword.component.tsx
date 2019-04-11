import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ForgotPasswordForm,
  ForgotPasswordFormType,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  ImageOverlay,
  Text,
} from '@src/components/common';

interface ComponentProps {
  onResetPress: (formValue: ForgotPasswordFormType) => void;
}

export type ForgotPasswordProps = ThemedComponentProps & ComponentProps;

class ForgotPasswordComponent extends React.Component<ForgotPasswordProps> {

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1457459686225-c7db79d4e59f?ixlib=rb-1.2
    .1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80`,
  };

  private onResetPasswordButtonPress = (formValue: ForgotPasswordFormType) => {
    this.props.onResetPress(formValue);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={this.backgroundImage}>
          <Text style={themedStyle.forgotPasswordLabel}>Forgot Password</Text>
          <Text style={themedStyle.enterEmailLabel}>Please enter your email address</Text>
          <ForgotPasswordForm
            style={themedStyle.formContainer}
            onSubmit={this.onResetPasswordButtonPress}
          />
        </ImageOverlay>
      </AvoidKeyboard>
    );
  }
}

export const ForgotPassword = withStyles(ForgotPasswordComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    alignSelf: 'center',
    marginTop: 24,
    fontFamily: 'raleway-bold',
    fontSize: 32,
  },
  enterEmailLabel: {
    alignSelf: 'center',
    marginTop: 64,
    fontFamily: 'opensans-semibold',
  },
}));
