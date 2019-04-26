import React from 'react';
import {
  ImageSourcePropType,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Tab,
  TabView,
  Text,
  Button,
} from '@kitten/ui';
import {
  SignInForm3,
  SignInForm4,
  SignInForm3Type,
  SignInForm4Type,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  onSignInEmailPress: (formValue: SignInForm3Type) => void;
  onSignInSMSPress: (formValue: SignInForm4Type) => void;
  onSignUpPress: () => void;
}

const TAB_INDEX_EMAIL: number = 0;
const TAB_INDEX_SMS: number = 1;

export type SignIn5Props = ThemedComponentProps & ComponentProps;

interface State {
  selectedTabIndex: number;
  emailFormValue: SignInForm3Type;
  smsFormValue: SignInForm4Type;
}

class SignIn5Component extends React.Component<SignIn5Props, State> {

  public state: State = {
    selectedTabIndex: 0,
    emailFormValue: undefined,
    smsFormValue: undefined,
  };

  private backgroundImage: ImageSourcePropType = {
    uri: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
  };

  private onSignInButtonPress = () => {
    const { selectedTabIndex } = this.state;

    const formValue: SignInForm3Type | SignInForm4Type = this.getSelectedFormValue();

    switch (selectedTabIndex) {
      case TAB_INDEX_EMAIL:
        this.props.onSignInEmailPress(formValue as SignInForm3Type);
        break;
      case TAB_INDEX_SMS:
        this.props.onSignInSMSPress(formValue as SignInForm4Type);
        break;
    }
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onTabSelect = (selectedTabIndex: number) => {
    this.setState({ selectedTabIndex });
  };

  private onEmailFormValueChange = (emailFormValue: SignInForm3Type | undefined) => {
    this.setState({ emailFormValue });
  };

  private onSMSFormValueChange = (smsFormValue: SignInForm4Type | undefined) => {
    this.setState({ smsFormValue });
  };

  private getSelectedFormValue = (): SignInForm3Type | SignInForm4Type => {
    const { selectedTabIndex, emailFormValue, smsFormValue } = this.state;

    switch (selectedTabIndex) {
      case TAB_INDEX_EMAIL:
        return emailFormValue;
      case TAB_INDEX_SMS:
        return smsFormValue;
    }
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;
    const signInButtonEnabled: boolean = !!this.getSelectedFormValue();

    return (
      <AvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={this.backgroundImage}>
          <View style={themedStyle.headerContainer}>
            <Text
              style={themedStyle.helloLabel}
              appearance='light'>
              Sign In
            </Text>
            <Text
              style={themedStyle.signInLabel}
              appearance='light'
              category='s1'>
              Sign in to your account with Email or SMS
            </Text>
          </View>
          <TabView
            style={themedStyle.tabView}
            selectedIndex={this.state.selectedTabIndex}
            onSelect={this.onTabSelect}>
            <Tab
              style={themedStyle.tab}
              title='EMAIL'>
              <SignInForm3
                style={themedStyle.tabContentContainer}
                onFormValueChange={this.onEmailFormValueChange}
              />
            </Tab>
            <Tab
              style={themedStyle.tab}
              title='SMS'>
              <View>
                <SignInForm4
                  style={themedStyle.tabContentContainer}
                  onFormValueChange={this.onSMSFormValueChange}
                />
                <Text
                  style={themedStyle.smsCaptionLabel}
                  appearance='light'>
                  within a minute you should receive
                  an SMS with the code
                </Text>
              </View>
            </Tab>
          </TabView>
          <Button
            style={themedStyle.signInButton}
            size='giant'
            disabled={!signInButtonEnabled}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <Button
            style={themedStyle.signUpButton}
            appearance='ghost'
            activeOpacity={0.75}
            onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </AvoidKeyboard>
    );
  }
}

export const SignIn5 = withStyles(SignIn5Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    paddingHorizontal: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContentContainer: {
    marginVertical: 8,
  },
  tabView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tab: {
    color: theme['font-light-color'],
  },
  helloLabel: {
    fontFamily: 'opensans-bold',
    fontSize: 26,
    lineHeight: 32,
  },
  signInLabel: {
    marginTop: 8,
    textAlign: 'center',
    ...textStyle.subtitle,
  },
  smsCaptionLabel: {
    textAlign: 'center',
    paddingHorizontal: 32,
    ...textStyle.paragraph,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    paddingHorizontal: 0,
    color: theme['font-light-color'],
    ...textStyle.subtitle,
  },
}));

