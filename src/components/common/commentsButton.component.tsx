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
import { MessageCircleIconOutline } from '@src/assets/icons';

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactText;
}

export type CommentsButtonProps = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class CommentsButtonComponent extends React.Component<CommentsButtonProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, textStyle, children, ...restProps } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        {...restProps}>
        <Text
          style={[themedStyle.valueLabel, textStyle]}
          category='p2'>
          {children}
        </Text>
        {MessageCircleIconOutline(themedStyle.icon)}
      </TouchableOpacity>
    );
  }
}

export const CommentsButton = withStyles(CommentsButtonComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: theme['color-basic-500'],
  },
  valueLabel: {
    marginHorizontal: 8,
  },
}));
