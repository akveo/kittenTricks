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
import { ShareIconOutline } from '@src/assets/icons';

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  children?: string;
}

export type ShareButtonProps = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class ShareButtonComponent extends React.Component<ShareButtonProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, textStyle, children, ...restProps } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        {...restProps}>
        {ShareIconOutline(themedStyle.icon)}
        <Text
          style={[themedStyle.valueLabel, textStyle]}
          category='p2'>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export const ShareButton = withStyles(ShareButtonComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: theme['text-hint-color'],
  },
  valueLabel: {
    marginHorizontal: 8,
  },
}));
