import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { HeartIconFill } from '@src/assets/icons';

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  children?: string;
}

export type LikeButtonProps = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class LikeButtonComponent extends React.Component<LikeButtonProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, textStyle, children, ...restProps } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        {...restProps}>
        {HeartIconFill(themedStyle.icon)}
        <Text
          style={[themedStyle.valueLabel, textStyle]}
          category='p2'>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export const LikeButton = withStyles(LikeButtonComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: theme['color-danger-default'],
  },
  valueLabel: {
    marginHorizontal: 8,
  },
}));
