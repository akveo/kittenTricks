import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ForgotPasswordForm,
  ForgotPasswordFormData,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import {
  imageForgotPasswordBg,
  ImageSource,
} from '@src/assets/images';

interface ComponentProps {
  onResetPress: (formData: ForgotPasswordFormData) => void;
}

export type ForgotPasswordProps = ThemedComponentProps & ComponentProps;

interface State {
  formData: ForgotPasswordFormData | undefined;
}

class ForgotPasswordComponent extends React.Component<ForgotPasswordProps, State> {

  public state: State = {
    formData: undefined,
  };

  private backgroundImage: ImageSource = imageForgotPasswordBg;

  private onFormDataChange = (formData: ForgotPasswordFormData) => {
    this.setState({ formData });
  };

  private keyboardOffset = (height: number): number => {
    return height * 0.5;
  };

  private onResetPasswordButtonPress = () => {
    this.props.onResetPress(this.state.formData);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ImageOverlay
        style={themedStyle.container}
        source={this.backgroundImage.imageSource}>
        <AvoidKeyboard offset={this.keyboardOffset}>
          <Text
            style={themedStyle.forgotPasswordLabel}
            appearance='light'
            category='h4'>
            Forgot Password
          </Text>
          <Text
            style={themedStyle.enterEmailLabel}
            appearance='light'>
            Please enter your email address
          </Text>
          <ForgotPasswordForm
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.resetButton}
            textStyle={textStyle.button}
            size='giant'
            disabled={!this.state.formData}
            onPress={this.onResetPasswordButtonPress}>
            RESET PASSWORD
          </Button>
        </AvoidKeyboard>
      </ImageOverlay>
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
    ...textStyle.headline,
  },
  enterEmailLabel: {
    alignSelf: 'center',
    marginTop: 64,
    ...textStyle.subtitle,
  },
  resetButton: {},
}));
