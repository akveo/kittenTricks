import React from 'react';
import {
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
  hint: React.ReactText;
  value: React.ReactText;
}

export type ProfileParameterProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileParameterComponent extends React.Component<ProfileParameterProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Text style={themedStyle.valueLabel}>{value}</Text>
        <Text style={themedStyle.hintLabel}>{hint}</Text>
      </View>
    );
  }
}

export const ProfileParameter = withStyles(ProfileParameterComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
  valueLabel: {
    fontFamily: 'anton-regular',
    fontSize: 20,
    color: theme['color-white'],
  },
  hintLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: theme['color-white'],
  },
}));
