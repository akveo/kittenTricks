import React from 'react';
import {
  StyleProp,
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

interface ComponentProps {
  hint: string;
  value: string;
  hintStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
}

export type ProfileParameterProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileParameterComponent extends React.Component<ProfileParameterProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Text
          style={themedStyle.valueLabel}
          category='h6'>
          {value}
        </Text>
        <Text
          style={themedStyle.hintLabel}>
          {hint}
        </Text>
      </View>
    );
  }
}

export const ProfileParameter = withStyles(ProfileParameterComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
  valueLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  hintLabel: {
    color: 'white',
    ...textStyle.subtitle,
  },
}));
