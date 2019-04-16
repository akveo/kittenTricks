import React from 'react';
import {
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

interface ComponentProps {
  hint?: React.ReactText;
  value: React.ReactText;
}

export type ProfileSettingProps = ComponentProps & ViewProps & ThemedComponentProps;

class ProfileSettingComponent extends React.Component<ProfileSettingProps> {

  private renderTextElement = (text: React.ReactText, style: StyleProp<TextStyle>): React.ReactElement<TextProps> => {
    return (
      <Text style={style}>
        {text}
      </Text>
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, ...restProps } = this.props;
    const { container, hint: hintStyle, value: valueStyle } = themedStyle;

    return (
      <View
        {...restProps}
        style={[container, style]}>
        {hint ? this.renderTextElement(hint, hintStyle) : null}
        {this.renderTextElement(value, valueStyle)}
      </View>
    );
  }
}

export const ProfileSetting = withStyles(ProfileSettingComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['gray-light'],
  },
  hint: {
    color: theme['color-basic-600'],
    fontFamily: 'opensans-semibold',
  },
  value: {
    color: theme['font-primary-color'],
    fontFamily: 'opensans-semibold',
  },
}));
