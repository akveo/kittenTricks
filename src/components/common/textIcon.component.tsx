import React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
  TextStyle,
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

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageProps>;
  icon?: IconProp;
  children?: React.ReactText;
}

export type TextIconProps = ThemedComponentProps & ViewProps & ComponentProps;

class TextIconComponent extends React.Component<TextIconProps> {

  private renderIconElement = (icon: IconProp, style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = icon(style);

    return React.cloneElement(iconElement, {
      style: [style, iconElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, textStyle, iconStyle, icon, children } = this.props;

    const iconElement = icon ? this.renderIconElement(icon, [themedStyle.icon, iconStyle]) : null;

    return (
      <View style={[themedStyle.container, style]}>
        {iconElement}
        <Text style={[themedStyle.text, textStyle]}>{children}</Text>
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
    fontSize: 13,
    marginHorizontal: 8,
  },
  icon: {
    width: 16,
    height: 16,
  },
}));
