import React from 'react';
import {
  ImageProps,
  StyleProp,
  TextStyle,
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  IconElement,
  IconProps,
  Text,
} from '@kitten/ui';
import { textStyle } from './style';

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageProps>;
  icon?: (style: IconProps<ImageProps>) => IconElement<ImageProps>;
  children?: string;
}

export type TextIconProps = ThemedComponentProps & ViewProps & ComponentProps;

class TextIconComponent extends React.Component<TextIconProps> {

  private renderIconElement = (style: IconProps<ImageProps>): IconElement<ImageProps> | null => {
    const { icon } = this.props;

    return icon && icon(style);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, textStyle: derivedTextStyle, iconStyle, icon, children } = this.props;

    const iconElement: IconElement<ImageProps> | null =
      this.renderIconElement({ ...themedStyle.icon, ...StyleSheet.flatten(iconStyle) });

    return (
      <View style={[themedStyle.container, style]}>
        {iconElement}
        <Text style={[themedStyle.text, derivedTextStyle]}>
          {children}
        </Text>
      </View>
    );
  }
}

export const TextIcon = withStyles(TextIconComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
    ...textStyle.paragraph,
  },
  icon: {
    width: 16,
    height: 16,
  },
}));
