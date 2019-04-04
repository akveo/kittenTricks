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
import { Text } from '@src/components/common';

interface ComponentProps {
  hint: React.ReactText;
  value: React.ReactText;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileParameter1Component extends React.Component<Props> {

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

export const ProfileParameter1 = withStyles(ProfileParameter1Component, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
  valueLabel: {
    fontFamily: 'anton-regular',
    fontSize: 20,
  },
  hintLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
  },
}));
