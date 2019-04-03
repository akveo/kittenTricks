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
import {
  Text,
  Button,
} from '@src/components/common';
import { ClockIcon } from '@src/assets/icons';

interface ComponentProps {
  hint?: React.ReactText;
  value: React.ReactText;
  icon?: (style: StyleType) => React.ReactElement<ImageProps>;
  onPress?: () => void;
}

export type StyxProps = ThemedComponentProps & ViewProps & ComponentProps;

class StyxComponent extends React.Component<StyxProps> {

  static defaultProps: Partial<StyxProps> = {
    hint: 'STYX',
    icon: ClockIcon,
  };

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, icon, onPress, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text style={themedStyle.hintLabel}>{hint}</Text>
        <Button
          style={themedStyle.valueButton}
          icon={icon}
          onPress={onPress}>
          {value}
        </Button>
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
    backgroundColor: '#F4F5F8',
  },
  hintLabel: {
    marginHorizontal: 16,
    marginVertical: 14,
    fontFamily: 'anton-regular',
    fontSize: 20,
    color: '#0D1C2E',
  },
  valueButton: {
    height: 24,
    borderRadius: 12,
    fontFamily: 'opensans-semibold',
  },
}));


