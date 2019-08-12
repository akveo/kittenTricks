import React from 'react';
import {
  ImageStyle,
  StyleProp,
  TextProps,
  TextStyle,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';
import {
  FacebookIconFill,
  GoogleIconFill,
  TwitterIconFill,
} from '@src/assets/icons';
import { SocialButton } from './socialAuthButton.component';

interface ComponentProps {
  hint?: string;
  hintStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
}

export type SocialAuthProps = ThemedComponentProps & ViewProps & ComponentProps;

class SocialAuthComponent extends React.Component<SocialAuthProps> {

  private renderCaptionElement = (style: StyleProp<TextStyle>): React.ReactElement<TextProps> => {
    const { hint } = this.props;

    return (
      <Text
        style={style}>
        {hint}
      </Text>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, hintStyle, iconStyle, hint, ...restProps } = this.props;
    const { buttonContainer, ...componentStyle } = themedStyle;

    return (
      <View {...restProps}>
        {hint ? this.renderCaptionElement([componentStyle.hint, hintStyle]) : null}
        <View style={buttonContainer}>
          <SocialButton
            activeOpacity={0.75}
            icon={GoogleIconFill}
            iconStyle={iconStyle}
            onPress={this.props.onGooglePress}
          />
          <SocialButton
            activeOpacity={0.75}
            icon={FacebookIconFill}
            iconStyle={iconStyle}
            onPress={this.props.onFacebookPress}
          />
          <SocialButton
            activeOpacity={0.75}
            icon={TwitterIconFill}
            iconStyle={iconStyle}
            onPress={this.props.onTwitterPress}
          />
        </View>
      </View>
    );
  }
}

export const SocialAuth = withStyles(SocialAuthComponent, (theme: ThemeType) => ({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  hint: {
    alignSelf: 'center',
    marginBottom: 16,
    ...textStyle.subtitle,
  },
}));

