import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  Chips,
  textStyle,
} from '@src/components/common';
import { ClockIconOutline } from '@src/assets/icons';

interface ComponentProps {
  hint?: string;
  value: string;
  icon?: (style: StyleType) => React.ReactElement<ImageProps>;
  onPress?: () => void;
}

export type StyxProps = ThemedComponentProps & ViewProps & ComponentProps;

class StyxComponent extends React.Component<StyxProps> {

  static defaultProps: Partial<StyxProps> = {
    hint: 'STYX',
    icon: ClockIconOutline,
  };

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, icon, onPress, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text
          style={themedStyle.hintLabel}
          category='h6'>
          {hint}
        </Text>
        <Chips
          style={themedStyle.chips}
          icon={ClockIconOutline}>
          <Text
            style={themedStyle.chipsText}
            category='c2'>
            {value}
          </Text>
        </Chips>
      </View>
    );
  }
}

export const Styx = withStyles(StyxComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme['background-basic-color-2'],
  },
  hintLabel: {
    marginHorizontal: 16,
    marginVertical: 14,
    ...textStyle.headline,
  },
  chips: {
    width: 80,
  },
  chipsText: {
    color: 'white',
    ...textStyle.caption2,
  },
}));


