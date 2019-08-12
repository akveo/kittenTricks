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

interface ComponentProps {
  scale: string;
  valueStyle?: StyleProp<TextStyle>;
  scaleStyle?: StyleProp<TextStyle>;
  children: string;
}

export type PriceTextProps = ThemedComponentProps & ViewProps & ComponentProps;

class PriceTextComponent extends React.Component<PriceTextProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, valueStyle, scaleStyle, children, scale } = this.props;

    return (
      <View style={[themedStyle.container, style]}>
        <Text style={[themedStyle.valueLabel, valueStyle]}>{children}</Text>
        <Text style={[themedStyle.scaleLabel, scaleStyle]}>{`/${scale}`}</Text>
      </View>
    );
  }
}

export const PriceText = withStyles(PriceTextComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
  },
  valueLabel: {},
  scaleLabel: {
    alignSelf: 'flex-end',
  },
}));
